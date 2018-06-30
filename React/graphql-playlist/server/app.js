const express = require("express");
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

mongoose.connect("mongodb://phucngo:phucngo95@ds121311.mlab.com:21311/gpl");
mongoose.connection.once('open', () => {
    console.log('connection has been made');
});

app.use('/graphql', grapqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});