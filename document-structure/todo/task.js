let input = document.querySelector(".tasks__input");
let button = document.querySelector(".tasks__add");
let list = document.querySelector(".tasks__list");

let createTask = function(text){
    //debugger;
    let task = document.createElement("div");
    task.className = "task";
    let task__title = document.createElement("div");
    task__title.className = "task__title";
    task__title.textContent = text;
    task.append(task__title);
    let task__remove = document.createElement("a");
    task__remove.className = "task__remove";
    task__remove.href = "#";
    task__remove.innerHTML = "&times";
    task.append(task__remove);
    task__remove.addEventListener("click", () => task.remove());
    return task;
}


button.addEventListener("click", () => {
    if(input.value) {
    list.append(createTask(input.value));
    input.value = "";
    }
})



document.addEventListener("keyup", (e) => {
    //debugger;
    if (input.value && e.key === "Enter") {
        list.append(createTask(input.value));
        input.value = "";
    }
})