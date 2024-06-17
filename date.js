function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('currentDateTime').textContent = `Fecha y Hora Actual: ${dateTimeString}`;

    // Fecha del parcial de JavaScript (aquí se debe poner la fecha correcta del parcial)
    const examDate = new Date('2024-07-01T00:00:00');
    const timeDifference = examDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el parcial de JavaScript.`;
}

setInterval(updateDateTime, 1000);