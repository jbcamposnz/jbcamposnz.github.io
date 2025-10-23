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
     function mostrarFormulario() {
      document.getElementById("formularioBoletin").style.display = "block";
      document.getElementById("btnSuscribirse").style.display = "none";
    }

    function ocultarFormulario() {
      document.getElementById("formularioBoletin").reset();
      document.getElementById("formularioBoletin").style.display = "none";
      document.getElementById("btnSuscribirse").style.display = "inline-block";
    }

    function enviarFormulario(event) {
      event.preventDefault(); // Evita el envío real
      alert("¡Gracias por suscribirte al boletín!");
      ocultarFormulario();
    }






    