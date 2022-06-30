const express = require('express');
//const routes = require('./routes/api');

//setup express app
const app = express();

app.use('/api', require('./routes/api'));

//listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});