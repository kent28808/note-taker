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
 for (var i = 0; i < data.length; i++){
   if (data[i].id == req.params.id){
     data.splice(i,1);
   }
 }
 return res.json(data)
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