const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
require("./helpers/crons");
const config = require("./config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

/**Get Image */
app.use(express.static(`./public`));

app.use("/v1", routes);
app.use((req, res, next) => { next(new Error("Route not found!")) });

connectDB();

const server = http.createServer(app);
server.listen(config.port, () => { console.log("server listening port number " + config.port) });