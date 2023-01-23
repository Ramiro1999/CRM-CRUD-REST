import { mostrarMensaje,validar } from "./funciones.js";
import { nuevoCliente, traerClientes} from "./API.js";

(function(){

    const form = document.querySelector("#formulario")
    form.addEventListener("submit",agregarCliente);

    function agregarCliente(e){
        e.preventDefault();
        const cliente = validarCliente();
        if(cliente){
            mostrarMensaje("El cliente ha sido agregado exitosamente!","correcto")
            setTimeout(() => {
                nuevoCliente(cliente);
            }, 3000);
            
        }
    }

    function validarCliente(){
        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono = document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value

        const cliente = {nombre,email,telefono,empresa,id:Date.now()}
        const clienteValidado = validar(cliente);
        return clienteValidado;
    }

})();