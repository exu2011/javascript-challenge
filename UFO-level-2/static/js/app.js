// const { filter } = require("math.js");

// Get the data from data.js
let tableData = data;

// Create the HTML object references to the form elements
let tbody = d3.select("tbody");
let filterButton = d3.select("#filter-btn");
let form = d3.select("#form")
let queryDate = d3.select("#datetime");

//Debug: 
// console.log(tbody);
// console.log(filterButton);
// console.log(form);
// console.log(queryDate);

// Assign handler to the target objects in the HTML file
filterButton.on("click", runFilter);
// form.on("submit", runFilter);

// Check the distinct country values and found out that only us and ca are listed countries in our data.
// Use this information to create a pulldown list in the html form
distinctCountryList = [];
for(var i = 0; i < tableData.length; i++) {
  if(distinctCountryList.includes(tableData[i].country)) {
    console.log("Found " + tableData[i].country);
  } else {
    distinctCountryList.push(tableData[i].country);
    console.log("Insert " + tableData[i].country);
  }
}
console.log(distinctCountryList);
var select = document.getElementById("country"); 

for(var i = 0; i < distinctCountryList.length; i++) {
    var opt = distinctCountryList[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}​


// Create event handlers for clicking the button or pressing the enter key
// Create the function runFilter() to run for both events
function runFilter() {
  console.log('Debug: inside runFilter()...');

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Save the user input values and use them as filters
  let dateInput = d3.select("#datetime").property("value");
  let cityInput = d3.select("#city").property("value");
  let stateInput = d3.select("#state").property("value");
  let countryInput = d3.select("#country").property("value");
  let shapeInput = d3.select("#shape").property("value");

  // Print out the input values to the Console: 
  console.log(`Date Input: ${dateInput}`);
  console.log(`City Input ${cityInput}`);
  console.log(`State Input: ${stateInput}`);
  console.log(`Country Input: ${countryInput}`);
  console.log(`Shape Input: ${shapeInput}`);


  // Zero out the table object before appending the new filtered results
  tbody.html("");

  // Filter data by the entered data/time, and save them in filteredResults.
  let filteredResults = tableData.filter(dat => 
    (dat.datetime === dateInput) ||
    (dat.city === cityInput) ||
    (dat.state === stateInput) ||
    (dat.country === countryInput) ||
    (dat.shape === shapeInput)
    );


  // var filterStr = "";
  // if(dateInput.length === 0) {
  //   console.log("dateInput is NULL.");
  // } else {
  //   filterStr = "(dat.dateTime === " + dateInput + ")";
  // }

  // if(cityInput.length === 0) {
  //   console.log("cityInput is NULL.");
  // } else {
  //   filterStr += "&& (dat.city === " + cityInput + ")";
  // }

  // if(stateInput.length === 0) {
  //   console.log("stateInput is NULL.");
  // } else {
  //   filterStr += "&& (dat.state === " + stateInput + ")";
  // }

  // if(countryInput.length === 0) {
  //   console.log("countryInput is NULL.");
  // } else {
  //   filterStr += "&& (dat.country === " + countryInput + ")";
  // }

  // if(shapeInput.length === 0) {
  //   console.log("shapeInput is NULL.");
  // } else {
  //   filterStr += "&& (dat.shape === " + shapeInput + ")";
  // }

  // console.log(`filterStr = ${filterStr}`);
  
  // // let filteredResults = tableData.filter(dat => ${filterStr});

  // let filteredResults = tableData.filter(dat =>  (dat.datetime === dateInput ));
  // filteredResults = filteredResults.filter(dat => (dat.city === cityInput));
  
  // console.log("===================")

  // Loop through each UFO sighting record in the filteredResults, and append a row to the table for each sighting
  // If no sighting records found for a given date, no new row will be appended.
  filteredResults.forEach((ufoRecord) => {
    // print the '<tr></tr>' HTML tag.
    let row = tbody.append('tr');

    // fill in each cell with the value extracted from the ufoRecord. 
    // Please note: the table header order matches the order of the keys in data.js
    Object.entries(ufoRecord).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });

  });

} // end function runFilter()
