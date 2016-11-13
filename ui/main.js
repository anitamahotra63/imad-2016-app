function loadLoginForm(){
    
    document.getElementById('upper').innerHTML=`
            <input type="text" id="username" placeholder="username"/>
			<input type="password" id="password">
			<input type="submit" id="LogIn" value="Log In">
			<input type="submit" id="Register" value="Register">
    `;
    var register = document.getElementById('Register');
    register.onclick = function () {
            // Create a request object
            var request = new XMLHttpRequest();
            
            // Capture the response and store it in a variable
            request.onreadystatechange = function () {
              if (request.readyState === XMLHttpRequest.DONE) {
                  // Take some action
                  if (request.status === 200) {
                      alert('User created successfully');
                      register.value = 'Registered!';
                      document.getElementById('upper').innerHTML=`<span style="font-family:Gabriola; font-size:xx-large; margin-left:500px; color:white "><strong> You are logged in!</strong>
                             <a href="/logout" style="font-family:Gabriola; font-size:xx-large; color:white; margin:50px;">Log Out</a></span>`;
                      loadArticles();
                  } else {
                      alert('Could not register the user');
                      register.value = 'Register';
                  }
              }
            };
            
            // Make the request
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            console.log(username);
            console.log(password);
            request.open('POST', '/create-user', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify({username: username, password: password}));  
            register.value = 'Registering...';
        
        };
        
        var submit = document.getElementById('LogIn');
        submit.onclick = function () {
            // Create a request object
            var request = new XMLHttpRequest();
            
            // Capture the response and store it in a variable
            request.onreadystatechange = function () {
              if (request.readyState === XMLHttpRequest.DONE) {
                  // Take some action
                  if (request.status === 200) {
                      submit.value = 'Sucess!';
                      document.getElementById('upper').innerHTML=`<span style="font-family:Gabriola; font-size:xx-large; margin-left:500px; color:white "><strong> You are logged in!</strong>
                       <a href="/logout" style="font-family:Gabriola; font-size:xx-large; color:white; margin:50px;">Log Out</a> </span>`;
                      loadArticles();
                  } else if (request.status === 403) {
                      submit.value = 'Invalid credentials. Try again?';
                  } else if (request.status === 500) {
                      alert('Something went wrong on the server');
                      submit.value = 'Login';
                  } else {
                      alert('Something went wrong on the server');
                      submit.value = 'Login';
                  }
              }  
              // Not done yet
            };
            
            // Make the request
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            console.log(username);
            console.log(password);
            request.open('POST', '/login', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify({username: username, password: password}));  
            submit.value = 'Logging in...';
            
        };
}
    
function loadArticles () {
        // Check if the user is already logged in
    document.getElementById('articles').innerHTML=`<div>
		<div class="welcomePage">
			<a href="/articles/Issues" id="pic1">
				<img src="http://cdn.grantcardone.com/wp-content/uploads/WIP-WomenIssuesTodayWorld-YT-TN.jpg" height="250px" width="600px">
			</a>
		</div>
		<div class="welcomePage" >
			<a href="/articles/Organisations" >
				<img src="https://i.ytimg.com/vi/1nkWx5_WjnA/maxresdefault.jpg" height="250px" width="600px" id="pic2">
			</a>
		</div>
		<div class="welcomePage">
			<a href="/articles/Introduction" id="pic3">
				<img src="http://www.genderandeducation.com/wp-content/uploads/2010/03/femm1.jpg" height="250px" width="600px">
			</a>
		</div>
		<div class="welcomePage">
			<a href="/articles/Contribution" id="pic4">
				<img src="http://hbz.h-cdn.co/assets/16/10/980x490/landscape-1457447708-hbz-feminists-soc.jpg" height="250px" width="600px">
			</a>
		</div>
	</div>`;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            
            if (request.status === 200){
                if(JSON.stringify(this.responseText) === 'You Are Not Logged In'){
                    loadLoginForm();
                }else{
                    loadLoggedInUser(this.responseText);
                }
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('upper');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
    loadArticles();
}

loadLogin();
