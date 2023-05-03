
let interests = Array.from(document.querySelectorAll(".interest__check"));


let parent;
let children;
let checkedChildren =[];

function isChecked(item) {
    if(item.checked === true) {
        item.checked = false;
        return; 
    }

    if(item.checked === false) {
        item.checked = true;
        return; 
    }
}



function func(item) {
    if(item.closest(".interests_active") === null) {
        children = Array.from(item.closest(".interest").querySelectorAll('.interests > .interest'));
        for(let item of children) {
            isChecked(item.querySelector(".interest__check"));
        }
    }

    if(item.closest(".interests_active")){
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
            func(parent.querySelector(".interest__check"));
        }

        if(item.closest(".interest").querySelectorAll('.interests > .interest').length!==0){
            Array.from(item.closest(".interest").querySelectorAll('.interests > .interest')).
            forEach(item => isChecked(item.querySelector(".interest__check")))       
        }
    }
}

document.addEventListener("click", (e) => func(e.target))

