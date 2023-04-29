// jshint esversion:6
const path = require("path");
const mime = require("mime");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

console.log(__dirname);

app.use((req, res, next) => {
  console.log(`Received request for: ${req.url}`);
  next();
});

app.get("/", function (req, res, next) {
  const dayNum = new Date().getMonth();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayNum];
  console.log(dayNum);
  res.render("list", { kindofDay: day });
});

app.listen(3000, () => {
  console.log("Server started at 3000");
});
