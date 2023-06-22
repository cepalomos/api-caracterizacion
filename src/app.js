const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { responseError } = require("./response/response");
const urlFront = process.env.FRONT_URL ?? "http://localhost:3000";

const server = express();

server.use(express.json());
server.use(cors({
  origin: urlFront, // Reemplaza con la URL del frontend
  credentials: true
}));
server.use("/", routes);

server.use(responseError);

module.exports = server;
