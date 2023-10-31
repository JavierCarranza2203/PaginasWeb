// Contenedor para mostrar el emoji recuperado de la petición
let contenedor = document.getElementById("respuesta");

// Button para la petición usando ajax
document.getElementById("btnPeticionAjax").addEventListener("click", ()=>{
    const data = null;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {

            let response = JSON.parse(this.response);

            contenedor.innerHTML = response["htmlCode"][0];
        }
    });

    xhr.open("GET", "https://emojihub.yurace.pro/api/random");

    xhr.send(data);
});

// Button para la petición usando fetch
document.getElementById("btnPeticionFetch").addEventListener("click", ()=>{
    fetch("https://emojihub.yurace.pro/api/random")
        .then(response => response.json())
            .then(datosJson => contenedor.innerHTML = datosJson["htmlCode"][0]);
});

//Button para la petición usando async y await
document.getElementById("btnPeticionAsync").addEventListener("click", async () => {
    let objRespuesta = await fetch("https://emojihub.yurace.pro/api/random");
    let datosJson = await objRespuesta.json();
    contenedor.innerHTML = datosJson["htmlCode"][0];
});

// Button para la petición usando jquery
document.getElementById("btnPeticionJQuery").addEventListener("click", ()=>{
    $.getJSON("https://emojihub.yurace.pro/api/random", function (datosJson) {
        contenedor.innerHTML = datosJson["htmlCode"][0];
    });
});

// Button para la petición usando axios
document.getElementById("btnPeticionAxios").addEventListener("click", async () => {
    axios({
        method: 'get',
        url: "https://emojihub.yurace.pro/api/random",
        responseType: 'json'
    })
        .then(function (datosJson) {
            contenedor.innerHTML = datosJson.data["htmlCode"][0];
        });
});

