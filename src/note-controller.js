(function(exports) {
  //document.getElementById("app").innerHTML = "Yippie!";
  function NoteController(text){
    var list = new NoteList();
    list.addNote(text);
    this.noteList = list.displayList();
    this.noteListView = new NoteListView(list.displayList());
    window.addEventListener('hashchange', this.showNoteForCurrentId);
  };

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.outputTwenty();
  };

  NoteController.prototype.showNoteForCurrentId = function() {
    var noteId = location.hash.split("#")[1];
    var singleNote;

    noteController.noteList.forEach(function(item) {
      if (item.id === Number(noteId)) {singleNote = item}
    });

    var singleNoteView = new SingleNoteView(singleNote);
    document.getElementById('app').innerHTML = singleNoteView.writeHTML();
  };

  exports.NoteController = NoteController;
})(this);
