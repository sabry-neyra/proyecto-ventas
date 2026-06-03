const { productos } = require("../data/database");

class CompraService {

    registrarCompra(codigoProducto, cantidad) {

        const producto = productos.find(
            p => p.codigo === codigoProducto
        );

        if (!producto) {
            console.log("Producto no encontrado");
            return;
        }

        producto.stock += cantidad;

        console.log("Compra registrada");
        console.log("Nuevo stock:", producto.stock);
    }
}

module.exports = CompraService;