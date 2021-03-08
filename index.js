const xlsx = require('node-xlsx').default;

const workSheetsFromFile = xlsx.parse(`${__dirname}/operations.xls`);
const { data } = workSheetsFromFile[0];

console.log(data);