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
form.on("submit", runFilter);

// Create event handlers for clicking the button or pressing the enter key
// Create the function runFilter() to run for both events
function runFilter() {
  console.log('Debug: inside runFilter()...');

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputElement);
  console.log('Debug: inputValue = ' + inputValue);

  // Zero out the table object before appending the new filtered results
  tbody.html("");

  //Filter data by the entered data/time, and save them in filteredResults.
  let filteredResults = tableData.filter(dat => dat.datetime === inputValue);
  //return a no data  if data is not  found
  if (filteredResults === undefined){
      // let row = tbody.append('tr');
      // row.text("no data")
      tbody.innerHTML("no data");

      document.getElementById('tabledata').innerHTML = "No Data";
  }
  else {
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
    
  }
   
  // // Loop through each UFO sighting record in the filteredResults, and append a row to the table for each sighting
  // // If no sighting records found for a given date, no new row will be appended.
  // filteredResults.forEach((ufoRecord) => {
  //   // print the '<tr></tr>' HTML tag.
  //   let row = tbody.append('tr');

  //   // fill in each cell with the value extracted from the ufoRecord. 
  //   // Please note: the table header order matches the order of the keys in data.js
  //   Object.entries(ufoRecord).forEach(([key, value]) => {
  //     let cell = row.append("td");
  //     cell.text(value);
  //   });

  // });

} // end function runFilter()
