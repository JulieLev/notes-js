var assert = require("../lib/assert");
var List = require("../src/note-list-model").List;

function testNoteInList() {
  var list = new List();
  var array = list.getNotes();
  list.addNote("Hello")
  list.addNote("My favourite language is Javascript");
  list.addNote("Goodbye")

  assert.arrayContains("My favourite language is Javascript", array);
};

function testListStoresMultipleNotes() {
  var list = new List();
  var array = list.getNotes();
  list.addNote("Hello")
  list.addNote("My favourite language is Javascript");
  list.addNote("Goodbye")

  assert.arrayLength(array, 3);
};

testListStoresMultipleNotes();
testNoteInList();
