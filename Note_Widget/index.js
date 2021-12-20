const {google} = require ('googleapis');

let notes = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let clearBtn = document.getElementById("clear-btn")
let uploadBtn = document.getElementById("upload-btn")


let notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"))
if (notesFromLocalStorage){
    notes = notesFromLocalStorage
}

saveBtn.addEventListener("click", () => {
    notes.push(inputEl.value)
    localStorage.setItem("notes", JSON.stringify(notes));
    
    console.log(notesFromLocalStorage)
})

clearBtn.addEventListener("dblclick", () => {
    inputEl.value = ""
})

uploadBtn.addEventListener("click", () => {
    console.log("Uploaded!")
})

