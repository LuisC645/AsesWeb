document.getElementById("formulario").addEventListener("submit", (event) => {
    console.log(document.getElementById("nombre_competencia").value);
    console.log(document.getElementById("fecha").value);
    event.preventDefault();

    const competencia = document.getElementById("nombre_competencia").value;
    const fecha = document.getElementById("fecha").value;

    db.collection("competencias").doc(competencia).set({
        fecha: fecha
    })
    .then((fecha) => {
        console.log("Fecha guardada: ", fecha); 
        alert('Competencia guardada correctamente')
        window.location = 'deportistas.html';  
    })
    .catch((error) => {
        console.error("Error al guardar el documento:", error);

    });
});