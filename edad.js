function calcularEdad() {
    var anioNac = prompt('Ingrese su año de nacimiento:');
    if (anioNac) {
        var anioAct = new Date().getFullYear();
        var edad = anioAct - anioNac;
        document.getElementById('edadRes').textContent = `Su edad es ${edad}.`;
    }
}