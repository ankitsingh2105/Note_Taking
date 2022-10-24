
let button = document.querySelector('.add');
let text = document.querySelector('.text');
let info = document.querySelector('.info');

let notesarray = [];
let notes = localStorage.getItem("notes");
if (notes != null) {
    notesarray = JSON.parse(notes);
}
showNotes();
button.addEventListener("click", () => {
    console.log("we entered");
    let text1 = text.value;
    if (text1.length > 1) {
        notesarray.push(text.value);
        localStorage.setItem("notes", JSON.stringify(notesarray));
        console.log(notesarray);
        showNotes();
    }
});

function showNotes() {
    let ans='';
    notesarray.forEach((e) => {
        if(e!==undefined){
        ans +=
            `<div>${e}</div> <br/>`
        }
    })
    info.innerHTML = ans;
}
