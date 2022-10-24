
let button = document.querySelector('.add');
let text = document.querySelector('.text');
let info = document.querySelector('.info');
let delete1 = document.querySelector('.delete');
delete1.addEventListener("click" , function(){
    localStorage.clear();
    info.innerHTML= "";
})
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
    text.value="";
});

function showNotes() {
    let ans='';
    let index=0 ; 
    notesarray.forEach((e) => {
        index++;
        ans +=
            `<div>${index}. ${e}</div> <br/>`
    })
    info.innerHTML = ans;
}
