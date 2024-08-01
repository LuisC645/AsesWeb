//Select
const selectDeportistas = document.getElementById("documento");
const selectCompetencias = document.getElementById("seleccion");
const selectPruebas = document.getElementById("pruebas");

let documento; let competencia;

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

//buscar
document.getElementById("formulario").addEventListener("submit", (event) => {
    console.log(document.getElementById("documento").value);
    console.log(document.getElementById("seleccion").value);
    event.preventDefault();

    documento = document.getElementById("documento").value;
    competencia = document.getElementById("seleccion").value;

    selectPruebas.innerHTML = 'Seleccione'; // Limpiar las opciones anteriores


    db.collection("deportistas").doc(documento).get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            const nombre = doc.data().nombre;
            const nacimiento = doc.data().nacimiento;
            const edad = doc.data().edad;
            const peso = doc.data().peso;
            const altura = doc.data().altura;
            const imc = doc.data().imc;
            const imc_indice = doc.data().imc_indice;
            const rh = doc.data().rh;
            const patologias = doc.data().patologias;

            db.collection("competencias").doc(competencia).collection(documento).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc1) => {
                    const nombreP = doc1.id;
                    const option1 = document.createElement('option');
                    option1.value = nombreP;
                    option1.text = nombreP;
                    selectPruebas.appendChild(option1);
                })
            })

            document.getElementById("datos_deportista").innerHTML = nombre + "<br>" + "<br>" +
                                                                     "Nacimiento: " + nacimiento + "<br>" + "<br>"+
                                                                     "Edad: " + edad + " Años" + "<br>" + "<br>" +
                                                                     "Peso: " + peso + " Kilos " + "<br>" + "<br>" +
                                                                     "Altura: " + altura + "  Centimetros" + "<br>" + "<br>" +
                                                                     "Rh: " + rh + "<br>" + "<br>" +
                                                                     "IMC: " + imc + "  Detalle: " + imc_indice + "<br>" + "<br>" +
                                                                     "Patologías: " + patologias + "<br>"

            


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            document.getElementById("datos_deportista").innerHTML = "<br>" + "<br>" + "No se encontró el deportista" + "<br>";
        }})
    
})


document.getElementById("formulario_distancia").addEventListener("submit", (event) => {
    console.log(documento);
    console.log(competencia);
    console.log(document.getElementById("pruebas").value)
    event.preventDefault();

    const distancia = document.getElementById("pruebas").value;
    let fecha;

    db.collection("competencias").doc(competencia).get()
        .then(doc => {
            fecha = doc.data().fecha;
        })

    db.collection("competencias").doc(competencia).collection(documento).doc(distancia)
        .get().then(comp => {
        if (comp.exists){
            const tiempo = comp.data().tiempo;
            const observaciones = comp.data().observaciones;

            console.log(tiempo);
            console.log(observaciones);

            document.getElementById("datos_competencia").innerHTML = competencia + "<br>" + 
                                                                    "<br>" + "Fecha : " + fecha + "<br>" +
                                                                    "<br>" + 
                                                                    "<br>" + "Prueba: " + 
                                                                    "<br>" + "<br>" + distancia + "<br>" + "<br>" + 
                                                                    "Tiempo: " + tiempo + "<br>" + "<br>" + "<br>" +   
                                                                    "Observaciones: " + "<br>" + "<br>" +
                                                                    observaciones + "<br>"
 
        } else {
            console.log("No se encontraron datos");
            document.getElementById("datos_competencia").innerHTML = "<br>" + "No se encontraron datos" + "<br>" + "<br>";

        }
    })
});
