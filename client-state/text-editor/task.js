let textArea = document.getElementById("editor");
let text = "";


if(localStorage.length !== 0) {
    textArea.value = localStorage.getItem("text");
    text = textArea.value;
}

textArea.addEventListener("keyup", (e) => {
    text = textArea.value;
    localStorage.setItem("text", text);
})

document.querySelector(".btn").addEventListener("click", () => {
    textArea.value = "";
    localStorage.clear();
})

