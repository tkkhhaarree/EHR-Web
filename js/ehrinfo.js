var user=localStorage.getItem("username");
var pass = 	localStorage.getItem("password");
var org = localStorage.getItem("organization");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var obj = JSON.parse(this.responseText);
		var t = obj.token.replace(/[{}]/g, "");
		var ehruid = localStorage.getItem("ehruid");
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				console.log(this.responseText);
				var ehrinfo =  this.responseText.replace(/[,]/g, "\n").replace(/[{}]/g, "").replace(/\"/g, " ");
				document.getElementById("ehrinfo").innerHTML = ehrinfo;
			}
		};
		xhttp2.open("GET", "http://localhost:8090/ehr/api/v1/ehrs/ehrUid/"+ehruid+"?format=json", true);
		xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp2.setRequestHeader("Authorization", "Bearer "+t);
		xhttp2.send();

		var xhttp3 = new XMLHttpRequest();
		xhttp3.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				console.log(this.responseText);
				var comp =  JSON.parse(this.responseText);
				var i = 0;
				var l = comp.result.length;
				for (i=0; i<l; i++){
					document.getElementById("comp").innerHTML += (i+1)+")<b><font size=\"5\" color=\"blue\"> <a id=\""+i.toString()+"\" onclick=\"showdata(this)\">Composition UID: "+comp.result[i].uid+"</a></font></b>"+"\n   Date created: "+comp.result[i].startTime+"\n   Subject Uid: "+comp.result[i].subjectId+"\n   Composition Type: "+comp.result[i].templateId+ "\n\n";;

				}
			}
		};
		xhttp3.open("GET", "http://localhost:8090/ehr/api/v1/compositions?format=json&ehrUid="+ehruid+"&max=5", true);
		xhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp3.setRequestHeader("Authorization", "Bearer "+t);
		console.log("format=json&ehrUid="+ehruid+"&max=10");
		xhttp3.send();

	}
};	
xhttp.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("username="+user+"&password="+pass+"&organization="+org);

function showdata(element){
	var compid = element.innerText.replace("Composition UID: ", "");
	localStorage.setItem("compid", compid);
	console.log(compid);
	window.open("compinfo.html","_self");
}

function addcomp(){
	window.open("compadd.html","_self");
}