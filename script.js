// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    projectId: "TU_PROYECTO_ID",
    storageBucket: "TU_BUCKET.appspot.com",
    messagingSenderId: "TU_MENSAJE_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('chat-container').style.display = 'block';
        })
        .catch(error => {
            console.error("Error al iniciar sesión:", error);
        });
});

document.getElementById('register-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUser WithEmailAndPassword(email, password)
        .then(() => {
            console.log("Usuario registrado con éxito");
        })
        .catch(error => {
            console.error("Error al registrar:", error);
        });
});

document.getElementById('send-button').addEventListener('click', function
