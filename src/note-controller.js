(function(exports) {
  //document.getElementById("app").innerHTML = "Yippie!";
  function NoteController(text){
    var list = new NoteList();
    list.addNote(text);
    this.noteListView = new NoteListView(list.displayList());
  }

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.outputTwenty();
  };

  exports.NoteController = NoteController;
})(this);
