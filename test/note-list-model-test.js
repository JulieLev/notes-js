var assert = require("../lib/assert");
var List = require("../src/note-list-model").List;

function testCreateList() {
  var list = new List();
  var array = list.getNotes();
  list.addNote("My favourite language is Javascript");

  assert.arrayContains(array, "My favourite language is Javascript");
};

testCreateList();
