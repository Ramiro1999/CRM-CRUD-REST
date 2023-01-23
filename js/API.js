const url = 'http://localhost:4000/clientes'

//Agrega un cliente
export const nuevoCliente = async (cliente) => {

    try {
     await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'
       

    } catch (error) {
        console.log(error)
    }
}


//Obtiene todos los clientes
export const traerClientes = async () => {
    try{
        const resultado = await fetch(url)
        const data = await resultado.json()
        return data;

    }catch(error){
        console.log(error)
    }

}

//eliminar cliente
export const eliminarCliente = async (id) => {

    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })

    } catch (error) {
        console.log(error)
    }

}

export const obtenerCliente = async (id) => {
    try{
        const resultado = await fetch(`${url}/${id}`)
        const data = await resultado.json()
        return data;

    }catch(error){
        console.log(error)
    }
}

//edita al cliente
export const editarCliente = async (cliente) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
               method: 'PUT',
               body: JSON.stringify(cliente),
               headers: {
                   'Content-Type': 'application/json'
               }
           })
           window.location.href = 'index.html'
   
       } catch (error) {
           console.log(error)
       }
}