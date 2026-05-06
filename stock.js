let stock = 10;

function mostrarStock() {
    console.log("Stock disponible:", stock);
}

function agregarStock(cantidad) {
    stock = stock + cantidad;
    console.log("Nuevo stock:", stock);
}

mostrarStock();
agregarStock(5);