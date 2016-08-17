// var Note = require('./note-model');
(function(exports) {
  function NoteList(){
    this._notes = [];
  }

  NoteList.prototype = {
    addNoteToNotes: function(text){
      var note = new Note(text);
      this._notes.push(note);
    },
    getNotes: function(){
      return this._notes;
    },
  };

  exports.NoteList = NoteList;
  // exports.addNoteToNotes = addNoteToNotes;
  // exports.getNotes = getNotes;
})(this);

// module.exports = NoteList;
