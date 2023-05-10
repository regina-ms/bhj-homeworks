let getQuastion = new XMLHttpRequest();
getQuastion.open('GET', "https://students.netoservices.ru/nestjs-backend/poll");
getQuastion.send();

getQuastion.onload = function() {
    if (getQuastion.status == 200) {
        let response = JSON.parse(getQuastion.response);
        let quastion = response.data.title;
        let answers = response.data.answers;
        document.querySelector(".poll__title").innerHTML = quastion;
        
        answers.forEach((item, index) => {
            let button = document.createElement("button");
            button.classList.add("poll__answer");
            button.innerHTML = item;
            document.querySelector(".poll__answers").append(button);
            
            button.onclick = () => {
                alert("Спасибо, Ваш голос засчитан!")
                let getREsults = new XMLHttpRequest();
                getREsults.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                getREsults.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                getREsults.send(`vote=${response.id}&answer=${index}`);
                
                getREsults.onload = () => {
                    if (getQuastion.status == 200) {
                        let newResponse = JSON.parse(getREsults.response);
                        let options = newResponse.stat;
                        let results = document.createElement("div")
                        options.forEach(item => {
                            let option = document.createElement("div");
                            option.innerHTML = item.answer + ": " + item.votes;
                            results.append(option);
                        })
                        document.querySelector(".poll__answers").replaceWith(results);
                    }
                }
            }
        })
    }
}

  

