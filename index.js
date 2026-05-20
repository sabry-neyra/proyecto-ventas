const readline = require("readline");

const { registrarCompra } = require("./src/compras");
const { registrarVenta } = require("./src/ventas");
const { verStock } = require("./src/stock");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== SISTEMA DE VENTAS ===");
  console.log("1- Registrar venta");
  console.log("2- Registrar compra");
  console.log("3- Ver stock");
  console.log("4- Salir");

  rl.question("Seleccione una opción: ", (opcion) => {

    switch(opcion) {
      case "1":
        registrarCompra("mouse",5);
        break;
      case "2":
        registrarVenta(mostrarMenu);
        break;

      case "3":
        verStock(mostrarMenu);
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