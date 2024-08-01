
document.getElementById("formulario").addEventListener("submit", (event) => {
    console.log(document.getElementById("documento").value);
    console.log(document.getElementById("nombre").value);
    console.log(document.getElementById("nacimiento").value);
    console.log(document.getElementById("peso").value);
    console.log(document.getElementById("altura").value);
    console.log(document.getElementById("rh").value);
    console.log(document.getElementById("patologias").value);
    event.preventDefault();

    const documento = document.getElementById("documento").value;
    const nombre = document.getElementById("nombre").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const rh = document.getElementById("rh").value;
    const patologias = document.getElementById("patologias").value;

    //imc
    const peso_float = parseFloat(peso)
    const altura_metros = altura/100
    const imc_normal = peso_float / (altura_metros * altura_metros);
    const imc = imc_normal.toFixed(1);
    let imc_indice;

    if(imc < 18.5){
        imc_indice = "Bajo";
    }else if(imc >= 18.5 && imc < 24.9){
        imc_indice = "Normal";
    }else if(imc >= 24.9 && imc < 29.9){
        imc_indice = "Sobrepeso";
    }else if(imc >= 29.9){
        imc_indice = "Obesidad"
    }

    console.log(imc_indice)

    //edad
    var fechaNacimientoObj = new Date(nacimiento);
    var diferenciaMilisegundos = Date.now() - fechaNacimientoObj.getTime();
    var edad = new Date(diferenciaMilisegundos).getUTCFullYear() - 1970;

    db.collection("deportistas_atl").doc(documento).set({
        documento: documento,
        nombre: nombre,
        nacimiento: nacimiento,
        edad: edad,
        peso: peso,
        altura: altura,
        rh: rh,
        imc: imc,
        imc_indice: imc_indice,
        patologias: patologias,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((documento) => {
        console.log("Documento guardado con ID:", documento);
        alert('Deportista guardado correctamente')
        window.location = 'index_atletismo.html';
    })
    .catch((error) => {
        console.error("Error al guardar el documento:", error);
        alert('Error, vuelve e intentar')
        window.location = 'index_atletismo.html';
    });
});