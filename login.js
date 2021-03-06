$(document).ready(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyDd9ghTgWpuBsji_M96fQX6_TjOGFOUdLo",
        authDomain: "project-test-c096d.firebaseapp.com",
        projectId: "project-test-c096d",
        databaseURL: "https://project-test-c096d-default-rtdb.europe-west1.firebasedatabase.app/",
        storageBucket: "project-test-c096d.appspot.com",
        messagingSenderId: "329123215105",
        appId: "1:329123215105:web:33b66c422a431968bb4d00"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var firebaseRefData = firebase.database().ref("data");

    $('body').prepend(`
 <div class="search_b storage-clear" onclick="firebase.default.auth().signOut().then(() => {}).catch((error) => {});">Выйти</div>
   `);

    function login_form() {
        $('body').prepend(`
<div class="login-div">
<center>
<h2 style="margin: 50px 0 0 0;">Вход</h2>
<input placeholder="Логин" type="text" id="form_login" class="form-input search_i">
<input placeholder="Пароль" type="password" id="form_password" class="form-input search_i">
<div class="search_b login_btn">Войти</div>
</center>
</div>
`);
    }

    function login(email, password) {
        firebase.default.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                location.reload();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                switch (errorCode) {
                    case "auth/wrong-password":
                        alert('Неверный логин или пароль');
                        break;
                    case "auth/invalid-email":
                        alert('Неверный формат email');
                        break;
                    default:
                        alert("Что-то пошло не так");
                }
            });
    }

    $(document).on('click', '.login_btn', function() {
        login($("#form_login").val(), $("#form_password").val());
    });

    function verification() {
        firebase.default.auth().onAuthStateChanged(function(user) {
            if (user) {
                return true;
            } else {
                login_form();
                return true;
            }
        });
    }
    verification();
});
