const Producto = require("../models/Producto");

const productos = [
    new Producto(
        1,
        "P001",
        "Mouse Inalámbrico",
        "Mouse Logitech",
        5000,
        10
    ),
    new Producto(
        2,
        "P002",
        "Teclado Inalámbrico",
        "Teclado Redragon",
        12000,
        5
    )
];

module.exports = {
    productos
};