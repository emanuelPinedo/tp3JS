document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value;
    
    // Convertir a mayúsculas
    document.getElementById('uppercase').textContent = 'Mayúscula: ' + message.toUpperCase();
    
    // Convertir a minúsculas
    document.getElementById('lowercase').textContent = 'Minúscula: ' + message.toLowerCase();
    
    // Sub-mensaje de la posición 5 y de largo 10
    var substring = message.substring(5, 10);
    document.getElementById('substring').textContent = 'Sub-mensaje: ' + substring;
    
    // Verificar si el mensaje contiene la palabra "hola"
    if (message.includes('hola')) {
        document.getElementById('containsHola').textContent = 'hola que tal';
    } else {
        document.getElementById('containsHola').textContent = '';
    }
    
    // Eliminar espacios en blanco y la palabra "hola"
    var noSpacesNoHola = message.replace(/\s+/g, '').replace(/hola/g, '');
    document.getElementById('noSpacesNoHola').textContent = 'Sin espacios y sin "hola": ' + noSpacesNoHola;
    
    // Traducir palabras específicas al inglés
    var translationDictionary = {
        'mi': 'my',
        'hola': 'hello',
        'nombre': 'name'
    };
    let translatedMessage = message;
    for (var [spanish, english] of Object.entries(translationDictionary)) {
        var regex = new RegExp(spanish, 'gi');
        translatedMessage = translatedMessage.replace(regex, english);
    }
    document.getElementById('translated').textContent = 'Traducido: ' + translatedMessage;
});