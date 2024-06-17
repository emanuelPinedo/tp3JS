function calcularEdad() {
    const yearOfBirth = prompt('Ingrese su año de nacimiento:');
    if (yearOfBirth) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - yearOfBirth;
        document.getElementById('ageResult').textContent = `Su edad es ${age}.`;
    }
}