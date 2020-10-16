// Dependencies
// =============================================================
var express = require("express");
var path = require("path"); 
var fs = require("fs");
var data = require("./db/db.json");
var notes = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic routes
//GET
//index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  //notes.html
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  //api notes
  app.get("/api/notes", function(req, res) {
    return res.json(data);
  });
  
  //POST
  app.post("/api/notes", function(req, res) {
    var newNotes = req.body;
    data.push(newNotes);
    console.log(newNotes)};

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
