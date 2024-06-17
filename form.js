document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();//linea 1 y 2 fundamentales en js para manejar formularios

    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    if (username && message) {
        var messageList = document.getElementById('messages');
        var newMessage = document.createElement('li');
        newMessage.classList.add('message');

        // Obtener fecha y hora actuales
        var now = new Date();
        var dateString = now.toLocaleString();

        var timestampSpan = document.createElement('span');
        timestampSpan.classList.add('timestamp');
        timestampSpan.textContent = `${dateString} por `;

        var usernameSpan = document.createElement('span');
        usernameSpan.classList.add('username');
        usernameSpan.textContent = `${username}: `;

        var messageSpan = document.createElement('span');
        messageSpan.classList.add('text');
        messageSpan.textContent = message;

        newMessage.appendChild(timestampSpan);
        newMessage.appendChild(usernameSpan);
        newMessage.appendChild(document.createElement('br'));
        newMessage.appendChild(messageSpan);
        messageList.appendChild(newMessage);

        document.getElementById('message').value = '';
        document.getElementById('message').focus();
    }
});