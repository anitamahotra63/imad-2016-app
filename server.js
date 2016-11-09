var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app=express();
app.use(morgan('combined'));

var ArticleOne={
    title:'Introduction',
    heading:'What is Feminism?',
    content:`	<div id="content">
		<p>
			Feminism is an interdisciplinary approach to issues of equality and equity based on gender,<br> 
			gender expression, gender identity, sex, and sexuality as understood through social theories<br> 
			and political activism. Historically, feminism has evolved from the critical examination of<br> 
			inequality between the sexes to a more nuanced focus on the social and performative constructions<br> 
			of gender and sexuality. 
		</p>

		<p>
			Feminist theory now aims to interrogate inequalities and inequities along the intersectional lines<br> 
			of ability, class, gender, race, sex, and sexuality, and feminists seek to effect change in areas where<br> 
			these intersectionalities create power inequity. Intellectual and academic discussion of these inequities<br> 
			allows our students to go into the world aware of injustices and to work toward changing unhealthy<br> 
			dynamics in any scenario.
		</p>
		<p>
			Feminist political activists campaign in areas such as reproductive rights, domestic violence, fairness<br>, 
			social justice, and workplace issues such as family medical leave, equal pay, and sexual harassment<br> 
			and discrimination. 
		</p>
		<p>
			Anytime stereotyping, objectification, infringements of human rights, or intersectional oppression occurs,<br> 
			it's a <strong>Feminist</strong> issue. 
		</p>
	</div>
	<div id="picture" style="display:inline-block;">
		<img src="http://www.booksellers.co.nz/sites/default/files/u561/Equality-feminism.jpg" height="500px" width="400px">
	</div>`
};

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
    	<style type="text/css">
    		
    		p{
    			margin: 10px;
    		}
    		#content{
    			width: 800px;
    			display: inline-block;
    		}
    	</style>
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

app.get('/WhatIsFeminism',function(req,res){
    res.send(createTemplate(ArticleOne));
});

app.get('/FeministPersonalities',function(req,res){
    res.sendFile(path.join(__dirname,'ui','ArticleTwo.html'));
});

app.get('/Organisations',function(req,res){
    res.sendFile(path.join(__dirname,'ui','ArticleThree.html'));
});

app.get('/Issues',function(req,res){
    res.sendFile(path.join(__dirname,'ui','ArticleFour.html'));
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
