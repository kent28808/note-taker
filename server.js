// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var data = require("./db/db.json");
var notes = [];
var htmlRoutes = require("./routes/index")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("Visit at http://localhost:" + PORT);
});
