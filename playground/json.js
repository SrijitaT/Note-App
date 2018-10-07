const fs = require("fs");
var sampleNote = {
  title: "Some title",
  body: "Some body"
};
var sampleNoteString = JSON.stringify(sampleNote);
console.log("Writing to file...");
fs.writeFileSync("notes.json", sampleNoteString);

var noteString = fs.readFileSync("notes.json");
console.log("Content of file notes", JSON.parse(noteString));
