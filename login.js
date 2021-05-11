$(document).ready(function() {
   $('body').prepend(`
 <div class="search_b" style="position: absolute; z-index:999; width: fit-content; top:0; left: 0;" onclick="localStorage.clear()">Сбросить local storage</div>
   `);
   function login_form(){
     $('body').prepend(`
<div style="position: absolute; z-index:999; width:100vw; height: 100vh; top:0; right: 0; bottom: 0; left: 0; background-color: #fff;">
<center>
<h2 style="margin: 50px 0 0 0;">Вход</h2>
<input placeholder="Логин" type="text" id="form_login" style="display: block; margin: 25px 0 0 0;">
<input placeholder="Пароль" type="password" id="form_password" style="display: block; margin: 25px 0 0 0;">
<div class="search_b login_btn" style="display: block; margin: 25px 0 0 0; width: fit-content;">Войти</div>
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
   
                 
                 
                 
                 
                 
 
  
   function verification(){
      console.log("Сетайтем в веривикации = " + localStorage.getItem('project_auth'));
     return (localStorage.getItem('project_auth'))? true : login_form();
   }
  
  verification();
    

  
 });
