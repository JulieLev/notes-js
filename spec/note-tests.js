function testNoteGetText(){
  var note = new Note("My favourite language is JavaScript");
  if(note.getText() === "My favourite language is JavaScript") {
    console.log("Pass: Note can input and output the same text. Test passes.");
  }
  else {
    console.log("Fail: Note input and output do not match. Test fails.");
  };
};
testNoteGetText();
