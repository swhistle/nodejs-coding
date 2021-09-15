#!/usr/bin/env node
const readline = require('readline');

const number = Math.floor(Math.random() * 100);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (data) => {
    const inputNumber = Number(data);

    if (isNaN(inputNumber)) {
        console.log(`Вы ввели значение, которое не является числом \r`);
    }

    if (inputNumber === number) {
        rl.close();

    } else if (inputNumber < number) {
        console.log('Меньше');
    } else if (inputNumber > number) {
        console.log('Больше');
    }
});

rl.on('close', () => console.log('Отгадано число ' + number));

console.log('Загадано число в диапазоне от 0 до 100');