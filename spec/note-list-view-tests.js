function testNoteListView(){
  var list = new NoteList();
  list.addNote("I am Alwin.");
  list.addNote("I am Noby.");
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === "<ul><li>I am Alwin.</li><li>I am Noby.</li></ul>"){
    console.log("Pass: Notes were successfully converted into a html string.");
  }
  else {
    console.log("Fail: Notes did NOT convert into a html string properly.");
  }
}
testNoteListView();

function testNoNoteListView(){
  var list = new NoteList();
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === ""){
    console.log("Pass: No note. This is correct");
  }
  else {
    console.log("Fail: Something is returned. This is WRONG");
  }
}
testNoNoteListView();

function testOutputTwenty() {
  var list = new NoteList();

  list.addNote("This is a string which must have more than 20");
  var noteListView = new NoteListView(list.displayList());
  var web20String = noteListView.outputTwenty();
  if (web20String === "<ul><li><a href=\"localhost8080:\#0\">This is a string whi</a></li></ul>") {
    console.log("Pass: Restricts to 20 characters");
  }
  else {
    console.log("Fail: NOT restricted to 20 characters");
  }
}
testOutputTwenty();

function testOutputTwentyExact() {
  var list = new NoteList();

  list.addNote("12345678901234567890");
  var noteListView = new NoteListView(list.displayList());
  var web20String = noteListView.outputTwenty();
  if (web20String === "<ul><li><a href=\"localhost8080:\#0\">12345678901234567890</a></li></ul>") {
    console.log("Pass: Restricts to exactly 20 characters");
  }
  else {
    console.log("Fail: NOT restricted to exactly 20 characters");
  }
}
testOutputTwentyExact();

function testNoteLinkIncludesHref() {
  var list = new NoteList();
  list.addNote("I am Julie - ha ha");
  var noteListView = new NoteListView(list.displayList());
  var webIdString = noteListView.outputTwenty();
  if (webIdString === "<ul><li><a href=\"localhost8080:\#0\">I am Julie - ha ha</a></li></ul>") {
    console.log("Pass: href tag is included properly");
  }
  else {
    console.log("Fail: href tag is NOT included properly");
  }
}
testNoteLinkIncludesHref();
