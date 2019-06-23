var express = require("express");
var app = express();
var path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "view/index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(process.cwd(), "view/Login.html"));
});

app.get("/gettingstarted", (req, res) => {
    res.sendFile(path.join(process.cwd(), "view/GetStarted.html"));
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Started");
})