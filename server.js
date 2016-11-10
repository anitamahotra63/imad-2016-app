var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool; //for connecting to the database
var crypto = require('crypto');
var bodyParser = require('body-parser');

var config= {
    
    user :'anitamahotra63',
    database :'anitamahotra63',
    host :'db.imad.hasura-app.io',
    port :'5432',
    password: process.env.DB_PASSWORD
    
};

var app=express();
app.use(morgan('combined'));
app.use(bodyParser.json());

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`<html>
    <head>
    	<title>
    		${title}
    	</title>
    	<link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    	<div id="upper">
    		
    	</div>
    	<div id="heading">
    		<b>${heading}</b>
    	</div>
    	${content}
    </body>
    </html>`;
    return htmlTemplate;
}

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});

function hash(input,salt){
     var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
     return ['pbkdf2S','10000',salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res){
   var hashedString = hash(req.params.input,'this_is _a_normal_string');
   res.send(hashedString);
});

var pool=new Pool(config);
app.get('/testdb',function(req,res){
   //Mkae a select queuery 
   //return the result in response
   
   pool.query("SELECT * FROM test", function(err, results){
       if(err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result.rows));
       }
   });
   
});

 var names=[];
app.get('/submit-name',function(req,res){
    
    var name=req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/articles/:ArticleName',function(req,res){
    
    pool.query("SELECT * FROM articles WHERE title = $1"+ [req.params.ArticleName] , function(err,result){
        if(err){
            res.status(500).send(err.toSring());
        }
        else{
            if(result.rows.length === 0)
            {
                res.status(404).send("Article Not Found");
            }
            else
            {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
   
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
