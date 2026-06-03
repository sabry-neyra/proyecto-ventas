const readline = require("readline");

const VentaService = require("./src/services/VentaService");
const CompraService = require("./src/services/CompraService");
const ProductoService = require("./src/services/ProductoService");

const ventaService = new VentaService();
const compraService = new CompraService();
const productoService = new ProductoService();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {

    console.log("\n=== SISTEMA DE GESTIÓN DE VENTAS ===");
    console.log("1 - Registrar venta");
    console.log("2 - Registrar compra");
    console.log("3 - Ver stock");
    console.log("4 - Salir");

    rl.question("Seleccione una opción: ", (opcion) => {

        switch (opcion) {

            case "1":
                ventaService.registrarVenta("P001", 2);
                mostrarMenu();
                break;

            case "2":
                compraService.registrarCompra("P001", 5);
                mostrarMenu();
                break;

            case "3":
                productoService.mostrarStock();
                mostrarMenu();
                break;

            case "4":
                console.log("Saliendo...");
                rl.close();
                break;

            default:
                console.log("Opción inválida");
                mostrarMenu();
        }
    });
}

mostrarMenu();