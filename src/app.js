import axios from 'axios';

async function getCountries () {

    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data);

        result.data.sort((a,b) =>{
            return a.population - b.population
    })

        getAllCountries(result.data)



    } catch (e) {
        console.error(e)
    }
}

getCountries();

function getAllCountries(countries){

    const countryUnordedList = document.getElementById('country-list')


    countries.map((allCountries) =>{
        const countryList = document.createElement('li')

        countryList.innerHTML=`
            <h3 class="${allCountries.region}">${allCountries.name}</h3>
            <p>Has a population of" ${allCountries.population}people.</p>
            <img src="${allCountries.flag}" class="flag"/>
            `
        countryUnordedList.appendChild(countryList)

    })

}

