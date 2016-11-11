var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool; //for connecting to the database
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require("express-session");

var config= {
    
    user :'anitamahotra63',
    database :'anitamahotra63',
    host :'db.imad.hasura-app.io',
    port :'5432',
    password: process.env.DB_PASSWORD
    
};
var pool=new Pool(config);

var app=express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret :'someRandomValue',
    cookie :{ maxAge: 1000*60*60*24*30 }
}));

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

app.post('/create-user',function(req,res){
   
   var name = req.body.name;
   var username = req.body.username;
   var password = req.body.password;
   var idea = req.body.idea;
   var age = req.body.age;
   
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password,salt); 
   
   pool.query('INSERT INTO "user" (name,username,password,idea,age) VALUES ($1,$2,$3,$4,$5)', [name,username,dbString,idea,age],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           res.send('User successfully created'+username);
       }
   });
});

app.post('/login',function(req,res){
   
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           if(result.rows.length === 0){
               res.send(403).send("username/password is invalid")
           }else{
                var dbString=result.rows[0].password;
                var salt = dbString.split('$')[2];
                var hashedPassword = hash(password,salt);
                if(hashedPassword === dbString){
                    
                    //set the session
                    req.session.auth = {userid : result.rows[0].id};
                    
                    res.send("credentials are correct!!");
                }
                else{
                    res.send(403).send("username/password is invalid")
                }
                
           }
       }
   });
});

app.get('/check-login',function(req,res){
   
   if(req.session && req.session.auth && req.session.auth.userId) {
       res.send("You are logged in as "+ req.session.auth.userId.toString());
   }else{
       res.send("You are not logged in");
   }
});

app.get('/logout',function(req,res){
    delete req.session.auth;
    res.send("Logged Out");
});

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
