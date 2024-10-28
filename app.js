let username = '';
let selectedGroup = '';
const messages = {};

function login() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('chat-section').style.display = 'block';
        updateGroupList();
    }
}

function updateGroupList() {
    const groupSelect = document.getElementById('group-select');
    groupSelect.innerHTML = `<option value="">Selecciona un grupo</option>`;
    for (let group in messages) {
        groupSelect.innerHTML += `<option value="${group}">${group}</option>`;
    }
}

function createGroup() {
    const groupName = prompt("Nombre del nuevo grupo:");
    if (groupName) {
        messages[groupName] = [];
        updateGroupList();
        alert(`Grupo "${groupName}" creado.`);
    }
}

function selectGroup() {
    selectedGroup = document.getElementById('group-select').value;
    displayMessages();
}

function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    if (selectedGroup && messages[selectedGroup]) {
        messages[selectedGroup].forEach(msg => {
            messagesDiv.innerHTML += `<div><strong>${msg.user}</strong>: ${msg.text}</div>`;
        });
    }
}

function sendMessage() {
    const messageText = document.getElementById('message-input').value;
    if (messageText && selectedGroup) {
        messages[selectedGroup].push({ user: username, text: messageText });
        displayMessages();
        document.getElementById('message-input').value = '';
    }
}

