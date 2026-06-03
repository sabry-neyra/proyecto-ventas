class Usuario {

    constructor(id, nombre, email, password, rol, activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.activo = activo;
    }

    login(email, password) {
        return this.email === email && this.password === password;
    }

    logout() {
        console.log("Sesión cerrada");
    }

    cambiarPassword(nuevaPassword) {
        this.password = nuevaPassword;
    }
}

module.exports = Usuario;