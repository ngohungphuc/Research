const {
    graphql
} = require('graphql');
const readline = require('readline');
const mySchema = require('./schema/main');
const {
    MongoClient
} = require('mongodb');
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017/graphql';

MongoClient.connect(MONGO_URL, (err, db) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');
    // The readline interface code
});

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