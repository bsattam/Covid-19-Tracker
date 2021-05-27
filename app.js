let countryJSON = [{"country":"Afghanistan","code":"AF"},{"country":"Albania","code":"AL"},{"country":"Algeria","code":"DZ"},{"country":"American Samoa","code":"AS"},{"country":"Andorra","code":"AD"},{"country":"Angola","code":"AO"},{"country":"Anguilla","code":"AI"},{"country":"Antigua and Barbuda","code":"AG"},{"country":"Argentina","code":"AR"},{"country":"Armenia","code":"AM"},{"country":"Aruba","code":"AW"},{"country":"Australia","code":"AU"},{"country":"Austria","code":"AT"},{"country":"Azerbaijan","code":"AZ"},{"country":"Bahamas","code":"BS"},{"country":"Bahrain","code":"BH"},{"country":"Bangladesh","code":"BD"},{"country":"Barbados","code":"BB"},{"country":"Belarus","code":"BY"},{"country":"Belgium","code":"BE"},{"country":"Belize","code":"BZ"},{"country":"Benin","code":"BJ"},{"country":"Bermuda","code":"BM"},{"country":"Bhutan","code":"BT"},{"country":"Bolivia","code":"BO"},{"country":"Bosnia and Herzegovina","code":"BA"},{"country":"Botswana","code":"BW"},{"country":"Brazil","code":"BR"},{"country":"Brunei","code":"BN"},{"country":"Bulgaria","code":"BG"},{"country":"Burkina Faso","code":"BF"},{"country":"Burundi","code":"BI"},{"country":"Cambodia","code":"KH"},{"country":"Cameroon","code":"CM"},{"country":"Canada","code":"CA"},{"country":"Cape Verde","code":"CV"},{"country":"Cayman Islands","code":"KY"},{"country":"Central African Republic","code":"CF"},{"country":"Chad","code":"TD"},{"country":"Chile","code":"CL"},{"country":"China","code":"CN"},{"country":"Christmas Island","code":"CX"},{"country":"Cocos (Keeling) Islands","code":"CC"},{"country":"Colombia","code":"CO"},{"country":"Comoros","code":"KM"},{"country":"Congo","code":"CG"},{"country":"Cook Islands","code":"CK"},{"country":"Costa Rica","code":"CR"},{"country":"Croatia","code":"HR"},{"country":"Cuba","code":"CU"},{"country":"Cyprus","code":"CY"},{"country":"Czechia","code":"CZ"},{"country":"Denmark","code":"DK"},{"country":"Djibouti","code":"DJ"},{"country":"Dominica","code":"DM"},{"country":"Dominican Republic","code":"DO"},{"country":"East Timor","code":"TP"},{"country":"Ecuador","code":"EC"},{"country":"Egypt","code":"EG"},{"country":"El Salvador","code":"SV"},{"country":"Equatorial Guinea","code":"GQ"},{"country":"Eritrea","code":"ER"},{"country":"Estonia","code":"EE"},{"country":"Ethiopia","code":"ET"},{"country":"Falkland Islands","code":"FK"},{"country":"Faroe Islands","code":"FO"},{"country":"Fiji","code":"FJ"},{"country":"Finland","code":"FI"},{"country":"France","code":"FR"},{"country":"French Guiana","code":"GF"},{"country":"French Polynesia","code":"PF"},{"country":"Gabon","code":"GA"},{"country":"Gambia","code":"GM"},{"country":"Georgia","code":"GE"},{"country":"Germany","code":"DE"},{"country":"Ghana","code":"GH"},{"country":"Gibraltar","code":"GI"},{"country":"Greece","code":"GR"},{"country":"Greenland","code":"GL"},{"country":"Grenada","code":"GD"},{"country":"Guadeloupe","code":"GP"},{"country":"Gua","code":"GU"},{"country":"Guatemala","code":"GT"},{"country":"Guinea","code":"GN"},{"country":"Guinea-Bissau","code":"GW"},{"country":"Guyana","code":"GY"},{"country":"Haiti","code":"HT"},{"country":"Holy See","code":"VA"},{"country":"Honduras","code":"HN"},{"country":"Hong Kong","code":"HK"},{"country":"Hungary","code":"HU"},{"country":"Iceland","code":"IS"},{"country":"India","code":"IN"},{"country":"Indonesia","code":"ID"},{"country":"Iran","code":"IR"},{"country":"Iraq","code":"IQ"},{"country":"Ireland","code":"IE"},{"country":"Israel","code":"IL"},{"country":"Italy","code":"IT"},{"country":"Cote d'Ivoire","code":"CI"},{"country":"Jamaica","code":"JM"},{"country":"Japan","code":"JP"},{"country":"Jordan","code":"JO"},{"country":"Kazakhstan","code":"KZ"},{"country":"Kenya","code":"KE"},{"country":"Kiribati","code":"KI"},{"country":"Kuwait","code":"KW"},{"country":"Kyrgyzstan","code":"KG"},{"country":"Laos","code":"LA"},{"country":"Latvia","code":"LV"},{"country":"Lebanon","code":"LB"},{"country":"Lesotho","code":"LS"},{"country":"Liberia","code":"LR"},{"country":"Libya","code":"LY"},{"country":"Liechtenstein","code":"LI"},{"country":"Lithuania","code":"LT"},{"country":"Luxembourg","code":"LU"},{"country":"Macao","code":"MO"},{"country":"North Macedonia","code":"MK"},{"country":"Madagascar","code":"MG"},{"country":"Malawi","code":"MW"},{"country":"Malaysia","code":"MY"},{"country":"Maldives","code":"MV"},{"country":"Mali","code":"ML"},{"country":"Malta","code":"MT"},{"country":"Marshall Islands","code":"MH"},{"country":"Martinique","code":"MQ"},{"country":"Mauritania","code":"MR"},{"country":"Mauritius","code":"MU"},{"country":"Mayotte","code":"YT"},{"country":"Mexico","code":"MX"},{"country":"Moldova","code":"MD"},{"country":"Monaco","code":"MC"},{"country":"Mongolia","code":"MN"},{"country":"Montserrat","code":"MS"},{"country":"Morocco","code":"MA"},{"country":"Mozambique","code":"MZ"},{"country":"Myanmar","code":"MM"},{"country":"Namibia","code":"NA"},{"country":"Nauru","code":"NR"},{"country":"Nepal","code":"NP"},{"country":"Netherlands","code":"NL"},{"country":"Netherlands Antilles","code":"AN"},{"country":"New Caledonia","code":"NC"},{"country":"New Zealand","code":"NZ"},{"country":"Nicaragua","code":"NI"},{"country":"Niger","code":"NE"},{"country":"Nigeria","code":"NG"},{"country":"Niue","code":"NU"},{"country":"Norfolk Island","code":"NF"},{"country":"Korea, North","code":"KP"},{"country":"Northern Mariana Islands","code":"MP"},{"country":"Norway","code":"NO"},{"country":"Oman","code":"OM"},{"country":"Pakistan","code":"PK"},{"country":"Palau","code":"PW"},{"country":"Palestine","code":"PS"},{"country":"Panama","code":"PA"},{"country":"Papua New Guinea","code":"PG"},{"country":"Paraguay","code":"PY"},{"country":"Peru","code":"PE"},{"country":"Philippines","code":"PH"},{"country":"Pitcairn","code":"PN"},{"country":"Poland","code":"PL"},{"country":"Portugal","code":"PT"},{"country":"Puerto Rico","code":"PR"},{"country":"Qatar","code":"QA"},{"country":"Reunion","code":"RE"},{"country":"Romania","code":"RO"},{"country":"Russia","code":"RU"},{"country":"Rwanda","code":"RW"},{"country":"Saint Helena","code":"SH"},{"country":"Saint Kitts and Nevis","code":"KN"},{"country":"Saint Lucia","code":"LC"},{"country":"Saint Pierre and Miquelon","code":"PM"},{"country":"Saint Vincent and the Grenadines","code":"VC"},{"country":"Samoa","code":"WS"},{"country":"San Marino","code":"SM"},{"country":"Sao Tome and Principe","code":"ST"},{"country":"Saudi Arabia","code":"SA"},{"country":"Senegal","code":"SN"},{"country":"Seychelles","code":"SC"},{"country":"Sierra Leone","code":"SL"},{"country":"Singapore","code":"SG"},{"country":"Slovakia","code":"SK"},{"country":"Slovenia","code":"SI"},{"country":"Solomon Islands","code":"SB"},{"country":"Somalia","code":"SO"},{"country":"South Africa","code":"ZA"},{"country":"Korea, South","code":"KR"},{"country":"South Sudan","code":"SS"},{"country":"Spain","code":"ES"},{"country":"Sri Lanka"},{"country":"Sudan","code":"SD"},{"country":"Suriname","code":"SR"},{"country":"Svalbard and Jan Mayen","code":"SJ"},{"country":"Swaziland","code":"SZ"},{"country":"Sweden","code":"SE"},{"country":"Switzerland","code":"CH"},{"country":"Syria","code":"SY"},{"country":"Tajikistan","code":"TJ"},{"country":"Tanzania","code":"TZ"},{"country":"Thailand","code":"TH"},{"country":"Togo","code":"TG"},{"country":"Tokelau","code":"TK"},{"country":"Tonga","code":"TO"},{"country":"Trinidad and Tobago","code":"TT"},{"country":"Tunisia","code":"TN"},{"country":"Turkey","code":"TR"},{"country":"Turkmenistan","code":"TM"},{"country":"Turks and Caicos Islands","code":"TC"},{"country":"Tuvalu","code":"TV"},{"country":"Uganda","code":"UG"},{"country":"Ukraine","code":"UA"},{"country":"United Arab Emirates","code":"AE"},{"country":"United Kingdom","code":"GB"},{"country":"US","code":"US"},{"country":"Uruguay","code":"UY"},{"country":"Uzbekistan","code":"UZ"},{"country":"Vanuatu","code":"VU"},{"country":"Venezuela","code":"VE"},{"country":"Vietnam","code":"VN"},{"country":"Wallis and Futuna","code":"WF"},{"country":"Western Sahara","code":"EH"},{"country":"Yemen","code":"YE"},{"country":"Yugoslavia","code":"YU"},{"country":"Zambia","code":"ZM"},{"country":"Zimbabwe","code":"ZW"}];

let countryDropdownString = "";
countryJSON.forEach(countryListObject => {
    let tempCountry = countryListObject.country;
    countryDropdownString += `<li><a class="dropdown-item country-list" href="#">${tempCountry}</a></li>`;
})
//console.log(countryDropdownString);


const countryDropDown = document.getElementById('country-dropdown');
countryDropDown.innerHTML = countryDropdownString;

let selectedCountry;
let selectedCountryCode;
const countrySelectorButton = document.getElementById('country-selector-button');
const countryList = document.querySelectorAll('.country-list');
countryList.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        selectedCountry = item.innerText;
        selectedCountryCode = countryJSON[index].code;
        //console.log(selectedCountry, selectedCountryCode);
        countrySelectorButton.innerText = selectedCountry;
    })
});



const cardCountryName = document.querySelector('.country-name');
const cardConfirmedCases = document.querySelector('.confirmed-cases');
const cardPercentageConfirmed = document.querySelector('.percentage-confirmed');
const cardDeaths = document.querySelector('.deaths');
const cardRecovered = document.querySelector('recovered');
const cardCompletelyVaccinated = document.querySelector('.completely-vaccinated');
const cardPartiallyVaccinated = document.querySelector('.partially-vaccinated');
const cardPercentageVaccinated = document.querySelector('.percentage-vaccinated');


const getData = async (url) => {
    return fetch(url).then(res => {
        return res.json();
    });
};

const fetchCountryGeneralData = async function(name){
    const data = await Promise.all([
        getData(`https://covid-api.mmediagroup.fr/v1/cases?ab=${name}`),
        getData(`https://covid-api.mmediagroup.fr/v1/vaccines?ab=${name}`)
    ]);
    return data;
}

const fetchCountryHistoryData = async function(name){
    const data = await Promise.all([
        getData(`https://covid-api.mmediagroup.fr/v1/history?ab=${name}&status=deaths`),
        getData(`https://covid-api.mmediagroup.fr/v1/history?ab=${name}&status=confirmed`),
        getData(`https://covid-api.mmediagroup.fr/v1/history?ab=${name}&status=recovered`)
    ]);
    return data;
}

const displayCountryGeneralData = function(data1){
    cardCountryName.innerText = data1[0].All.country;
}

const countrySearchButton = document.getElementById('country-search-button');
countrySearchButton.addEventListener('click', async ()=>{
    const data1 = await fetchCountryGeneralData(selectedCountryCode);
    displayCountryGeneralData(data1);
    const data2 = await fetchCountryHistoryData(selectedCountryCode);
    
});


var ctx = document.getElementById("mychart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});