const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== SISTEMA DE VENTAS ===");
  console.log("1- Registrar venta");
  console.log("2- Ver stock");
  console.log("3- Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    
    switch(opcion) {
      case "1":
        registrarVenta();
        break;

      case "2":
        verStock();
        break;

      case "3":
        console.log("Saliendo...");
        rl.close();
        break;

      default:
        console.log("Opción inválida");
        mostrarMenu();
    }
  });
}

function registrarVenta() {
  console.log("Venta registrada");
  mostrarMenu();
}

function verStock() {
  console.log("Mostrando stock");
  mostrarMenu();
}

mostrarMenu();