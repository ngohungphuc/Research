const {
    graphql
} = require('graphql');
const readline = require('readline');
const mySchema = require('./schema/main');

const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rli.question('Client request ', inputQuery => {
    graphql(mySchema, inputQuery).then(res => {
        console.log('Server answer ', res.data);
    });

    rli.close();
});