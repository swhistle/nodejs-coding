#!/usr/bin/env node
const currentDate = new Date();
const args = process.argv.splice(2, 3);

const getFormatDate = (dateUnitParam) => {
    const dateUnit = dateUnitParam && dateUnitParam.replace(/-/g, '');

    if (dateUnit === 'year' || dateUnit === 'y') {
        return currentDate.getFullYear();
    }

    if (dateUnit === 'month' || dateUnit === 'm') {
        return currentDate.getMonth();
    }

    if (dateUnit === 'date' || dateUnit === 'd') {
        return currentDate.getDate();
    }

    return currentDate;
}

const getDate = (dateOperation, dateParam, dateShift) => {
    const date = getFormatDate(dateParam);

    const shouldDateShift = !isNaN(Number(dateShift));

    if (dateOperation === 'add' && shouldDateShift) {
        return Number(date) + Number(dateShift);
    }

    if (dateOperation === 'sub' && shouldDateShift) {
        return date - dateShift;
    }

    return date;
}

const getResultDate = (arguments) => {
    switch (arguments.length) {
        case 1:
            return getDate(undefined, arguments[0])

        case 3:
            return getDate(...arguments);

        default:
            return getDate();
    }
}

console.log(getResultDate(args));

