var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articlesContent={
    //javacript data structure
'article-one':{
  title:'Article One',
  heading:'Article 1 |Anita MC',
  content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `},
    
    'article-two':{
        title:'Article Two',
        heading:'Article 2 | Anita MC',
        content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `
    },
    'article-three':{
        title:'Article Three',
        heading:'Article 3 | Anita MC',
        content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `
    }
    
  
};

var articleFour={
   title:'Article 4',
   heading1:'About me',
   heading2:'About my sister',
   content1:'<p>I am anita mc. I live in Indore.I want to be a software engineer.Thats all for today.</p>',
   content2:' <p>She is a very fun person to be with. really like and love her,she is my role mode. thats all.</p>'
};

function Createtemplate(data){
   var title=data.title;
   var heading1=data.heading1;
   var heading2=data.heading2;
   var content1=data.content1;
   var content2=data.content2;
  
  var HTMLTemplate=`<html>
    <head>
        <title>${title}</title>
        <link href='/ui/style.css' rel="stylesheet"/>
    </head>
    <body>
        <div>
            <h3>${heading1}</h3>
            <hr>
            ${content1}
        </div>
        <div>
            <h4>${heading2}</h4>
            <hr>
            ${content2}
        </div>
    </body>
</html>`;
return HTMLTemplate;
};

function createTemplate(data){
  title=data.title;
  heading=data.heading;
  content=data.content;

var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <div>
            <h1>${heading}</h1>
        </div>
        <hr>
        <div>
            ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

var articlefive={
  title1:'anita',
  title2:'sunita',
  title3:'anuj',
  title4:'mummy',
  title5:'papa',
  title6:'raju',
  title7:'bajju'
};

function template(data){
    var title1=data.title1;
    var title2=data.title2;
    var title3=data.title3;
    var title4=data.title4;
    var title5=data.title5;
    var title6=data.title6;
    var title7=data.title7;
    
    var html_template=`
        <html>
<head>
	<title>
		Layout 10
	</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}

		#container{
			background-color: yellow;
			height: 648px;
			width:700px;
			border: 3px grey solid;
			margin: 2px;
		}
		#header{
			width:650px;
			height: 130px;
			border:4px grey solid;
			margin: 70px 21px 10px;
			background-color: white;
		}
		#wrapper{
			height:300px;
			width:650px;
			border:4px grey solid;
			background-color: white;
			margin: 0 21px 10px;
		}
		#footer{
			height: 70px;
			width:650px;
			border: 4px grey solid;
			background-color: white;
			margin:0 21px 20px;
		}
		#content{
			width:340px;
			height:240px;
			border:4px grey solid;
			background-color: white;
			margin:50px 15px 2px 5px;
			display: inline-block;
		}
		#sidebar{
			height:240px;
			border:4px grey solid;
			background-color: white;
			margin:50px 7px 2px 0;
			width:267px;
			display: inline-block;
			float: right;
			
		}
		#subcontent1{
			height:60px;
			border:1px grey solid;
			width:328px;
			margin:68px 5px 8px;
			background-color: white;
		}
		#subcontent2{
			height:60px;
			border:1px grey solid;
			width:328px;
			margin:0 5px 40px;
			background-color: white;
		}
		#nav{
			border:4px grey solid;
			height:40px;
			background-color: white;
			width:622px;
			margin:60px 10px 22px;
		}
	</style>
</head>
<body>
	<div id="container">
	
		<div id="header">${title6}
			<div id="nav">
				${title1};
			</div>
		</div>
		<div id="wrapper">${title7}
			<div id="content" >
				<div id="subcontent1">
					${title2}
				</div>
				<div id="subcontent2">
					${title3}
				</div>
			</div>
			<div id="sidebar">
			${title4}	
			</div>
		</div>
		<div id="footer">
			${title5}
		</div>
	</div>

</body>
</html>`;
return html_template;
    
}

app.get('/article-four',function(req,res){
    res.send(Createtemplate(articleFour));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){
   
   var name=req.query.name;
   names.push(name);
   
   //JSON COMES INTO PLAY:JAVASCRIPT OBJECT NOTATION. which converst the java objects to strings 
   res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-five',function(req,res){
   res.send(template(articlefive)); 
});

app.get('/:articleName',function(req,res){
    
    var articleName=req.params.articleName;
    res.send(createTemplate(articlesContent[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
