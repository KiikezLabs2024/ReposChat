let username = '';
let selectedGroup = '';
const messages = {};

function login() {
    username = prompt("Ingrese su nombre de usuario:");
    updateGroupList();
}

function updateGroupList() {
    const groupList = document.getElementById('group-list');
    groupList.innerHTML = '';
    for (let group in messages) {
        const listItem = document.createElement('li');
        listItem.textContent = group;
        listItem.onclick = () => selectGroup(group);
        groupList.appendChild(listItem);
    }
}

function createGroup() {
    const groupName = prompt("Nombre del nuevo grupo:");
    if (groupName) {
        messages[groupName] = [];
        updateGroupList();
    }
}

function selectGroup(groupName) {
    selectedGroup = groupName;
    document.getElementById('selected-group-name').textContent = groupName;
    displayMessages();
}

function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    if (selectedGroup && messages[selectedGroup]) {
        messages[selectedGroup].forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', msg.user === username ? 'sent' : 'received');
            messageDiv.innerHTML = `<strong>${msg.user}</strong>: ${msg.text}`;
            messagesDiv.appendChild(messageDiv);
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

login();

