let notes = document.getElementById("notes");
let value = JSON.parse(localStorage.getItem("note"));
const msg = document.getElementById("msg");
const addBtn = document.getElementById("addbtn");
showAllData();


// To do when someone click addnote button

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (addBtn.getAttribute('index') == 'blank'){
  const addTxt = document.getElementById("addtxt");
  if (addTxt.value !== "") {
    note = localStorage.getItem("note");
    if (note == null) {
      noteObj = [];
    } else {
      noteObj = JSON.parse(note);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    showAllData();
    addTxt.value = "";
    msg.innerHTML = ``;

    // When Someone try to add blank note display the message
  } else {
    // msg.innerHTML = `<div class="alert alert-danger" id="msg">
    // sorry !! blank note entry is not allowed
    // </div>`;
    //pass
  }
}
else{
  value = addBtn.getAttribute('index');
  notes = localStorage.getItem("note");
  const addTxt = document.getElementById("addtxt");
  if (addTxt.value == ''){
    addBtn.innerText = 'Add Todo';
  addBtn.setAttribute('index', 'blank');
  addTxt.value = '';
  showAllData();
  }
  else{
  notesObj = JSON.parse(notes);
  notesObj[value] = addTxt.value;
  localStorage.setItem("note", JSON.stringify(notesObj));
  addBtn.innerText = 'Add Todo';
  addBtn.setAttribute('index', 'blank');
  addTxt.value = '';
  showAllData();
}
}
});


// Function to delete note
function deleteData(value) {
  console.log("You want to delete note of index", value);
  notes = localStorage.getItem("note");
  notesObj = JSON.parse(notes);
  notesObj.splice(value, 1);
  localStorage.setItem("note", JSON.stringify(notesObj));
  showAllData();
}

function editData(value){
  notes = localStorage.getItem("note");
  notesObj = JSON.parse(notes);
  console.log('you want to edit ', notesObj[value]);
  const addTxt = document.getElementById('addtxt');
  const addBtn = document.getElementById("addbtn");
  addTxt.value = notesObj[value];
  addBtn.innerText = 'update';
  addBtn.setAttribute('index', value);
  addTxt.focus();
  console.log(addBtn.getAttribute('index'));

}


// Function that show all notes
function showAllData() {
  notes = localStorage.getItem("note");
  notes = JSON.parse(notes);
  if (notes == null){
    notes = [];
  }
  if (notes.length == 0) {
    msg.innerHTML += `<div class="alert alert-danger" id="msg">
  Sorry !! No notes added
  </div>`;
  }
  let note = document.getElementById("notes");
  note.innerHTML = "";
  notes.forEach((element, index) => {
    note.innerHTML += `
    <div class='todo-row'>
             <div>${element}</div>
   <div class='icons'>
    <a id='${index}' onClick="editData(this.id)"><i class="fas fa-edit edit-icon"></i></a>
    <a id='${index}' onClick="deleteData(this.id)"><i class="fas fa-trash delete-icon"></i></a>
   </div>
  </div>
    `
  
  ;
  });
}

// // Search Functionality
// let search = document.getElementById('search');
// search.addEventListener('input', function(){
//   search_text = search.value;
//   cards = document.getElementsByClassName('noteCard');
//   Array.from(cards).forEach(element => {
//     let value = element.getElementsByClassName('card-text')[0].innerText;
//     if (value.includes(search_text)){
//       element.style.display = 'block';
//     }
//     else{
//       element.style.display = 'none';
//     }
//   });
// })

const uName = localStorage.getItem('name');
const heading = document.getElementById('h1');
if(uName==null){
  console.log('null');
  $('.modal').modal('show');
  heading.innerText += ' unknown' + '?';
}
else{
  heading.innerText += ' ' + uName + '?';
}

const mbtn = document.getElementById('mbtn');
mbtn.addEventListener('click', function(){
console.log('mbtn clicked');
const mtext = document.getElementById('mtxt');
if (mtext.value == ''){
  //
}
else{
  localStorage.setItem('name', mtext.value);
  heading.innerText = "What's your plan today " + mtext.value + ' ?' ;
$('.modal').modal('hide');
}
});