//Funciones para segundos 
function convertir_a_segundos(min, seg){
    return min * 60 + seg;
}

function convertir_segundos(seconds) {
    // Calcula los minutos, segundos y centésimas
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const centiseconds = Math.round((seconds - Math.floor(seconds)) * 100);
  
    // Formatea los segundos y centésimas para que tengan dos dígitos
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    const formattedCentiseconds = centiseconds.toString().padStart(2, '0');
  
    return `${minutes}:${formattedSeconds}:${formattedCentiseconds}`;
}
  
document.addEventListener("DOMContentLoaded", function() {
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", function() {
    rendimiento();
});
  
function rendimiento() {
    var edad = parseInt(document.querySelector(".input_edad").value);
    var sexo = document.getElementById("selectorGenero").value;
    var estilo = document.getElementById("selectorEstilo").value;
    var distancia = document.getElementById("selectorDistancia").value;
    
    var min100 = parseInt(document.querySelector(".input_m100").value);
    var seg100 = parseInt(document.querySelector(".input_s100").value);

    localStorage.setItem("edad", edad);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("estilo", estilo);
    localStorage.setItem("sexo", distancia);

    localStorage.setItem("min100", min100)
    localStorage.setItem("seg100", seg100)
  
    //alert(sexo+edad+estilo+distancia+""+min100+':'+seg100);

    contenido_mostrado.innerHTML = '';

    if (sexo == 'hombre'){
        FCmax = 220 - edad
    } else {
        FCmax = 226 - edad
    }

    var timeS = convertir_a_segundos(min100, seg100);

    const p1 = '<p>55%: '+convertir_segundos(timeS*1.45)+'  -  FC: '+Math.round((FCmax*0.55))+'</p>';
    const p2 = '<p>60%: '+convertir_segundos(timeS*1.4)+'  -  FC: '+Math.round((FCmax*0.60))+'</p>'
    const p3 = '<p>65%: '+convertir_segundos(timeS*1.35)+'  -  FC: '+Math.round((FCmax*0.65))+'</p>'
    const p4 = '<p>70%: '+convertir_segundos(timeS*1.3)+'  -  FC: '+Math.round((FCmax*0.70))+'</p>'
    const p5 = '<p>75%: '+convertir_segundos(timeS*1.25)+'  -  FC: '+Math.round((FCmax*0.75))+'</p>'
    const p6 = '<p>80%: '+convertir_segundos(timeS*1.2)+'  -  FC: '+Math.round((FCmax*0.80))+'</p>'
    const p7 = '<p>85%: '+convertir_segundos(timeS*1.15)+'  -  FC: '+Math.round((FCmax*0.85))+'</p>'
    const p8 = '<p>90%: '+convertir_segundos(timeS*1.1)+'  -  FC: '+Math.round((FCmax*0.90))+'</p>'
    const p9 = '<p>95%: '+convertir_segundos(timeS*1.05)+'  -  FC: '+Math.round((FCmax*0.95))+'</p>'
    const p0 = '<p>100%: '+convertir_segundos(timeS*1)+'  -  FC: '+Math.round((FCmax*1))+'</p>'

    contenido_mostrado.innerHTML = `<p>${p1}</p> <p>${p2}</p> <p>${p3}</p> <p>${p4}</p> <p>${p5}</p> <p>${p6}</p> <p>${p7}</p> <p>${p8}</p> <p>${p9}</p> <p>${p0}</p>`;
}});

document.addEventListener("DOMContentLoaded", function() {
    var btnGuardar_Obj = document.getElementById("btnGuardar_Obj");
    btnGuardar_Obj.addEventListener("click", function() {
    guardarObj();
});
  
function guardarObj() {
    var minObj = parseInt(document.querySelector(".input_mObj").value);
    var segObj = parseInt(document.querySelector(".input_sObj").value);
    var estilo = document.getElementById("selectorEstilo").value;
    var distancia = document.getElementById("selectorDistancia").value;

    localStorage.setItem("minObj", minObj)
    localStorage.setItem("segObj", segObj)
    localStorage.setItem("estilo", estilo)
    localStorage.setItem("distancia", distancia)

    //alert(minObj+':'+segObj+estilo+distancia);

    if (estilo == 'libre'){
        contenido_titulo.innerHTML = '<h3>Estilo Libre</h3>';
    } else if (estilo == 'espalda'){
        contenido_titulo.innerHTML = '<h3>Estilo Espalda</h3>';
    } else if (estilo == 'pecho'){
        contenido_titulo.innerHTML = '<h3>Estilo Pecho</h3>';
    } else if (estilo == 'mariposa'){
        contenido_titulo.innerHTML = '<h3>Estilo Mariposa</h3>';
    } else if (estilo == 'patada'){
        contenido_titulo.innerHTML = '<h3>Estilo Patada</h3>';
    }

    if (distancia == '50'){
        contenido_distancia.innerHTML = '<h3>50 Metros</h3>';
    } else if (distancia == '100'){
        contenido_distancia.innerHTML = '<h3>100 Metros</h3>';
    } else if (distancia == '200'){
        contenido_distancia.innerHTML = '<h3>200 Metros</h3>';
    } else if (distancia == '400'){
        contenido_distancia.innerHTML = '<h3>400 Metros</h3>';
    } else if (distancia == '800'){
        contenido_distancia.innerHTML = '<h3>800 Metros</h3>';
    } else if (distancia == '1500'){
        contenido_distancia.innerHTML = '<h3>1500 Metros</h3>';
    } 


    var timeS = convertir_a_segundos(minObj, segObj);

    if (distancia == '50'){
        contenido_parciales.innerHTML =`<p>1. 25 Mts: ${convertir_segundos(timeS*0.47)}</p>
                                        <p>2. 25 Mts: ${convertir_segundos(timeS*0.53)}</p>
                                        <p>-----Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '100'){
        contenido_parciales.innerHTML =`<p>1. 50 Mts: ${convertir_segundos(timeS*0.47)}</p>
                                        <p>2. 50 Mts: ${convertir_segundos(timeS*0.53)}</p>
                                        <p>-----Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '200'){
        contenido_parciales.innerHTML =`<p>1. 50 Mts: ${convertir_segundos(timeS*0.2335)}</p>
                                        <p>2. 50 Mts: ${convertir_segundos(timeS*0.2543)}</p>
                                        <p>3. 50 Mts: ${convertir_segundos(timeS*0.2542)}</p>
                                        <p>4. 50 Mts: ${convertir_segundos(timeS*0.256)}</p>
                                        <p>-----Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '400'){
        contenido_parciales.innerHTML =`<p>1. 100 Mts: ${convertir_segundos(timeS*0.24)}</p>
                                        <p>2. 100 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>3. 100 Mts: ${convertir_segundos(timeS*0.26)}</p>
                                        <p>4. 100 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '800'){
        contenido_parciales.innerHTML =`<p>1. 100 Mts: ${convertir_segundos(timeS*0.12)}</p>
                                        <p>2. 100 Mts: ${convertir_segundos(timeS*0.12)}</p>
                                        <p>3. 100 Mts: ${convertir_segundos(timeS*0.12)}</p>
                                        <p>4. 100 Mts: ${convertir_segundos(timeS*0.13)}</p>
                                        <p>5. 100 Mts: ${convertir_segundos(timeS*0.13)}</p>
                                        <p>6. 100 Mts: ${convertir_segundos(timeS*0.13)}</p>
                                        <p>7. 100 Mts: ${convertir_segundos(timeS*0.13)}</p>
                                        <p>8. 100 Mts: ${convertir_segundos(timeS*0.12)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '1500'){
        contenido_parciales.innerHTML =`<p>1. 300 Mts: ${convertir_segundos(timeS*0.18)}</p>
                                        <p>2. 300 Mts: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>3. 300 Mts: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>4. 300 Mts: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>5. 300 Mts: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } 
}});
