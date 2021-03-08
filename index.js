const xlsx = require('node-xlsx').default;
const json = require('./categoryMapping.json');

const valuableRows = [11, 14, 1, 9];

const workSheetsFromFile = xlsx.parse(`${__dirname}/operations2.xls`);
const { data } = workSheetsFromFile[0];
const newTable = data.map(row => valuableRows.map(rowInd => row[rowInd]))
    .filter(row => [row.length - 1])
    .filter(row => !json.useless[row[row.length - 1]]);

console.log(newTable);