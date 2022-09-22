const { appendFile } = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const app = http.createServer((req , res) => {
    res.write("<h1> Helllo world </h1>");
    res.write("<h3> Node Js web page has been deployed to Heroku! </h3>");
    res.end();
});
app.listen(port);