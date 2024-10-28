// Contraseña del administrador
const ADMIN_PASSWORD = "000000";

function showAdminPrompt() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('admin-form').style.display = 'block';
}

function verifyAdmin() {
    const adminPassword = document.getElementById('admin-password').value;
    if (adminPassword === ADMIN_PASSWORD) {
        document.getElementById('admin-form').style.display = 'none';
        document.getElementById('create-account-form').style.display = 'block';
    } else {
        alert("Contraseña de administrador incorrecta.");
    }
}

function createAccount() {
    const newUsername = document.getElementById('new-username').value;
    if (newUsername) {
        localStorage.setItem('username', newUsername);
        alert("Cuenta creada exitosamente. Ahora puedes acceder al chat.");
        window.location.href = "index.html"; // Redirige a la página de chat
    } else {
        alert("Por favor ingresa un nombre de usuario.");
    }
}

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        window.location.href = "index.html"; // Redirige a la página de chat
    } else {
        alert("Por favor ingresa un nombre de usuario.");
    }
}

