fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "ddb752c21dmsh170f263d1321659p1fc6bcjsn578e083ac12d"
	}
})
.then(response => response.json())
.then(data => {
	let total_cases = document.getElementById('total_cases')
	total_cases.innerHTML = `${data[0].TotalCases}`
	let active_cases = document.getElementById('active_cases')
	active_cases.innerHTML = `${data[0].ActiveCases}`
	let total_deaths = document.getElementById('total_deaths')
	total_deaths.innerHTML = `${data[0].TotalDeaths}`
	let total_recovered = document.getElementById('total_recovered')
	total_recovered.innerHTML = `${data[0].TotalRecovered}`

	console.log(data);
})

.catch(err => console.log(err))



