
let interests = Array.from(document.querySelectorAll(".interest__check"));


let parent;
let children;
let checkedChildren =[];

function toggleChildren(item) {
    children = Array.from(item.closest(".interest").querySelectorAll('.interests > .interest'));
    children.forEach(item => 
        item.querySelector(".interest__check").checked = !item.querySelector(".interest__check").checked
    )
}

function updateParent(item) {

    parent = item.closest(".interests_active").closest(".interest");

    children = Array.from(parent.closest(".interest").querySelectorAll('.interests > .interest'));
    checkedChildren = children.filter(item => item.querySelector(".interest__check").checked === true)
    if(children.length === checkedChildren.length) {
        parent.querySelector(".interest__check").indeterminate = false;
        parent.querySelector(".interest__check").checked = true;
    } else if(checkedChildren.length === 0) {
        parent.querySelector(".interest__check").indeterminate = false;
        parent.querySelector(".interest__check").checked = false;
    } else {
        parent.querySelector(".interest__check").indeterminate = true;
    }

    if(parent.closest(".interests_active")){
        updateParent(parent);
    }
}

document.addEventListener("click", (e) => {
    if(e.target.closest(".interests_active") === null) {
        toggleChildren(e.target);
    } else {
        toggleChildren(e.target);
        updateParent(e.target);
    }
})



