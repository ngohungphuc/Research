const express = require("express");
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', grapqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});