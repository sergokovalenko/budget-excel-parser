const xlsx = require('node-xlsx').default;

const valuableRows = [11, 14, 1, 9];

const workSheetsFromFile = xlsx.parse(`${__dirname}/operations.xls`);
const { data } = workSheetsFromFile[0];
const newTable = data.map(row => {
    return valuableRows.map(rowInd => row[rowInd]);
});

console.log(newTable);