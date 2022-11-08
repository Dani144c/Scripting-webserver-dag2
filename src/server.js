const { log } = require("console");
const http = require("http");
const config = require("./config/serverconfig.json");

const controller = require("./controller");

const server = http.createServer(controller)

server.listen(config.port);

console.log(`Server startet, lytter på port ${config.port}. Gå til ${config.host}:${config.port}`);