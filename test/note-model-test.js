// (function() {
var assert = require("../lib/assert");
var Note = require("../src/note-model").Note;

  function testCreateNote() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note.getText() === "My favourite language is Javascript");
  }

// })();
testCreateNote();
