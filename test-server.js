const { createServer } = require("http");

createServer(require("./index")).listen(3000, _ => console.log(3000));
