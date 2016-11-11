//Submit username and password to login

var submit = document.getElementById('submit_credentials');
submit.onclick = function(){
   
   //Create a request Object
   var request=new XMLHttpRequest();
   
   //Capture the response and store it in a variable.
   request.onreadystatechange = function(){
       
       if(request.readyState ===XMLHttpRequest.DONE){
           //Take some action
           
           if(request.status ===200){
               console.log("logged in successfully");
               alert('Logged In Successfully');
           }else if(request.status === 403){
               alert('username/password is invalid');
           }else if(request.status === 500){
               alert('sorry! something went wrong with the server.');
           }
       }
       //not done yet
   };
   var username = document.getElementById('username_registered').value;
   var password = document.getElementById('password_registered').value;
   
   
   request.open('POST','http://anitamahotra63.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({username: username, password: password}));
    
    
};

var submit_button_two = document.getElementById('submit_button2');
submit_button_two.onclick = function(){
    
        var request = new XMLHttpRequest();
         request.onreadystatechange = function(){
       
        if(request.readyState === XMLHttpRequest.DONE){
           //Take some action
           
           if(request.status ===200){
               console.log("logged in successfully");
               alert('Logged In Successfully');
           }else if(request.status === 403){
               alert('username/password is invalid');
           }else if(request.status === 500){
               alert('sorry! something went wrong with the server.');
           }
       }
       //not done yet
   };
        
        var name = document.getElementById('name');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var idea = document.getElementById('idea');
        var age = document.getElementById('age');
        
        request.open('POST','http://anitamahotra63.imad.hasura-app.io/create-user',true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({name,username,password,idea,age}));
} ;


