const express = require("express");
const accountsRouter = require("../api/accounts/accounts-router")

const server = express();

server.use(express.json());
server.use(accountsRouter)

module.exports = server;
