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
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            $('.otvet2').empty();
            
            $('.otvet2').append('ID пользователя<h3>'+response.id+'</h3>');
           
        }

        return false;//Нужно что бы страницы не перегружалась
    });
    //НЕ Готово
    $(".show_user").submit(function(){
       
        console.log(".show_user");
        
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
        console.log(data);
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            // console.log(response);
            $('.otvet2').empty();
            $('.otvet2').append("Логин пользователя <h3><p>"+response.login+"</p>");
            console.log(xhr.responseText);
           





        }
        return false;
    });
    //Готово (В базу записывает ответ возващет)
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
            console.log(xhr.responseText);
            var response =JSON.parse(xhr.responseText);
            console.log(response);
            $('.otvet3').empty();
            
            

        $('.otvet3').append("Новый логин пользователя сохранен<h3>"+response.id+"</h3><p>"+response.newlogin+"</p>");


        }

    return false;
    });
});