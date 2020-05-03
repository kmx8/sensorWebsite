function loadDB() {
	var xhttp = new XMLHttpRequest();

	console.log("loading");
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var txt = "";
			var arr = JSON.parse(this.responseText);

			txt += "<table id='table1' class='content-table' width='100%'>";
			txt += "<tr>";
			txt += "<th>UID</th>";
			txt += "<th>Date</th>";
			txt += "<th>Temperature</th>";
			txt += "<th>Humidity</th>";
			txt += "<th>VPD</th>";
			txt += "</tr>";
			for (x in arr) {
				txt += "<tr>";
				txt += "<td>"+arr[x].UID+"</td>";
				txt += "<td>"+arr[x].time+"</td>";
				txt += "<td>"+arr[x].temperature+"</td>";
				txt += "<td>"+arr[x].humidity+"</td>";
				txt += "<td>"+arr[x].vpd+"</td>";
				txt += "</tr>";
			}
			txt += "</table>";
			document.getElementById("data").innerHTML = txt;
		}
	};
	xhttp.open('POST', 'https://web.njit.edu/~mk595/sensor/sensor.php');
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

function loadLoop() {
	loadDB();
	console.log("Loop");
	var run = setInterval(loadDB, 3000);
}
