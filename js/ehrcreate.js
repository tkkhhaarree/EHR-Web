function createehr() {
	var ehruid = document.getElementById("ehruid").value;
	var subuid = document.getElementById("subuid").value;
	var user=localStorage.getItem("username");
	var pass = 	localStorage.getItem("password");
	var org = localStorage.getItem("organization");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			var t = obj.token.replace(/[{}]/g, "");

			if (ehruid.length>0){
				xhttp2 = new XMLHttpRequest();
				xhttp2.open("POST", "http://localhost:8090/ehr/api/v1/ehrs", true);
				xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp2.setRequestHeader("Authorization", "Bearer "+t);
				xhttp2.send("format=json&uid="+ehruid+"&subjectUid="+subuid);
				window.open("main.html", "_self");

			}
			else{
				xhttp3 = new XMLHttpRequest();
				xhttp3.open("POST", "http://localhost:8090/ehr/api/v1/ehrs", true);
				xhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp3.setRequestHeader("Authorization", "Bearer "+t);
				xhttp3.send("format=json&subjectUid="+subuid);
				window.open("main.html", "_self");
			}
			
			console.log(obj.token.replace(/[{}]/g, ""));

		}
	};	
	xhttp.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("username="+user+"&password="+pass+"&organization="+org);
}