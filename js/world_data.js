fetch("https://covid-19-data.p.rapidapi.com/totals", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "ddb752c21dmsh170f263d1321659p1fc6bcjsn578e083ac12d"
	}
})
.then(response => response.json())
.then(data => {
	let total_cases = document.getElementById('total_cases')
	total_cases.innerHTML = accounting.formatNumber(`${data[0].confirmed}`)
	let active_cases = document.getElementById('active_cases')
	active_cases.innerHTML = accounting.formatNumber(`${data[0].ActiveCases}`)
	let total_deaths = document.getElementById('total_deaths')
	total_deaths.innerHTML = accounting.formatNumber(`${data[0].deaths}`)
	let total_recovered = document.getElementById('total_recovered')
	total_recovered.innerHTML = accounting.formatNumber(`${data[0].recovered}`)

	console.log(data);
})

.catch(err => console.log(err))



