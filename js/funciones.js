export function mostrarMensaje(mensaje,tipo){
    
    const form = document.querySelector("#formulario")
    const alerta = document.querySelector(".alerta")

        if(!alerta){
            const mensajeDiv = document.createElement("div")
            mensajeDiv.classList.add("px-4","py-3","rounded","max-w-lg","mx-auto","mt-6","text-center","alerta")

            if(tipo === 'error'){
                mensajeDiv.classList.add("bg-red-100","border-red-400","text-red-700")
            }else{
                mensajeDiv.classList.add("bg-green-100","border-green-400","text-green-700")
            }

            mensajeDiv.textContent = mensaje
            form.appendChild(mensajeDiv)

             setTimeout(() => {
                 mensajeDiv.remove();
             }, 3000);

        }
}


export function validar(cliente){
    //permite validar de una forma mas sencilla si algun input esta vacio
    if(!Object.values(cliente).every(input => input !== '')){
        mostrarMensaje("Todos los campos son obligatorios","error")
        return;
    }else if(isNaN(cliente.telefono)){
        mostrarMensaje("Por favor, ingrese un telefono valido","error")
        return;
    }
    return cliente;
}


