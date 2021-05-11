$(document).ready(function() {
    $('body').prepend(`
 <div class="search_b storage-clear" onclick="localStorage.clear()">Сбросить local storage</div>
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

    function login(a, b) {
        $.getJSON('users.json', function(data) {
            //let data = JSON.stringify(obj);
            for (var i = 1; i <= data.length + 1; i++) {
                if (a == data[i - 1]["login"] && b == data[i - 1]["password"]) {
                    localStorage.setItem('project_auth', true);
                    location.reload();
                }
            }
            if (localStorage.getItem('project_auth') != true) {
                alert("Неверный логин или пароль");
            }
        });
    }

    $(document).on('click', '.login_btn', function() {
        login($("#form_login").val(), $("#form_password").val());
    });

    function verification() {
        return (localStorage.getItem('project_auth')) ? true : login_form();
    }
    verification();
});
