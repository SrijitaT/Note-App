console.log("Starting note...");
const fs = require("fs");
module.exports.age = 25;

var fetchNotes = () => {
  let notes;
  try {
    notes = JSON.parse(fs.readFileSync("notes-data.json"));
    return notes;
  } catch (err) {
    if (err.code == "ENOENT") notes = [];
    return [];
  }
};
var saveNote = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
var addNote = (title, body) => {
  var note = { title, body };
  let notes = fetchNotes();
  var duplicateNote = notes.filter(note => note.title === title);
  if (duplicateNote.length == 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

var getAll = () => {
  const notes = fetchNotes();
  return notes;
};

var getNote = title => {
  const notes = fetchNotes();
  const filteredNote = notes.filter(note => note.title == title);
  return filteredNote[0];
};

var deleteNote = title => {
  const notes = fetchNotes();
  let index = -1;
  const filteredNote = notes.filter(note => note.title === title);
  if (filteredNote.length > 0) {
    index = notes.map(note => note.title).indexOf(filteredNote[0].title);
    notes.splice(index, 1);
    saveNote(notes);
    return "success";
  }
};

var logNote = (note, action) => {
  action ? console.log(action + " note") : "";
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports = { addNote, getAll, getNote, deleteNote, logNote };
