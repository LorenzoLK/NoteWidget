let notes = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let clearPageBtn = document.getElementById("clear-page-btn")
let clearStorageBtn = document.getElementById("clear-storage-btn")
let uploadBtn = document.getElementById("upload-btn")

const render = () => {
    let notesContent = ""
    for (let i = 0; i < notes.length; i++) {
        notesContent += `${notes[i]} `

    }
    inputEl.innerHTML = notesContent  
}

let notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"))
if (notesFromLocalStorage){
    notes = notesFromLocalStorage
    render()
}

saveBtn.addEventListener("click", () => {
    notes.push(inputEl.value)
    localStorage.setItem("notes", JSON.stringify(notes));
    
    console.log(notesFromLocalStorage)
})

clearStorageBtn.addEventListener("dblclick", () => {
    inputEl.value = ""
    localStorage.clear()
})

clearPageBtn.addEventListener("click", () => {
    inputEl.value = ""
})

uploadBtn.addEventListener("click", () => {
    console.log("Uploaded!")
})
