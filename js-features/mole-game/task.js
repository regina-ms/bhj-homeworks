let killedHole = document.getElementById("dead");
let lostedHole = document.getElementById("lost");

let isWin = () => {
    if (killedHole.textContent === "10") {
        killedHole.textContent = 0;
        lostedHole.textContent = 0;
        alert("You win!");
    }
}

let isLost = () => {
    if (lostedHole.textContent === "5" ) {
        lostedHole.textContent = 0;
        killedHole.textContent = 0;
        alert("You lose");
    }
}

let getHole = (index) => {
    return document.getElementById(`hole${index}`)
}

for(let i = 1; i <=9; i++) {
    getHole(i).onclick = () => {
        
        if (getHole(i).classList.contains("hole_has-mole")) {
            killedHole.textContent++;
            isWin();
            
                
        } else {
            lostedHole.textContent++;
            isLost();
           
        }
    }
}










    

    

