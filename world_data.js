fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "ddb752c21dmsh170f263d1321659p1fc6bcjsn578e083ac12d"
	}
})
.then(response => response.json() )
.then(response =>{

    let element = document.getElementById('total_cases')
    element.innerHTML = `<p>${response.ActiveCases}</p>`;
	console.log(response);
})
.catch(err => {
	console.error(err);
});