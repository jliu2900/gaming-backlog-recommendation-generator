const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening at 3000")); // * Run server with the command "node index.js"
app.use(express.static("public"));
