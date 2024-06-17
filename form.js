document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const messageList = document.getElementById('messages');
        const newMessage = document.createElement('li');
        newMessage.classList.add('message');

        const usernameSpan = document.createElement('span');
        usernameSpan.classList.add('username');
        usernameSpan.textContent = `${username}: `;

        const messageSpan = document.createElement('span');
        messageSpan.classList.add('text');
        messageSpan.textContent = message;

        newMessage.appendChild(usernameSpan);
        newMessage.appendChild(messageSpan);
        messageList.appendChild(newMessage);

        document.getElementById('message').value = '';
        document.getElementById('message').focus();
    }
});