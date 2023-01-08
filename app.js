const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  response.send("Service is running");
});

modules.export(app);
