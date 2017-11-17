var user=localStorage.getItem("username");
var pass = 	localStorage.getItem("password");
var org = localStorage.getItem("organization");
var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var obj = JSON.parse(this.responseText);
		var t = obj.token.replace(/[{}]/g, "");
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var obj2 = JSON.parse(this.responseText);

				document.getElementById("compdetail").innerHTML = obj2.version.data.content[0].data.events.data.name.value+":\n";
				document.getElementById("compdetail").innerHTML += "   " + obj2.version.data.content[0].data.events.data.items[0].name.value+": "+obj2.version.data.content[0].data.events.data.items[0].value.magnitude+"\n";
				document.getElementById("compdetail").innerHTML += "   " + obj2.version.data.content[0].data.events.data.items[1].name.value+": "+obj2.version.data.content[0].data.events.data.items[1].value.magnitude+"\n\n";
				document.getElementById("compdetail").innerHTML += obj2.version.data.content[1].data.events.data.items.name.value+": "+obj2.version.data.content[1].data.events.data.items.value.magnitude+"\n\n";
				document.getElementById("compdetail").innerHTML += obj2.version.data.content[2].data.events.data.items.name.value+": "+obj2.version.data.content[2].data.events.data.items.value.magnitude+"\n\n";
				document.getElementById("compdetail").innerHTML += "Respiration "+obj2.version.data.content[3].data.events.data.items.name.value+": "+obj2.version.data.content[3].data.events.data.items.value.magnitude+"\n\n";
				document.getElementById("compdetail").innerHTML += obj2.version.data.content[4].data.events.data.items.name.value+": "+obj2.version.data.content[4].data.events.data.items.value.magnitude+"\n\n";
				document.getElementById("compdetail").innerHTML += obj2.version.data.content[5].data.events.data.items.name.value+": "+obj2.version.data.content[5].data.events.data.items.value.magnitude+"\n\n";

			}
		};
		var compid = localStorage.getItem("compid");
		xhttp2.open("GET", "http://localhost:8090/ehr/api/v1/compositions/"+compid+"?format=json", true);
		xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp2.setRequestHeader("Authorization", "Bearer "+t);
		xhttp2.send();
	}
};
xhttp1.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
xhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp1.send("username="+user+"&password="+pass+"&organization="+org);