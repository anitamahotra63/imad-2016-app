var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app=express();
app.use(morgan('combined'));

var articles = {
   
    'Introduction':{
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
    },
    
    'Contribution':{
        title:'Contribution',
        heading:'Top Five Feminist Personalities',
        content:`<div id="content" style="margin:20px 100px">
		<img src="http://hbz.h-cdn.co/assets/cm/15/03/480x720/54bbd8373c346_-_hbz-feminists-136703607.jpg" height="400px" width="300px"><br>
		<strong><span style="font-size:xx-large ; font-family:Gabriola">Hillary Clinton</span></strong>
		<hr>
		<p>
			The former First Lady is the only First Lady ever run for public office, serving as the first ever female Senator from the New York and the U.S Secretary Of State. Following her 2008 campaign for the Democratic nomination, Clinton re-emerged as one of the top candidates int the 2016 election-proving she's nt going to be held back. Clinton is doing her part to all but eradicate the glass ceiling.
			Could this be the year of United States's first Female 
			President?
		</p>
		<br><br><br>
		<img src="http://hbz.h-cdn.co/assets/cm/15/03/480x720/54bbd842b136f_-_rexusa_1934802v.jpg" height="400px" width="300px"><br>
		<strong><span style="font-size:xx-large ; font-family:Gabriola">Oprah Winfrey</span></strong>
		<hr>
		<p>
			Motivated by the unequal pay she received in the start of her broadcasting career, Oprah set out to start her own television show and from there built an empire catering to helping women grow, develop and thrive, "I never did consider or call myself a feminist, but I don't think you can really be a woman in this world and not be." She has since developed the Oprah Winfrey Leadership Academy for Girls in South Africa, the Oprah Winfrey Network and was awarded the Presidential Medal of Freedom in 2013.
		</p>
		<br><br><br>
		<img src="http://hbz.h-cdn.co/assets/cm/15/03/480x720/54bbd83095048_-_hbz-feminists-50308643.jpg" height="400px" width="300px"><br>
		<strong><span style="font-size:xx-large ; font-family:Gabriola">Gloria Steinem</span></strong>
		<hr>
		<p>
			Perhaps one of the most recognized faces of Feminism, Gloria Steinem led the women's liberation movements throughout the 60's and 70's. Co-founder of the feminist themed magazine, Ms. Steinem was co-founder of several female groups that changed the face of feminism including Women's Action Alliance, National Women's Political Caucus, Women's media Centre and more. All of her efforts led to her Induction into the National Women's Hall of Fame in 1993 and in 2013 she was honored with Presidential Medal of Freedom.
		</p>
		<br><br><br>
		<img src="http://hbz.h-cdn.co/assets/cm/15/03/480x720/54bbd8366b3fc_-_hbz-feminists-120254709.jpg" height="400px" width="300px"><br>
		<strong><span style="font-size:xx-large ; font-family:Gabriola">Sheryl Sandber</span></strong>
		<hr>
		<p>
			The Fcaebook CEO is credited with pioneering the "Lean-In" movement with her book encouraging women to excel in the workforce. Both Snadberg and "Lean-In" co-sponsored 2014's 'Ban Bossy' campaign starring Condoleeza Rice, Beyonce, Jane Lynch and Jennifer Garner.
		</p>
		<br><br><br>
		<img src="http://hbz.h-cdn.co/assets/cm/15/03/480x720/54bbd83dca22d_-_hbz-feminists-187708263.jpg" height="400px" width="300px"><br>
		<strong><span style="font-size:xx-large ; font-family:Gabriola">Malala Yousafzai</span></strong>
		<hr>
		<p>
			The courageous 17-year-old rose to fame with her memoir 'I am Malala' documenting her fearless journey as a youg student in Pakistan. Since, Malala has been travelling the world advocating for education rights for women and children.
		</p>
		<br><br><br>
		<a href="file:///C:/Users/ANITA/Desktop/25%20Famous%20Feminists%20-%20Inspiring%20Women%20of%20the%20Feminist%20Movement.html"><span style="font-size:xx-large">Learn More</span>
	</div>`
    },
    
    'Organisations':{
       title:'Organisations',
       heading:'Some Women Organisations You Need To Know',
       content:`	<div id="content" style="background-image:url("http://www.randomhistory.com/photos/2015/feminism-gender-equality.jpg")">
		<a href="http://www.aauw.org/" id="link">American Association of University Women (AAUW)</a><br>
		<p>
			American Association of University Women advances equity for women and girls through advocacy, education, philanthropy and research. AAUW (formerly known as the American Association of University Women) is a nationwide network of more than 100,000 members and donors, 1,000 branches and 500 college and university institution partners.
		</p>
		<br><br><br>
		<a href="http://www.gfwc.org/" id="link">General Federation of Women’s Clubs (GFWC)</a><br>
		<p>
			The General Federation of Women’s Clubs is a nonpartisan, nondenominational, women’s volunteer service organization founded in 1890. More than 100,000 members in affiliated clubs in every state and more than a dozen countries work in their own communities to support the arts, preserve natural resources, advance education, promote healthy lifestyles, encourage civic involvement, and work toward world peace and understanding.
		</p>
		<br><br><br>
		<a href="http://www.nafe.com/" id="link">National Association for Female Executives (NAFE)</a><br>
		<p>
			Founded in 1972, the National Association of Female Executives provides education, networking and public advocacy to empower its members to achieve career success and financial security. Members are women executives, business owners, entrepreneurs and others who are committed to NAFE’s mission: the advancement of women in the workplace.
		</p>
		<br><br><br>
		<a href="http://www.nwbc.gov/" id="link">National Women’s Business Council (NWBC)</a><br>
		<p>
			The National Women’s Business Council is a bipartisan federal advisory council created to serve as an independent source of advice and policy recommendations to the President, Congress, and the U.S. Small Business Administration on economic issues of importance to women business owners. The Council’s mission is to promote bold initiatives, policies and programs designed to support women’s business enterprises at all stages of development in the public and private sector marketplaces, from start-up to success to significance.
		</p>
		<br><br><br>
		<a href="http://www.witi.com/" id="link">Women in Technology International (WITI)</a><br>
		<p>
			Women in Technology International is a trade association for tech-savvy women, empowering women in business and technology to achieve unimagined possibilities. WITI has programs and partnerships that provide connections, resources, opportunities and a supportive environment of women committed to helping each other.
		</p>
		<br><br><br>
		<a id="link" href="http://www.diversitybestpractices.com/news-articles/20-womens-organizations-you-need-know">Learn More</a>
	</div>`
    },
    
    'Issues':{
        title:'Issues',
        heading:'Issues',
        content:`<div id="content">
		<div class="container" style="margin-left:40px">
				<img src="http://now.org/wp-content/uploads/2014/02/Affirmative-Action-Protest-300-x-200.jpg" height="250px" width="400px">
				<centre><strong>RACIAL JUSTICE</strong></centre><br>
				<p>
					A leader in civil rights since 1996, NOW Continues to fight for equal opportunities fr women of color in all areas including employment, education and health care.
				</p>
		</div>
		<div class="container">
			<img src="http://now.org/wp-content/uploads/2014/02/Econ-Issue-Photo-300-x-200.jpg" height="250px" width="400px">
			<centre><strong >ECONOMIC JUSTICE</strong></centre><br>
				<p>
					NOW advocates for wide range of economic justice issues affecting women including a living wage, job discrimination, pay equity, social security and pension reform and more.
				</p>
		</div>
		<div class="container">
			<img src="http://now.org/wp-content/uploads/2014/02/ERAYes-300-x-200.jpg" height="250px" width="400px">
			<centre><strong >CONSTITUTIONAL EQUITY</strong></centre><br>
				<p>
					Equality in pay, job opportunites, political structure. social security and education will remain elusive without a guarantee of equality in the U.S. Constitution.
				</p>
		</div>
		<br>
		<a href="http://www.economist.com/topics/womens-issues" id="link">Learn More Issues</a>
	</div>`
    }
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

 var names=[];
app.get('/submit-name/:name',function(req,res){
    
    var name=req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/:ArticleName',function(req,res){
    var articleName=req.params.ArticleName;
    res.send(createTemplate(articles[articleName]));
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
