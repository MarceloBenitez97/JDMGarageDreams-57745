const listaAutos = [
    { marca: "Honda", modelo: "Civic", versión: "SI", año: 2008, color: "Gris", precio: 11000 },
    { marca: "Nissan", modelo: "Skyline", versión: "GT-R R34", año: 2002, color: "Azul", precio: 200000 },
    { marca: "Nissan", modelo: "350Z", versión: "Z33", año: 2003, color: "Naranja", precio: 50000 },
    { marca: "Toyota", modelo: "Supra", versión: "MK4", año: 1997, color: "Rojo", precio: 150000 },
    { marca: "Subaru", modelo: "Impresa", versión: "22B STI", año: 1998, color: "Azul", precio: 500000 },
    { marca: "Honda", modelo: "Civic", versión: "Type R", año: 1997, color: "Gris", precio: 15000 },
    { marca: "Nissan", modelo: "Skyline", versión: "GT-R Hakosuka", año: 1970, color: "Gris", precio: 240000 },
    { marca: "Subaru", modelo: "WRX", versión: "STI", año: 2014, color: "Plata", precio: 40000 },
    { marca: "Mitsubishi", modelo: "Lancer", versión: "Evo IX", año: 2006, color: "Rojo", precio: 32000 },
    { marca: "Toyota", modelo: "Supra", versión: "MK4", año: 1997, color: "Plata", precio: 300000 },
    { marca: "Toyota", modelo: "MR2", versión: "MK2", año: 1990, color: "Rojo", precio: 20000 },
    { marca: "Mazda", modelo: "RX-7", versión: "Spirit-R", año: 2002, color: "Negro", precio: 100000 },
    { marca: "Lexus", modelo: "LC 500", versión: "Luxury", año: 2016, color: "Coral", precio: 140000 },
];

// Función para calcular el precio total de los autos en la lista
function calcularPrecioTotal(autos) {
    let total = 0;
    autos.forEach(function(auto) {
        total += auto.precio;
    });
    return total;
}


// Función para filtrar la lista de autos por marca
function filtrarPorMarca(marca) {
    return listaAutos.filter(function(auto) {
        return auto.marca.toLowerCase() === marca.toLowerCase();
    });
}

// Función para buscar un auto por modelo
function buscarPorModelo(modelo) {
    return listaAutos.find(function(auto) {
        return auto.modelo.toLowerCase() === modelo.toLowerCase();
    });
}


// Función principal para ejecutar el programa
function main() {
    // Mostrar la lista de autos completa
    console.log("Lista de Autos:");
    listaAutos.forEach(function(auto) {
        console.log(auto.marca + " " + auto.modelo + " (" + auto.versión + ") - Año: " + auto.año + ", Color: " + auto.color + ", Precio: $" + auto.precio.toLocaleString());
        alert(auto.marca + " " + auto.modelo + " (" + auto.versión + ") - Año: " + auto.año + ", Color: " + auto.color + ", Precio: $" + auto.precio.toLocaleString());
    });


    // Calcular y mostrar el precio total de los autos en la lista
    const precioTotal = calcularPrecioTotal(listaAutos);
    console.log("Precio total de los autos: $" + precioTotal.toLocaleString());
    alert("Precio total de los autos: $" + precioTotal.toLocaleString());

    // Filtrar la lista de autos por marca
    const marcaBuscada = prompt("Ingrese la marca que desea buscar:");
    const autosFiltrados = filtrarPorMarca(marcaBuscada);
    if (autosFiltrados.length > 0) {
        console.log("Autos de la marca " + marcaBuscada + ":");
        alert("Autos de la marca " + marcaBuscada + ":");
        autosFiltrados.forEach(function(auto) {
            console.log(auto.marca + " " + auto.modelo + " (" + auto.versión + ") - Año: " + auto.año + ", Color: " + auto.color + ", Precio: $" + auto.precio.toLocaleString());
            alert(auto.marca + " " + auto.modelo + " (" + auto.versión + ") - Año: " + auto.año + ", Color: " + auto.color + ", Precio: $" + auto.precio.toLocaleString());
        });
    } else {
        console.log("No se encontraron autos de la marca " + marcaBuscada);
        alert("No se encontraron autos de la marca " + marcaBuscada);
    }

    // Buscar un auto por modelo
    const modeloBuscado = prompt("Ingrese el modelo que desea buscar:");
    const autoEncontrado = buscarPorModelo(modeloBuscado);
    if (autoEncontrado) {
        console.log("Se encontró el siguiente auto:");
        alert("Se encontró el siguiente auto:");
        console.log(autoEncontrado.marca + " " + autoEncontrado.modelo + " (" + autoEncontrado.versión + ") - Año: " + autoEncontrado.año + ", Color: " + autoEncontrado.color + ", Precio: $" + autoEncontrado.precio.toLocaleString());
        alert(autoEncontrado.marca + " " + autoEncontrado.modelo + " (" + autoEncontrado.versión + ") - Año: " + autoEncontrado.año + ", Color: " + autoEncontrado.color + ", Precio: $" + autoEncontrado.precio.toLocaleString());
    } else {
        console.log("No se encontró ningún auto con el modelo " + modeloBuscado);
        alert("No se encontró ningún auto con el modelo " + modeloBuscado);
    }

}


// Ejecutar la función principal
main();