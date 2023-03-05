// require dependancies 
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

// Require Routes
const userRoutes = require("./routers")

// get server instance
const app = express();

// listen to server 
app.listen(3000, () => console.log("Listening"));

// MW method
app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.use(cors({ origin: true }));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));


// Router EndPoints
app.use(userRoutes)

// MW general middleware for not Found url pathes
app.use((request, response) => {
    response.status(404).json({data:"NOT FOUND"})
})

// MW Error handling that will catch all system Errors
app.use((error,request,response,next) => {
    let status=error.status||500;
    response.status(status).json({Error:error+""});
})

















