/* API is unstable  */
const { render, html}= uhtml;
const API_BASE = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus';

//fetch
const json = res => {
    res.json();
}
const details = {
    headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        //api key 
        'x-rapidapi-key': 'config.API_KEY'
    }
};
const grabJSON = (url, details) => {
    fetch(url, details).then(json);
}

//cache buster & data
const grabData = () => [
    grabJSON(`${API_BASE}/worldstat.php`, details)
];

const placeHolder = "";
const boxWrapper = ({
    total_deaths,
    total_recovered,
    new_cases,
    new_deaths
}) => html `<div class="box_wrapper">
<div>`;