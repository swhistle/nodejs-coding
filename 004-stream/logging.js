#!/usr/bin/env node
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ZERO = 0;
const ONE = 1;

const question = 'Ноль или единица? Введите 0 или 1';

const args = process.argv.splice(2, 3);
const defaultLogFileName = 'log.txt';
const logFileName = args.length > 0 ? args[0] : defaultLogFileName;
const logFile = path.join(__dirname, logFileName);

rl.on('line', (input) => {
    const zeroOrOne = Math.round(Math.random());

    const inputWithoutSpace = input.replace(/\s/g, '');
    const inputNumber = Number(inputWithoutSpace);
    let result = '';

    if (isNaN(inputNumber) || inputWithoutSpace === '') {
        console.log(`Вы ввели значение, которое не является числом`);
        return;
    }

    if (!(inputNumber === ZERO || inputNumber === ONE)) {
        console.log(`Введите 0 или 1`);
        return;
    }

    if (inputNumber === zeroOrOne) {
        console.log(`Правильно, Вы выиграли!`);
    } else  {
        console.log(`Нет, Вы проиграли.`);
    }

    result = [zeroOrOne, inputNumber];

    const resultString = result.toString() + '; ';

    fs.appendFile(logFile, resultString, (err) => {
        if (err) throw new Error(err);
    });

    console.log(question);
});

rl.on('close', () => {
    console.log('Игра окончена.');
});

console.log(question);