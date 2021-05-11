$(document).ready(function() {
   function login_form(){
     $('body').prepend(`
<div style="position: absolute; z-index:999; width:100vw; height: 100vh; top:0; right: 0; bottom: 0; left: 0; background color: #fff;">
<h1 style="margin: 40px auto;padding: 20px 0 20px 0px;">Авторизация</h2>
<center>
<h2 style="margin: 50px 0 0 0;">Вход</h2>
<input placeholder="Логин" type="text" id="form_login" style="display: block;">
<input placeholder="Пароль" type="password" id="form_password" style="display: block;">
<div class="form-button login_btn" style="display: block;">Войти</div>
<div class="form-button clear_btn" style="display: block;">Сбросить local storage</div>
</center>
</div>
`);
      console.log("Форма отрисовалась");
   }
   
     function login(a,b){
        var a=a;
        var b=b;
        
        console.log("Функция login");
        console.log("Логин = " + a);
        console.log("Пароль = " + b);
     if (a=="admin" && b=="12345") {
        console.log("Пароль верный");
        console.log("Перед login сетайтемом значение = " + localStorage.getItem('project_auth'));
       localStorage.setItem('project_auth',true);
        console.log("После login сетайтема значение = " + localStorage.getItem('project_auth'));
        location.reload();
     }
   }
   
  $(document).on('click', '.login_btn', function() {
                login($( "#form_login" ).val(),$( "#form_password" ).val());
              console.log("Кнопка нажата");
            });
   
     $(document).on('click', '.clear_btn', function() {
   storage.clear();
            });
                 
                 
                 
                 
                 
 
  
   function verification(){
      console.log("Сетайтем в веривикации = " + localStorage.getItem('project_auth'));
     return (localStorage.getItem('project_auth'))? true : login_form();
   }
  
  verification();
    

  
 });
