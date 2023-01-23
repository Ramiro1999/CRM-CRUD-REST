import { eliminarCliente, traerClientes } from "./API.js";
(function(){

    const listadoClientes = document.querySelector("#listado-clientes");
    document.addEventListener("DOMContentLoaded", listarClientes)
    listadoClientes.addEventListener('click',confirmarEliminar);
    listadoClientes.addEventListener('click',editarRegistros);

   async function listarClientes(){
        const clientes = await traerClientes();
        clientes.forEach(c => {
           const {nombre,email,telefono,empresa,id} = c;
           const row = document.createElement('tr')
           row.innerHTML += `
           <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
               <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
               <p class="text-sm leading-10 text-gray-700"> ${email} </p>
           </td>
           <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
               <p class="text-gray-700">${telefono}</p>
           </td>
           <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
               <p class="text-gray-600">${empresa}</p>
           </td>
           <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a data-cliente="${id}" href="#"class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar
               <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
           </td>
       `;

       listadoClientes.appendChild(row)
    
    });
    }
    
    function confirmarEliminar(e){
        e.preventDefault();
        if(e.target.classList.contains("eliminar")){
        
           const idEliminar = parseInt(e.target.dataset.cliente)//tomo el id del dataset del form
           const confirmar = confirm("deseas eliminar este cliente?")
           if(confirmar){
                eliminarCliente(idEliminar);
           }
        }
    }

    function editarRegistros(e) {
        e.preventDefault()
        if (e.target.classList.contains('editar')) {
          const id = Number(e.target.dataset.cliente)
          location.href = `editar-cliente.html?id=${id}`
        }
    
      }
    
})();