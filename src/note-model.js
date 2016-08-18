(function(exports) {

  function Note(string){
    this.text = string;
  }

  Note.prototype.getText = function(){
    return this.text;
  };

  Note.prototype.getId = function() {
    return this.id;
  }

exports.Note = Note;

})(this);
