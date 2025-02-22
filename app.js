const express = require("express");
const app = express();
const port = 8080
const routes = require('./app/routeConfig')

//Another test


//setting up the routes
app.use('/', routes);

//Let's start the app
app.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`)
})