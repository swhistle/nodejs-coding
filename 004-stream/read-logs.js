const path = require('path');
const fs = require('fs');

const args = process.argv.splice(2, 3);
const defaultLogFileName = 'log.txt';

const inputLogFileName = args[0];
const inputLogFile = inputLogFileName && path.join(__dirname, inputLogFileName);
const logFile = fs.existsSync(inputLogFile) ? inputLogFile : path.join(__dirname, defaultLogFileName);

fs.readFile(logFile, 'utf-8', (err, data) => {
    if (err) throw new Error(err);

    const games = data.split('; ').filter(item => item !== '');

    const gamesNumber = games.length;
    const numberOfWins = games.reduce((acc, current) => {
        const items = current.split(',');
        const result = items[0] === items[1];
        return acc + Number(result);
    }, 0);

    const gamesResults = `Результаты:
    - общее количество партий: ${gamesNumber}
    - количество выигранных / проигранных партий: ${numberOfWins} / ${gamesNumber - numberOfWins}
    - процентное соотношение выигранных партий: ${Math.round(numberOfWins / gamesNumber * 100)}%
    `;

    console.log(gamesResults);
});