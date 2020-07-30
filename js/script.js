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
        'x-rapidapi-key': 'config.API_KEY';
    }
}