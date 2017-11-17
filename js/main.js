var user=localStorage.getItem("username");
var pass = 	localStorage.getItem("password");
var org = localStorage.getItem("organization");
/*request for getting token for header*/
var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {


		var obj = JSON.parse(this.responseText);
		var t = obj.token.replace(/[{}]/g, "");
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var userinfo = this.responseText.replace(/,/g, "\n").replace(/[{}]/g, "").replace(/[\[\]']+/g, "").replace(/:\s*/g, " - ").replace(/\"/g, "");
				document.getElementById("userinfo").innerHTML = userinfo;

				console.log(this.responseText);

			}
		};

		/*request for getting user info*/
		xhttp2.open("GET", "http://localhost:8090/ehr/api/v1/users/"+user+"?format=json", true);
		xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp2.setRequestHeader("Authorization", "Bearer "+t);
		console.log("Authorization Bearer "+t);
		xhttp2.send();

		/*request for getting ehrs*/
		var xhttp3 = new XMLHttpRequest();
		xhttp3.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var ehrjson = (this.responseText)
				var ehrobj = JSON.parse(ehrjson);
				var l = ehrobj.ehrs.length;
				console.log(l);
				var i = 0;
				for (i=0; i<l; i++){
					document.getElementById("ehrlist").innerHTML += (i+1)+") <a id=\""+i.toString()+"\" onclick=\"showehrdetail(this)\">Uid: " + ehrobj.ehrs[i].uid +Array(41-ehrobj.ehrs[i].uid.length).join(" ")+"</a>    ----    Date Created: "+ehrobj.ehrs[i].dateCreated+"\n\n";
				}
				for (i = 0; i < l; i++) {

				}

			}
		};

		xhttp3.open("GET", "http://localhost:8090/ehr/api/v1/ehrs/?format=json", true);
		xhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp3.setRequestHeader("Authorization", "Bearer "+t);
		console.log("Authorization Bearer "+t);
		xhttp3.send("max=20");

	}
};

xhttp1.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
xhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp1.send("username="+user+"&password="+pass+"&organization="+org);

function showehrdetail(element){
	var ehruid = element.innerText.replace("Uid: ", "").replace(/\s+/g,"");
	console.log(ehruid);
	localStorage.setItem("ehruid", ehruid);
	window.open("ehrinfo.html","_self");
}

function createEhr(){
	window.open("ehrcreate.html", "_self");
}

function logout(){
	localStorage.setItem("username", " ");
    localStorage.setItem("password", " ");
    localStorage.setItem("organization", " ");
	window.open("index.html","_self");
	//preventBack();
}
 //function preventBack(){window.history.forward();}
   // setTimeout("preventBack()", 5);
    //window.onunload=function(){null};

