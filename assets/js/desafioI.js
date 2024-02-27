let datos = async function cargarDatos() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        let datos = await respuesta.json();
    } catch (e) {
        console.log(e)
    }
}
datos();

//crear una funcion que reciba el elemento html


//insertarle de manera dinamica los datos

