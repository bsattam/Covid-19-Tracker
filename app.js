let countryJSON = [{"country":"Afghanistan","code":"AF"},{"country":"Albania","code":"AL"},{"country":"Algeria","code":"DZ"},{"country":"Andorra","code":"AD"},{"country":"Angola","code":"AO"},{"country":"Antigua and Barbuda","code":"AG"},{"country":"Argentina","code":"AR"},{"country":"Armenia","code":"AM"},{"country":"Australia","code":"AU"},{"country":"Austria","code":"AT"},{"country":"Azerbaijan","code":"AZ"},{"country":"Bahamas","code":"BS"},{"country":"Bahrain","code":"BH"},{"country":"Bangladesh","code":"BD"},{"country":"Barbados","code":"BB"},{"country":"Belarus","code":"BY"},{"country":"Belgium","code":"BE"},{"country":"Belize","code":"BZ"},{"country":"Benin","code":"BJ"},{"country":"Bhutan","code":"BT"},{"country":"Bolivia","code":"BO"},{"country":"Bosnia and Herzegovina","code":"BA"},{"country":"Botswana","code":"BW"},{"country":"Brazil","code":"BR"},{"country":"Brunei","code":"BN"},{"country":"Bulgaria","code":"BG"},{"country":"Burkina Faso","code":"BF"},{"country":"Burundi","code":"BI"},{"country":"Cambodia","code":"KH"},{"country":"Cameroon","code":"CM"},{"country":"Canada","code":"CA"},{"country":"Central African Republic","code":"CF"},{"country":"Chad","code":"TD"},{"country":"Chile","code":"CL"},{"country":"China","code":"CN"},{"country":"Colombia","code":"CO"},{"country":"Comoros","code":"KM"},{"country":"Costa Rica","code":"CR"},{"country":"Croatia","code":"HR"},{"country":"Cuba","code":"CU"},{"country":"Cyprus","code":"CY"},{"country":"Czechia","code":"CZ"},{"country":"Denmark","code":"DK"},{"country":"Djibouti","code":"DJ"},{"country":"Dominica","code":"DM"},{"country":"Dominican Republic","code":"DO"},{"country":"Ecuador","code":"EC"},{"country":"Egypt","code":"EG"},{"country":"El Salvador","code":"SV"},{"country":"Equatorial Guinea","code":"GQ"},{"country":"Eritrea","code":"ER"},{"country":"Estonia","code":"EE"},{"country":"Ethiopia","code":"ET"},{"country":"Fiji","code":"FJ"},{"country":"Finland","code":"FI"},{"country":"France","code":"FR"},{"country":"French Guiana","code":"GF"},{"country":"French Polynesia","code":"PF"},{"country":"Germany","code":"DE"},{"country":"Ghana","code":"GH"},{"country":"Gibraltar","code":"GI"},{"country":"Greece","code":"GR"},{"country":"Greenland","code":"GL"},{"country":"Guadeloupe","code":"GP"},{"country":"Guatemala","code":"GT"},{"country":"Guyana","code":"GY"},{"country":"Haiti","code":"HT"},{"country":"Holy See","code":"VA"},{"country":"Honduras","code":"HN"},{"country":"Hungary","code":"HU"},{"country":"Iceland","code":"IS"},{"country":"India","code":"IN"},{"country":"Indonesia","code":"ID"},{"country":"Iran","code":"IR"},{"country":"Iraq","code":"IQ"},{"country":"Ireland","code":"IE"},{"country":"Israel","code":"IL"},{"country":"Italy","code":"IT"},{"country":"Cote d'Ivoire","code":"CI"},{"country":"Jamaica","code":"JM"},{"country":"Japan","code":"JP"},{"country":"Jordan","code":"JO"},{"country":"Kazakhstan","code":"KZ"},{"country":"Kenya","code":"KE"},{"country":"Kuwait","code":"KW"},{"country":"Laos","code":"LA"},{"country":"Latvia","code":"LV"},{"country":"Lebanon","code":"LB"},{"country":"Lesotho","code":"LS"},{"country":"Liberia","code":"LR"},{"country":"Libya","code":"LY"},{"country":"Liechtenstein","code":"LI"},{"country":"Lithuania","code":"LT"},{"country":"Luxembourg","code":"LU"},{"country":"Macao","code":"MO"},{"country":"North Macedonia","code":"MK"},{"country":"Madagascar","code":"MG"},{"country":"Malawi","code":"MW"},{"country":"Malaysia","code":"MY"},{"country":"Maldives","code":"MV"},{"country":"Mali","code":"ML"},{"country":"Malta","code":"MT"},{"country":"Marshall Islands","code":"MH"},{"country":"Mauritius","code":"MU"},{"country":"Mexico","code":"MX"},{"country":"Moldova","code":"MD"},{"country":"Monaco","code":"MC"},{"country":"Mongolia","code":"MN"},{"country":"Morocco","code":"MA"},{"country":"Mozambique","code":"MZ"},{"country":"Myanmar","code":"MM"},{"country":"Namibia","code":"NA"},{"country":"Nauru","code":"NR"},{"country":"Nepal","code":"NP"},{"country":"Netherlands","code":"NL"},{"country":"New Zealand","code":"NZ"},{"country":"Nicaragua","code":"NI"},{"country":"Niger","code":"NE"},{"country":"Nigeria","code":"NG"},{"country":"Niue","code":"NU"},{"country":"Norway","code":"NO"},{"country":"Oman","code":"OM"},{"country":"Pakistan","code":"PK"},{"country":"Palau","code":"PW"},{"country":"Palestine","code":"PS"},{"country":"Papua New Guinea","code":"PG"},{"country":"Paraguay","code":"PY"},{"country":"Peru","code":"PE"},{"country":"Pitcairn","code":"PN"},{"country":"Portugal","code":"PT"},{"country":"Puerto Rico","code":"PR"},{"country":"Qatar","code":"QA"},{"country":"Reunion","code":"RE"},{"country":"Romania","code":"RO"},{"country":"Russia","code":"RU"},{"country":"Rwanda","code":"RW"},{"country":"Saint Helena","code":"SH"},{"country":"Saint Kitts and Nevis","code":"KN"},{"country":"Saint Lucia","code":"LC"},{"country":"Saint Pierre and Miquelon","code":"PM"},{"country":"Saint Vincent and the Grenadines","code":"VC"},{"country":"Samoa","code":"WS"},{"country":"San Marino","code":"SM"},{"country":"Sao Tome and Principe","code":"ST"},{"country":"Saudi Arabia","code":"SA"},{"country":"Senegal","code":"SN"},{"country":"Seychelles","code":"SC"},{"country":"Sierra Leone","code":"SL"},{"country":"Singapore","code":"SG"},{"country":"Slovakia","code":"SK"},{"country":"Slovenia","code":"SI"},{"country":"Solomon Islands","code":"SB"},{"country":"Somalia","code":"SO"},{"country":"South Africa","code":"ZA"},{"country":"Korea, South","code":"KR"},{"country":"South Sudan","code":"SS"},{"country":"Spain","code":"ES"},{"country":"Sri Lanka"},{"country":"Sudan","code":"SD"},{"country":"Suriname","code":"SR"},{"country":"Svalbard and Jan Mayen","code":"SJ"},{"country":"Sweden","code":"SE"},{"country":"Switzerland","code":"CH"},{"country":"Syria","code":"SY"},{"country":"Tajikistan","code":"TJ"},{"country":"Tanzania","code":"TZ"},{"country":"Thailand","code":"TH"},{"country":"Togo","code":"TG"},{"country":"Tokelau","code":"TK"},{"country":"Tonga","code":"TO"},{"country":"Trinidad and Tobago","code":"TT"},{"country":"Tunisia","code":"TN"},{"country":"Turkey","code":"TR"},{"country":"Turkmenistan","code":"TM"},{"country":"Turks and Caicos Islands","code":"TC"},{"country":"Uganda","code":"UG"},{"country":"Ukraine","code":"UA"},{"country":"United Arab Emirates","code":"AE"},{"country":"United Kingdom","code":"GB"},{"country":"United States Of America","code":"US"},{"country":"Uruguay","code":"UY"},{"country":"Uzbekistan","code":"UZ"},{"country":"Vanuatu","code":"VU"},{"country":"Venezuela","code":"VE"},{"country":"Vietnam","code":"VN"},{"country":"Wallis and Futuna","code":"WF"},{"country":"Western Sahara","code":"EH"},{"country":"Yemen","code":"YE"},{"country":"Yugoslavia","code":"YU"},{"country":"Zambia","code":"ZM"},{"country":"Zimbabwe","code":"ZW"}];

let countryDropdownString = "";
countryJSON.forEach(countryListObject => {
    let tempCountry = countryListObject.country;
    countryDropdownString += `<li><a class="dropdown-item country-list text-white" href="#">${tempCountry}</a></li>`;
})
//console.log(countryDropdownString);
/*
const heading = document.querySelector('.heading');
heading.innerText = "" + window.screen.width + " " + window.screen.height;
*/

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

const initiateGeneralDetailsContainer = function(){
    generalDetailsContainer.innerHTML = `
    <p class="country-name py-5 text-white">Loading Data...</p>
    <p class="confirmed-cases text-danger"></p>
    <p class="percentage-confirmed text-danger"></p>
    <p class="deaths text-danger"></p>
    <p class="recovered text-success mt-5"></p>
    <p class="completely-vaccinated text-success"></p>
    <p class="partially-vaccinated text-success mb-5"></p>
    `
}

let cardCountryName;
let cardConfirmedCases;
let cardPercentageConfirmed;
let cardDeaths;
let cardRecovered; 
let cardCompletelyVaccinated;
let cardPartiallyVaccinated;
let cardPercentageVaccinated;

const generalDetailsContainer = document.getElementById('general-details-container');
const canvasContainer = document.getElementById('canvas-container');


const initiateDomOperators = function(){
    cardCountryName = document.querySelector('.country-name');
    cardConfirmedCases = document.querySelector('.confirmed-cases');
    cardPercentageConfirmed = document.querySelector('.percentage-confirmed');
    cardDeaths = document.querySelector('.deaths');
    cardRecovered = document.querySelector('.recovered');
    cardCompletelyVaccinated = document.querySelector('.completely-vaccinated'); 
    cardPartiallyVaccinated = document.querySelector('.partially-vaccinated');
    cardPercentageVaccinated = document.querySelector('.percentage-vaccinated');
}



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

let canvasDisplayFlag=0;

const displayCountryGeneralData = function(data1){
    console.log(data1);
    cardCountryName.innerText = `Name of the country: ${data1[0].All.country}`;
    cardConfirmedCases.innerText = `Total Confirmed Cases: ${data1[0].All.confirmed}`;
    cardPercentageConfirmed.innerText = `Percentage of population affected: ${((parseFloat(data1[0].All.confirmed) / parseFloat(data1[0].All.population))*100).toFixed(4)}`;
    cardDeaths.innerText = `Total Deaths: ${data1[0].All.deaths}`;
    cardRecovered.innerText =   `Total Recovered: ${data1[0].All.recovered}`;
    cardCompletelyVaccinated.innerText = `Completely Vaccinated: ${data1[1].All.people_vaccinated}`;
    cardPartiallyVaccinated.innerText = `Partially Vaccinated: ${data1[1].All.people_partially_vaccinated}`;
}

const checkError = function(count){
    for (let i=1; i<count.length; i++){
        if (count[i]<count[i-1])
            count[i] = count[i-1];
    }
}

const displayCountryHistoryData = function(data2){
    
    const deathDates = Object.keys(data2[0].All.dates);
    deathDates.reverse();
    let deathCounts = [];
    deathDates.forEach((date)=>{
        deathCounts.push(data2[0].All.dates[date]);
    })
    checkError(deathCounts);
    let dailyDeathCounts = [0];
    for (let i=1; i<deathDates.length; i++)
        dailyDeathCounts.push(deathCounts[i]-deathCounts[i-1]);
    const confirmedDates = Object.keys(data2[1].All.dates);
    confirmedDates.reverse();
    let confirmedCounts = [];
    confirmedDates.forEach(date => {
        confirmedCounts.push(data2[1].All.dates[date]);
    })
    checkError(confirmedCounts);
    let dailyConfirmedCounts = [0];
    for (let i=1; i<confirmedDates.length; i++){
        dailyConfirmedCounts.push(confirmedCounts[i]-confirmedCounts[i-1]);
    }
    const recoveredDates = Object.keys(data2[2].All.dates);
    recoveredDates.reverse();
    let recoveredCounts = [];
    recoveredDates.forEach(date => {
        recoveredCounts.push(data2[2].All.dates[date]);
    })
    checkError(recoveredCounts);
    let dailyRecoveredCounts = [0];
    for (let i=1; i<recoveredDates.length; i++){
        dailyRecoveredCounts.push(recoveredCounts[i]-recoveredCounts[i-1]);
    }
    canvasContainer.innerHTML = 
    `<canvas id="chart-canvas-death" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>
    <canvas id="chart-canvas-daily-death" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>
    <canvas id="chart-canvas-confirmed" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>
    <canvas id="chart-canvas-daily-confirmed" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>
    <canvas id="chart-canvas-recovered" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>
    <canvas id="chart-canvas-daily-recovered" class="w-100 h-50 my-5 p-3 bgdarkoverlay"></canvas>`
    makeChart('death', deathDates, deathCounts);
    makeChart('daily-death', deathDates, dailyDeathCounts);
    makeChart('confirmed', confirmedDates, confirmedCounts);
    makeChart('daily-confirmed', confirmedDates, dailyConfirmedCounts);
    makeChart('recovered', recoveredDates, recoveredCounts);
    makeChart('daily-recovered', recoveredDates, dailyRecoveredCounts);
}

const countrySearchButton = document.getElementById('country-search-button');
countrySearchButton.addEventListener('click', async ()=>{
    canvasContainer.innerHTML = "";
    initiateGeneralDetailsContainer();
    initiateDomOperators();
    const data1 = await fetchCountryGeneralData(selectedCountryCode);
    displayCountryGeneralData(data1);
    const data2 = await fetchCountryHistoryData(selectedCountryCode);
    console.log(data2);
    displayCountryHistoryData(data2);
    
});




const makeChart = function (type, Dates, Counts){
    const chart = document.getElementById(`chart-canvas-${type}`);
    if (window.screen.width < 700)
        chart.height = 600;

    
    var myChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: Dates,
            datasets: [{
                label: `Number of ${type}`,
                data: Counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 2,
                pointRadius: 2,
                pointBorderWidth: 0
            }]
            
        },
        options: {
            responsive: true,
            mainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        reverse: false,
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    ticks: {
                    reverse: true,
                      beginAtZero: true
                    }
                }]
            }
        }
    });
}




// 393 851
// 1536 864

// ,{"country":"Aruba","code":"AW"} is removed from the json, because this gives the whole list of all countries present




/*
Chart.defaults.global.legend.display = false;
var lineChartData = {
labels: ['20°', '30°', '40°', '50°', '60°', '70°', '80°'],
datasets: [{
  data: [null, null, null, 400, 320, 220, 90],
  pointBorderColor: "rgba(75,192,192,1)",
  pointBackgroundColor: "#fff",
  borderColor: '#FFEC8B',
  pointBorderWidth: 0,
  pointHoverRadius: 0,
  pointHoverBackgroundColor: "rgba(75,192,192,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 0,
  lineWidth: 100,
  pointRadius: 0,
  pointHitRadius: 0,
},{
  data: [550, 520, 470, 400, null, null, null],
  borderColor: '#ff8800',
  pointBorderWidth: 0,
  pointHoverRadius: 0,
  pointHoverBackgroundColor: "rgba(75,192,192,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 0,
  pointRadius: 0,
  pointHitRadius: 0,
},
{
    data: [220, 220, 220, 220, 220, 220, 220],
    borderColor: '#008080',
    borderDash: [10, 10],
    pointBorderWidth: 0,
    pointHoverRadius: 0,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 0,
    pointRadius: 0,
    pointHitRadius: 0,
  }
]
};

var ctx = document.getElementById("canvas2").getContext("2d");
var myChart = new Chart(ctx, {
 type: "line",
 beginAtZero: true,
 scaleOverride:true,
 scaleSteps:9,
 scaleStartValue:0,
 lineWidth: 100,
 scaleStepWidth:100,
 data: lineChartData,
 options: {
    elements: {
        line: {
            fill: false
        }
    },
    style: {
      strokewidth: 10
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Temperatuur - Celcius'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
            max: 600,
            min: 0,
            stepSize: 200,
            userCallback: function(value, index, values) {
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join('.');
                return value + '%';
              }
        },
        scaleLabel: {
          display: true,
          labelString: 'Rendement'
        }
      }]
    }
  }
})
*/