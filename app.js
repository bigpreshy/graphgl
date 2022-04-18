const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(2020, () => {
    console.log('now listening at port 2020');
});
