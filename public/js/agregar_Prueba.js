const selectDeportistas = document.getElementById("documento");
const selectCompetencias = document.getElementById("competencia");

db.collection("deportistas").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const nombre = doc.data().nombre;
        const option = document.createElement('option');
        option.value = doc.data().documento;
        option.textContent = nombre;
        selectDeportistas.appendChild(option);
    })
})

db.collection("competencias").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const nombreC = doc.id;
        const option = document.createElement('option');
        option.value = nombreC;
        option.text = nombreC;
        selectCompetencias.appendChild(option);
    })
})



document.getElementById("formulario").addEventListener("submit", (event) => {
    console.log(document.getElementById("competencia").value);
    console.log(document.getElementById("documento").value);
    console.log(document.getElementById("prueba").value);
    console.log(document.getElementById("tiempo").value);
    console.log(document.getElementById("observaciones").value);
    event.preventDefault();

    const competencia = document.getElementById("competencia").value;
    const documento = document.getElementById("documento").value;
    const prueba = document.getElementById("prueba").value;
    const tiempo = document.getElementById("tiempo").value;
    const observaciones = document.getElementById("observaciones").value;

    db.collection("competencias").doc(competencia).collection(documento).doc(prueba).set({
        tiempo: tiempo,
        observaciones: observaciones,
    })
    .then((tiempo) => {
        console.log("Competencia guardada con ID:", tiempo);
        alert("Prueba agregada correctamente");
        window.location = 'deportistas.html';  
    })
    .catch((error) => {
        console.error("Error al guardar el documento:", error);
    }); 
});
















console.log("");