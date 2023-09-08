const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/dbConnection");
const postroute = require("./routers/postRoute");
const getroute = require("./routers/getRoute");
const putroute = require("./routers/updateRoute");
const deleteroute = require("./routers/deleteRoute");

// Database connection with MongoDB
connectDb();

//body parser
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(cors());
//routers
app.use("/data", getroute);
app.use("/", postroute);
app.use("/", putroute);
app.use("/", deleteroute);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});