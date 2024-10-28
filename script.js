document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazar hacia abajo
    }
});