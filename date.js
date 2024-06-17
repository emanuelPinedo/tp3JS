function actualizarTiempo() {
    var fechaAhora = new Date();
    var dateTimeString = fechaAhora.toLocaleString();
    document.getElementById('actualizarTiempo').textContent = `Fecha y Hora Actual: ${dateTimeString}`;

    // Fecha del parcial de JavaScript
    var examenDate = new Date('2024-06-18T17:00:00');
    var tiempoDiferencia = examenDate - fechaAhora;

    var dias = Math.floor(tiempoDiferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tiempoDiferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tiempoDiferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tiempoDiferencia % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para el parcial de JavaScript.`;
}

//llama a la funcion actualizarTiempo cada 1 segundo (1000 milisegundos).
setInterval(actualizarTiempo, 1000);