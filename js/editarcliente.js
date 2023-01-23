import { editarCliente, obtenerCliente,traerClientes } from "./API.js";
import { mostrarMensaje,validar } from "./funciones.js";

(function(){

   //campos
   const nombreInput = document.querySelector("#nombre")
   const emailInput = document.querySelector("#email")
   const telefonoInput = document.querySelector("#telefono")
   const empresaInput = document.querySelector("#empresa")
   const idInput = document.querySelector("#id")
   
   const form = document.querySelector("#formulario")


   document.addEventListener('DOMContentLoaded', async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'))
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente);
   }) 

   form.addEventListener("submit",actualizarCliente);

   function mostrarCliente(cliente){
      const {nombre,email,telefono,empresa,id} = cliente;
      nombreInput.value = nombre;
      emailInput.value = email;
      telefonoInput.value = telefono;
      empresaInput.value = empresa;
      idInput.value = id;
   }

   function actualizarCliente(e){
      e.preventDefault();
      const cliente = validarCliente();
      if(cliente){
         mostrarMensaje("El cliente ha sido editado exitosamente!","correcto")
         setTimeout(() => {
             editarCliente(cliente);
         }, 3000);
         
     }
   }

   function validarCliente(){
      
      const cliente = {
         nombre: nombreInput.value,
         email: emailInput.value,
         telefono:telefonoInput.value,
         empresa: empresaInput.value,
         id: parseInt(idInput.value)
      }

      const clienteValidado = validar(cliente)
      return clienteValidado
     
   }

})();