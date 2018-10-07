console.log("Starting app..");

const fs = require("fs"); //core modules
const os = require("os");
const _ = require("lodash"); //in node module
const yargs = require("yargs");
var user = os.userInfo();
const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];

switch (command) {
  case "add": {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      notes.logNote(note, "Added");
    } else {
      console.log("Note already added!!");
    }

    break;
  }
  case "list": {
    const allNotes = notes.getAll();
    if (allNotes) {
      console.log("Heres the things you need to do: ");
      allNotes.map(note => notes.logNote(note));
    } else {
      console.log("No notes added");
    }
    break;
  }
  case "read": {
    const note = notes.getNote(argv.title);
    if (note) {
      notes.logNote(note, "Found");
    } else {
      console.log("Note not found!");
    }
    break;
  }
  case "delete": {
    let delNote = notes.deleteNote(argv.title);
    if (delNote == "success") {
      console.log("Deleted note successfully");
    } else {
      console.log("Note could not be deleted");
    }
    break;
  }
  default:
    console.log("Could not recognize command");
}

// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username} you are ${notes.age}!`,
//   err => {
//     if (err) {
//       console.log("Unable to write to file");
//     }
//   }
// );
