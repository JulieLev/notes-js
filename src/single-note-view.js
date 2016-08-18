(function(exports){

  function SingleNoteView(note){
    this.note = note;
  }
  SingleNoteView.prototype.writeHTML = function(){
    var string ="<div>"+this.note.getText()+"</div>";
    return string;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
