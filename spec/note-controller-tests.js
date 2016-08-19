function testNoteController () {
  noteController = new NoteController("Hello, World!");
  noteController.insertHTML();
  var outputStr = document.getElementById("app").innerHTML;
  if (outputStr === "<ul><li><a href=\"\#0\">Hello, World!</a></li></ul>") {
    console.log("Pass: Note displayed in the html page");
  }
  else {
    console.log("Fail: Note is NOT displayed in the html page");
  }
}

testNoteController();
