    	/*function to get token using username, password, orgonization as parameters*/
    	function login() {
    		var user=document.getElementById("username").value;
    		var pass = 	document.getElementById("password").value;
    		var org = document.getElementById("organization").value;
    		var xhttp = new XMLHttpRequest();
    		xhttp.onreadystatechange = function() {
    			if (this.readyState == 4 && this.status == 200) {
    				var obj = JSON.parse(this.responseText);
    				if (obj.token.length>0){
    					
    					window.open("main.html","_self");
    				}
    				console.log(obj.token.replace(/[{}]/g, ""));

    			}
    		};	
    		xhttp.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
    		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    		xhttp.send("username="+user+"&password="+pass+"&organization="+org);
    		localStorage.setItem("username", user);
    		localStorage.setItem("password", pass);
    		localStorage.setItem("organization", org);

    	}
        var myIndex = 0;
slideshow();
function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 7000);    
}