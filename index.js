const express = require("express");
const app = express();
app.all("/", (req, res) => {
    console.log("Just got a request!");
    res.send("Hello World....this is from the PC!");
});
app.listen(process.env.PORT || 3000);