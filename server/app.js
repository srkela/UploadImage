const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", function(req, res) {
  // TODO: finish POST to handle image
  // TODO create middleware for image file validation
});

app.use("(https://imagehasbeenverified.example.endpoint)", router);
