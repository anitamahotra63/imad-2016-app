//Submit Name

var submit=document.getElementById('sbmt_btn');
submit.onclick = function(){
   
   //Create a request Object
   var request=new XMLHttpRequest();
   
   //Capture the response and store it in a variable.
   request.onreadystatechange = function(){
       
       if(request.readyState ===XMLHttpRequest.DONE){
           //Take some action
           
           if(request.status ===200){
               //Capture a list of names and render it as a list
               var names=request.responseText;
               names=JSON.parse(names);
               var list='';
                for (var i=0;i<names.length;i++)
                     {
                        list +='<li>'+names[i]+'</li>';
                     }
                 var ul=document.getElementById('list');
                ul.innerHTML=list;
               
           }
       }
       //not done yet
   };
   var nameInput=document.getElementById('name');
    var nameValue=nameInput.value;
   request.open('GET','http://anitamahotra63.imad.hasura-app.io/submit-name'+nameValue,true);
   
   request.send(null);
    
    
};