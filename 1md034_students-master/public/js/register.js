var fs = require('fs');

var originalNote = {
	name: "hej",
	age: 30,
	gender: "M",
	desc: "yoyoyo",
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('dummy_users.js', originalNoteString);

var noteString = fs.readFileSync('dummy_users.js');

var note = JSON.parse(noteString);