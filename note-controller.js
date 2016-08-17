(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList
    this.element;
  };

    NoteController.prototype.displayNotesList = function() {


        this.element.innerHTML = '<h1>three bananas</h1>';
        // console.log(element.innerHTML);

    };

    document.addEventListener('DOMContentLoaded', function(){
      this.element = document.getElementById('app');
    });

  exports.NoteController = NoteController;
})(this);
