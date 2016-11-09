//Submit Name

var submit=document.getElementById('sbmt_btn');
submit.onclick=function(req,res){
    var request = new XMLHttprequest();
    
    request.onreadystatechange=function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('list');
                ul.innerHTML=list;
            }
        }
        
        //not done yet.
    };
    var nameInput=document.getElementById('name');
    var nameValue=nameInput.value;
    request.open('GET','http://anitamahotra63.imad.hasura-app.io/submit-name?name='+nameValue,true);
    request.send(null);
};