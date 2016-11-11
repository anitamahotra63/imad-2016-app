//Submit username and password to login

var submit=document.getElementById('submit_button');
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
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   console.log(username);
   console.log(password);
   
   request.open('POST','http://anitamahotra63.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({username: username, password: password}));
    
    
};