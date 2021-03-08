const xlsx = require('node-xlsx').default;
const fs = require('fs');

const json = require('./categoryMapping.json');

const valuableRows = [11, 14, 1, 9];
const categories = Object.entries(json.categories)
    .reduce((acc, [categoryNumber, values]) => {
        values.forEach(tinkCategoryName => {
            acc[tinkCategoryName] = categoryNumber;
        });

        return acc;
    }, {});

const workSheetsFromFile = xlsx.parse(`${__dirname}/operations.xls`);
const { data } = workSheetsFromFile[0];
const newTable = data.map(row => valuableRows.map(rowInd => row[rowInd]))
    .filter(row => row[row.length - 1])
    .filter(row => !json.useless[row[row.length - 1]])
    .map(row => row.map((cell, i) => i === row.length - 1 ? categories[cell] : cell))

const bin = xlsx.build([{ name: '', data: newTable }]);

fs.writeFile('result.xls', bin,  'binary', (err) => {
    if (err) {
        console.log(err);
        console.log('The file was not saved!');
    } else {
        console.log("The file was saved!");
    }
});
