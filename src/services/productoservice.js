const { productos } = require("../data/database");

class ProductoService {

    mostrarStock() {

        console.log("\n=== STOCK ===");

        productos.forEach(producto => {

            console.log(
                producto.codigo +
                " - " +
                producto.nombre +
                " - Stock: " +
                producto.stock
            );
        });
    }
}

module.exports = ProductoService;