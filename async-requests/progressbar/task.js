let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let xhr = new XMLHttpRequest;
    xhr.upload = document.getElementById("file");

    xhr.upload.onloadstart = () => {
        document.getElementById("progress").value += 0.3;
    }
    xhr.upload.onprogress = () => {
        document.getElementById("progress").value += 0.3;
    }

    xhr.upload.onloadend = () => {
        document.getElementById("progress").value += 0.4;
    }

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(new FormData(form));

    xhr.onload = () => {
        alert(JSON.parse(xhr.response).message);
        document.getElementById("progress").value = 0;
    }

})

