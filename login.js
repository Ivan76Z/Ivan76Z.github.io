$(document).ready(function() {
    $('body').prepend(`
 <div class="search_b storage-clear" onclick="firebase.auth().signOut().then(() => {}).catch((error) => {});">Выйти</div>
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
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    location.reload();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
    }

    $(document).on('click', '.login_btn', function() {
        login($("#form_login").val(), $("#form_password").val());
    });

    function verification() {
        firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    return true;
  } else {
    login_form();
  }
});
    }
    verification();
});
