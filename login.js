$(document).ready(function() {
   function login_form(){
     $('body').append(`
<div style="position: absolute; z-index:999; width:100vw; height: 100vh;">
<h1 style="margin: 40px auto;padding: 20px 0 20px 0px;">Авторизация</h2>
<center>
<h2 style="margin: 50px 0 0 0;">Вход</h2>
<input placeholder="Логин" type="text" id="form_login">
<input placeholder="Пароль" type="password" id="form_password">
<div class="form-button" id="login_btn">Войти</div>
</center>
</div>
`);
   }
  
  $(document).on('click', '#login_btn', login($( "#form_login" ).val(),$( "form_password" ).val()));
  
   function login(a,b){
     if (a=="admin" && b=="12345") {
       localStorage.setItem('project_auth',true);
     }
   }
  
   function verification(){
     return (localStorage.getItem('project_auth'))? true : login_form();
   }
  
  verification();
    

  
 });
