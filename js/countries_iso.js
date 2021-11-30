fetch("https://covid-19-statistics.p.rapidapi.com/regions", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "ddb752c21dmsh170f263d1321659p1fc6bcjsn578e083ac12d"
	}
})
.then(response => response.json())
.then(data => {
    let list_countries = ''
    for (let i = 0; i < data.data.length; i++) {
        list_countries += `<tr><td>${data.data[i].iso}</td><td>${data.data[i].name}</td></tr>`;
    }
    document.getElementById('data').innerHTML = list_countries;
})
.catch(err => {
	console.error(err);
});