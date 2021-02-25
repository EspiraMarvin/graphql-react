const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb db
// mongoose.connect('mongodb+srv://marvin:test1234@cluster0.snuhb.mongodb.net/myFirstDatabase');
// mongoose.set('useNewUrlParser', true)
// mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb+srv://marvin:test1234@cluster0.snuhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// mongoose.connection.onOpen()
mongoose.connection.once('open',() => {
    console.log('connected to db')
});

//middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening for requests on port 4000')
});
