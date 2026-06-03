class Producto {

    constructor(
        id,
        codigo,
        nombre,
        descripcion,
        precioVenta,
        stock,
        activo = true
    ) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioVenta = precioVenta;
        this.stock = stock;
        this.activo = activo;
    }

    crear() {
        console.log("Producto creado");
    }

    actualizar() {
        console.log("Producto actualizado");
    }

    desactivar() {
        this.activo = false;
    }
}

module.exports = Producto;