function ingresa(){
    var user, pass

    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;

    if((user == 'carlosm' && pass == 'ases4639') || (user == 'admin' && pass == '951218')){
        
        window.location = 'natacion.html';

    }else{
        alert('Contraseña o usario incorrecto');
        window.location = 'index.html';
    }
}