//Menu lateral
var menu_visible = false;
var menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
var links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Enviar correo
    function enviarCorreo() {
      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;

      // Simulación de envío
      alert("Correo enviado a correoinstitucional@edu.ni\n\nDe: " + nombre + "\nMensaje: " + mensaje);
    }

    