let button = document.querySelector('.add');
let text = document.querySelector('.text');
let info = document.querySelector('.info');
let delete1 = document.querySelector('.delete');
let notesarray = [];
let notes = localStorage.getItem("notes");
if (notes != null) {
    notesarray = JSON.parse(notes);
}
showNotes();
delete1.addEventListener("click", function () {
    console.log("deleted");
    localStorage.removeItem("notes");
    notesarray = [];
    info.innerHTML = "";
})
button.addEventListener("click", () => {
    console.log("we entered");
    let text1 = text.value;
    if (text1.length > 1) {
        notesarray.push(text.value);
        localStorage.setItem("notes", JSON.stringify(notesarray));
        console.log(notesarray);
        showNotes();
        localStorage.setItem("index" , 1);
    }
    text.value = "";
});
function remove(e) {
    console.log("deletedd");
    notesarray.splice(e - 1, 1);
    localStorage.removeItem("notes");
    localStorage.setItem("notes", JSON.stringify(notesarray));
    showNotes();
}
function showNotes(){
    let ans = '';
    let infoq=text.value;
    console.log(infoq);
    if(notesarray.length==0){
        ans = "No note added till now!";
    } 
    else {
    let index = 0;
    notesarray.forEach((e) => {
        index++;
        ans += `
        <div class="align ank">
        <div>${index}. ${e}</div> <br/>
        <button class="Delete" onClick="remove(${index})" >Delete</button>
        </div>`
    })
}
    info.innerHTML = ans;
}
