//Submit Name
var nameInput=document.getElementById('name');
var nameValue=nameInput.value;
var submit=document.getElementById('sbmt_btn');
submit.onclick=function(){
   
    var names=["anita","sunita","anuj"];
    var list='';
    for(var i=0;i<names.length;i++){
        list +='<li>'+names[i]+'</li>';
    }
    
    var ul=document.getElementById('list');
    ul.innerHTML=list;
    
};