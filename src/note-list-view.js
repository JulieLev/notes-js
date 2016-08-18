(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.outputWeb = function() {
    var string ="";
    var list1 = this.list;
    if(list1.length !==0) {
      list1.forEach(function(note){
        string +="<li>"+note.getText()+"</li>";
      });
        string = "<ul>" + string + "</ul>";
    }
      return string;
  };

  NoteListView.prototype.outputTwenty = function() {
    var stringLimit20 = "";
    var list1 = this.list;
    if (list1.length !==0) {

      list1.forEach(function(note) {
        var stringNote;
        var noteId;
        stringNote = note.getText();
        noteId = note.getId();
        stringNote = stringNote.substring(0,20);
        stringNote =
        stringLimit20 +="<li><a href=\"localhost8080:\#" + noteId + "\">" + stringNote + "</a></li>";
      });
        stringLimit20 = "<ul>" + stringLimit20 + "</ul>";
    }
      return stringLimit20;
  };
// "<ul><li><a href=\"localhost8080:\#0\">I am Julie - ha ha</a></li></ul>"
exports.NoteListView = NoteListView;

})(this);
