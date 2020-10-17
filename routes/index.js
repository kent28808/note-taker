const path = require ("path")
const router = require ("express").Router();
const data = require("../db/db.json");
let currentid = 6

//api notes
router.get("/api/notes", function (req, res) {
  return res.json(data);
});

//POST
router.post("/api/notes", function (req, res) {
  var newNotes = {
    id: currentid, 
    ...req.body
  }
  currentid++
  data.push(newNotes);
  return res.json(data)
  console.log(newNotes)
});

//DELETE
router.delete(("/api/notes/:id"), function (req, res) {
 const newdata = data.filter(item=> item.id != req.params.id)
 console.log(newdata)
 return res.json(newdata)
})

//notes.html
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
//index.html
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router