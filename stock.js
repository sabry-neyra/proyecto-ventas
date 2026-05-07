let productos = [
    { nombre: "Teclado", stock: 10 },
    { nombre: "Mouse", stock: 5 },
    { nombre: "Monitor", stock: 3 }
];

function mostrarStock() {
    console.log("=== STOCK DISPONIBLE ===");

    for (let i = 0; i < productos.length; i++) {
        console.log(
            productos[i].nombre + " - Cantidad: " + productos[i].stock
        );
    }
}

function agregarStock(nombreProducto, cantidad) {

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].nombre === nombreProducto) {

            productos[i].stock += cantidad;

            console.log("Stock actualizado");
        }
    }
}

mostrarStock();

agregarStock("Mouse", 2);

mostrarStock();