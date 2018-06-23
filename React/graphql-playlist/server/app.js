const express = require("express");
const grapqlHTTP = require('express-graphql');
const app = express();

app.use('/graphql', grapqlHTTP({

}));
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});