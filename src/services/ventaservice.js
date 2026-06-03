const { productos } = require("../data/database");

class VentaService {

    registrarVenta(codigoProducto, cantidad) {

        const producto = productos.find(
            p => p.codigo === codigoProducto
        );

        if (!producto) {
            console.log("Producto no encontrado");
            return;
        }

        if (producto.stock < cantidad) {
            console.log("Stock insuficiente");
            return;
        }

        producto.stock -= cantidad;

        console.log("Venta registrada");
        console.log("Producto:", producto.nombre);
        console.log("Cantidad:", cantidad);
    }
}

module.exports = VentaService;