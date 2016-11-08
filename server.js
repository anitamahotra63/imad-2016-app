var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app=express();
app.use(morgan('combined'));

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});

var about_us={
    title: 'About Us',
    content: `We Indians love to eat as well as feed others.

	For this very reason, every time we have a function or a party we ensure that there's plenty of food around.<br>
	After all the eating, drinking and merriment, we often end up with lot of leftover food. While some of it can<br> 
	be packed off to friends and relatives, most of it goes to waste. Often, after a big party at home is over, we wonder<br> 
	what to do with the food.

	We people, take the Excess food from individuals, weddings, restuarants,, corporate offices etc and give it to<br> 
	people who really need .We ensure it reaches the underprivilleged.

	It operates in <ul>
	<li>Bengaluru</li> 
	<li>Bhuveshwar</li>
	<li>Chandigarh</li> 
	<li>Chennai</li> 
	<li>Faridabad</li> 
	<li>Goa</li> 
	<li>Noida</li> 
	<li>Gurgaon</li>
	<li>Hyderabad</li> 
	<li>Indore</li> 
	<li>Jaipur</li>
	<li>Kolkatta</li> 
	<li>Mumbai</li>
	<li>Nagpur</li>
	<li>Pune </li>
	<li>Solan</li>
	</ul>`
    
}
function createTemplate(data){
    var title=data.title;
    var content=data.content;
    var html_template=`<html>
    <head>
    	<title>
    		About Us
    	</title>
    	<style>
    	*{
    			padding:0;
    			margin: 0;
    		}
    		
    	#content{
    		font-family: Gabriola;
    		font-size: x-large;
    		margin: 10px 50px;
    	}	
    	</style>
    </head>
    <body>
    	<div id="upper" style="height:100px;background-color:#0b4c62">
    		
    	</div>
    	<div id="lower" style="height:50px;background-color:lightblue">
    		<span style="margin:5px 50px; font-size:xx-large; font-family:Gabriola"><strong>${title}</strong></span>
    	</div>
    	
    	
    	<div id="content">${content}
    	</div>
    </body>
    </html>`;
    return html_template;
}    
app.get('/AboutUs',function(req,res){
   res.send(createTemplate(about_us)); 
});

app.get('/Registeration',function(req,res){
   res.sendFile(path.join(__dirname,'ui','Registeration.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
