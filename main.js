$(document).ready(function(){
   
    //Готово
    $(".adduser").submit(function(){
        
        console.log(".adduser");
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api2/add_user.php', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = {

            login: this.children.login.value, 
            // name: name
        };
        console.log(data);
        data = JSON.stringify(data);
        xhr.send(data);
        console.log(xhr);
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            console.log(xhr.responseText);
        }
        

        return false; //Нужно что бы страницы не перегружалась
    });
    //Готово
    $(".all_user").submit(function(){
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'api2/all_user.php', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            var response = JSON.parse(xhr.responseText);
            $('.otvet').empty();
            response.users.forEach(function(user) {
                $('.otvet').append('<h3>'+user.id+'</h3><p>'+user.login+'</p>');
            });

        }

        return false;//Нужно что бы страницы не перегружалась
    });
    //НЕ Готово
    $(".show_user").submit(function(){
       
        console.log(".adduser");
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api2/show_user.php', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = {

            showbyid: this.children.showbyid.value, 
            // name: name
        };
        console.log(data);
        data = JSON.stringify(data);
        xhr.send(data);
        console.log(xhr);
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }
            var response = JSON.parse(xhr.responseText);
            $('.otvet2').empty();
            response.users.forEach(function(user) {
                $('.otvet2').append('<h3>'+user.id+'</h3><p>'+user.login+'</p>');
            console.log(xhr.responseText);
            });





        }
        return false;
    });
    //НЕ Готово (В базу записывает но ответ не возващет)
    $(".update_user").submit(function(){
    
        console.log(".update_user");
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api2/update_user.php', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = {

            findbylogin: this.children.findbylogin.value, 
            newlogin: this.children.newlogin.value,
        };
        console.log(data);
        data = JSON.stringify(data);
        xhr.send(data);
        console.log(xhr);
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }
            var response = JSON.parse(xhr.responseText);
            $('.otvet3').empty();
            response.users.forEach(function(user) {
                $('.otvet3').append('Новый логин записан<h3>'+user.id+'</h3><p>'+user.login+'</p>');
            console.log(xhr.responseText);
            });





        }
    


    return false;
    });
});