const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHtml = countries.map(country => getcountryHtml(country));
    // console.log(countriesHtml);
    const container = document.getElementById('countries');

    //show countries in container
    // container.innerHTML = countriesHtml

    //to remove comma from array
    const arrayCommaremover = countriesHtml.join(' ');
    container.innerHTML = arrayCommaremover;



}
const getcountryHtml = country => {
    const countryhtmldiv = `
    <div class="countrydiv">
    <h2>
    ${country.name.common}
    </h2>
    <img src="${country.flags.png}">
    </div>
    `
    return countryhtmldiv;
}
loadCountries();