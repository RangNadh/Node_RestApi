const express = require('express');

//setup express app
const app = express();

//listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});