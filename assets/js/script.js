 //=================================================================================
//Crear una aplicación de consola que permita al usuario añadir múltiples tareas  ==
//a una lista y luego las muestre de forma ordenada y numerada.
 //=================================================================================

function manejarListaDeTareas() {
    // Inicialización: Declara un array vacío
    let listaDeTareas = [];
    let agregarOtra = true; // Variable de control para el bucle while
    
    // Mostramos un mensaje inicial para guiar al usuario
    console.log("--- ¡Bienvenido al Gestor de Tareas! ---");
    console.log("Sigue las instrucciones en las ventanas emergentes (prompts).");

    // Añadir Tareas de forma interactiva (Bucle while)
    while (agregarOtra) {
        // Usa prompt() para solicitar la tarea
        let nuevaTarea = prompt("Ingresa una nueva tarea (o presiona Cancelar para terminar):");

        // Si el usuario presiona Cancelar o no ingresa texto (null o string vacío)
        if (nuevaTarea === null || nuevaTarea.trim() === "") {
            agregarOtra = false; // Detenemos el bucle
            
        } else {
            // Añade la tarea ingresada al final del array utilizando el método push()
            listaDeTareas.push(nuevaTarea.trim()); // Usamos trim() para eliminar espacios innecesarios
            
            // Preguntamos al usuario si desea agregar otra, actualizando la variable de control
            agregarOtra = confirm("Tarea añadida: '" + nuevaTarea.trim() + "'.\n¿Deseas agregar OTRA tarea?");
        }
    }

    // Mostrar la Lista Final
    
    // Verificamos si hay tareas para mostrar
    if (listaDeTareas.length === 0) {
        console.log("No se ingresaron tareas. ¡Lista vacía!");
        return; // Salimos de la función
    }

    // Encabezado según el ejemplo de salida
    console.log("\n--- Lista de Tareas Pendientes ---");
    
    

    // Usando bucle for 
    for (let i = 0; i < listaDeTareas.length; i++) {
        // Usa la concatenación de strings para formatear la salida
        console.log((i + 1) + ". " + listaDeTareas[i]);
    }
    
    console.log("---------------------------------------");
}

// Ejecutar la función principal al cargar el script

manejarListaDeTareas();
