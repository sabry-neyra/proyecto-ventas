const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let productos = [
  { nombre: "Mouse inalambrico", stock: 10, precio: 5000 },
  { nombre: "Teclado inalambrico", stock: 5, precio: 12000 },
  { nombre: "Monitor en branch", stock: 3, precio: 80000 }
];

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
  console.log("\n=== STOCK ===");

  productos.forEach((producto) => {
    console.log(
      producto.nombre +
      " | Stock: " + producto.stock +
      " | Precio: $" + producto.precio
    );
  });

  mostrarMenu();
}

mostrarMenu();