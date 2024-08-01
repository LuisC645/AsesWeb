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

    var min100 = parseInt(document.querySelector(".input_m100").value);
    var seg100 = parseInt(document.querySelector(".input_s100").value);

    localStorage.setItem("edad", edad);
    localStorage.setItem("sexo", sexo);

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
    var distancia = document.getElementById("selectorDistancia").value;

    localStorage.setItem("minObj", minObj)
    localStorage.setItem("segObj", segObj)
    localStorage.setItem("distancia", distancia)

    //alert(minObj+':'+segObj+estilo+distancia);
    
    if (distancia == '100'){
        contenido_distancia.innerHTML = '<h3>100 Metros</h3>';
    } else if (distancia == '200'){
        contenido_distancia.innerHTML = '<h3>200 Metros</h3>';
    } else if (distancia == '400'){
        contenido_distancia.innerHTML = '<h3>400 Metros</h3>';
    } else if (distancia == '800'){
        contenido_distancia.innerHTML = '<h3>800 Metros</h3>';
    } else if (distancia == '1000'){
        contenido_distancia.innerHTML = '<h3>1 Kilometros</h3>'; 
    } else if (distancia == '1500'){
        contenido_distancia.innerHTML = '<h3>1.5 Kilometros</h3>';
    } else if (distancia == '2000'){
        contenido_distancia.innerHTML = '<h3>2 Kilometros</h3>';
    } else if (distancia == '5000'){
        contenido_distancia.innerHTML = '<h3>5 Kilometros</h3>';
    } else if (distancia == '10000'){
        contenido_distancia.innerHTML = '<h3>10 Kilometros</h3>';
    } else if (distancia == '21000'){
        contenido_distancia.innerHTML = '<h3>21 Kilometros</h3>';
    } 


    var timeS = convertir_a_segundos(minObj, segObj);

    if (distancia == '100'){
        contenido_parciales.innerHTML =`<p>1. 50 Mts: ${convertir_segundos(timeS*0.47)}</p>
                                        <p>2. 50 Mts: ${convertir_segundos(timeS*0.53)}</p>
                                        <p>-----Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '200'){
        contenido_parciales.innerHTML =`<p>1. 100 Mts: ${convertir_segundos(timeS*0.47)}</p>
                                        <p>2. 100 Mts: ${convertir_segundos(timeS*0.53)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '400'){
        contenido_parciales.innerHTML =`<p>1. 100 Mts: ${convertir_segundos(timeS*0.24)}</p>
                                        <p>2. 100 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>3. 100 Mts: ${convertir_segundos(timeS*0.26)}</p>
                                        <p>4. 100 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '800'){
        contenido_parciales.innerHTML =`<p>1. 200 Mts: ${convertir_segundos(timeS*0.24)}</p>
                                        <p>2. 200 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>3. 200 Mts: ${convertir_segundos(timeS*0.26)}</p>
                                        <p>4. 200 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '1000'){
        contenido_parciales.innerHTML =`<p>1. 200 Mts: ${convertir_segundos(timeS*0.18)}</p>
                                        <p>2. 200 Mts: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>3. 200 Mts: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>4. 200 Mts: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>5. 200 Mts: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '1500'){
        contenido_parciales.innerHTML =`<p>1. 500 Mts: ${convertir_segundos(timeS*0.32)}</p>
                                        <p>2. 500 Mts: ${convertir_segundos(timeS*0.35)}</p>
                                        <p>3. 500 Mts: ${convertir_segundos(timeS*0.33)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`; 
    } else if (distancia == '2000'){
        contenido_parciales.innerHTML =`<p>1. 500 Mts: ${convertir_segundos(timeS*0.24)}</p>
                                        <p>2. 500 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>3. 500 Mts: ${convertir_segundos(timeS*0.26)}</p>
                                        <p>4. 500 Mts: ${convertir_segundos(timeS*0.25)}</p>
                                        <p>------Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '5000'){
        contenido_parciales.innerHTML =`<p>1. 1Km: ${convertir_segundos(timeS*0.18)}</p>
                                        <p>2. 1Km: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>3. 1Km: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>4. 1Km: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>5. 1Km: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>--Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '10000'){
        contenido_parciales.innerHTML =`<p>1. 2Km: ${convertir_segundos(timeS*0.18)}</p>
                                        <p>2. 2Km: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>3. 2Km: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>4. 2Km: ${convertir_segundos(timeS*0.21)}</p>
                                        <p>5. 2Km: ${convertir_segundos(timeS*0.20)}</p>
                                        <p>--Total: ${convertir_segundos(timeS)}`;
    } else if (distancia == '21000'){
        contenido_parciales.innerHTML =`<p>1. 3Km: ${convertir_segundos(timeS*0.13)}</p>
                                        <p>2. 3Km: ${convertir_segundos(timeS*0.14)}</p>
                                        <p>3. 3Km: ${convertir_segundos(timeS*0.14)}</p>
                                        <p>4. 3Km: ${convertir_segundos(timeS*0.16)}</p>
                                        <p>5. 3Km: ${convertir_segundos(timeS*0.15)}</p>
                                        <p>6. 3Km: ${convertir_segundos(timeS*0.14)}</p>
                                        <p>7. 3Km: ${convertir_segundos(timeS*0.14)}</p>
                                        <p>--Total: ${convertir_segundos(timeS)}`;
    } 
}});
