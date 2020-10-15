const readline = require('readline');
const fs = require('fs');
const path = require('path');
const ROOT = path.join( __dirname, 'root');
const chalk = require('chalk');
const execSync = require('child_process').execSync






const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





const createSnapshot = function() {
    try {
        console.log(chalk.green('Начинаем скнирование'));
        const dirs = fs.readdirSync(__dirname + '/root/photos', { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name);
        
        console.log(`${dirs.length + 1} альбомов найдено`);
        const jsonData = {
            albumsList: []
        }
        dirs.forEach((dirName) => {
            const filesList = fs.readdirSync(ROOT + '/photos/' + dirName);
            console.log(`Альбом: ${chalk.bold(dirName)} --- фотографий ${chalk.bold(filesList.length + 1)}`);
            jsonData.albumsList.push({name:dirName, photosList:filesList});
        });
        
        fs.writeFileSync(ROOT + '/photos/data.json', JSON.stringify(jsonData));
        console.log(chalk.green('Сканирование закончено\nВызовите команду "push", чтобы отправить изменения на сервер'));
    }
    catch (e) {
        console.error(chalk.red('Smth went wrong!'));
    }
}
const createName = function() {
    let nameString = 'auto_commit';
    nameString += Math.floor(Math.random() * 1024);
    return nameString;
}
const push = function() {
    console.log(chalk.green('Начинаем выгрузку на сервер, действие может занять несколько минут'));
    try {
        console.log(execSync(`git add . && git commit -m "${createName()}" && git push -f`).toString());
    }
    catch (e) {
        console.error(chalk.yellow('Произошла не критическая ошибка\n') + e.output);
    }
    console.log(chalk.green.bold('Finished'));
}


const selfUpdate = function() {
    console.log(chalk.green('Начинаем обновление'));
    try {
        execSync('git pull --force');
        console.log(chalk.green('Обновление завершено'));
    }
    catch (e) {
        console.error(chalk.red('Произошла ошибка при обновлении\n') + e.output);
    }
}

const fix =function () {
    try {
        console.log(chalk.green('Решаем проблему'));
        execSync('git fetch --all');
        console.log(chalk.green('Проблема решена'));
    }
    catch (e) {
        console.error(e);
    }
}

interface.on('line', (line) => {
    if (line === 'snapshot') {
        createSnapshot();
    }
    else if (line === 'push') {
        push();
    }
    else if (line === 'update') {
        selfUpdate();
    }
    else if (line === 'fix') {
        fix();
    }
});