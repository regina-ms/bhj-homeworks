let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#progress").value = 0;

    let formatData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = () => {
        console.log(xhr.readyState);
        document.querySelector("#progress").value += 0.3;
    }

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formatData);

    xhr.onload = () =>{
        document.querySelector("#progress").value = 1;
        console.log(xhr.readyState);
        if(xhr.status !== 200) {
            console.log(JSON.parse(xhr.response).message);
        }
    }

})

