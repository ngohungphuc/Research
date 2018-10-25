const graphqlHTTP = require('express-graphql');
const express = require('express');

const app = express();
const mySchema = require('./schema/main');

const { MongoClient } = require('mongodb');
const assert = require('assert');

const MONGO_URL = 'mongodb://localhost:27017/graphql';

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');

  app.use('/graphql', graphqlHTTP({
    schema: mySchema,
    context: { db },
    graphiql: true
  }));

  app.listen(3000, () =>
    console.log('Running Express.js on port 3000')
  );
});