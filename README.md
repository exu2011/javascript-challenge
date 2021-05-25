# javascript-challenge
UFO spoting
 The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
 Level 1: Automatic Table and Date Search (Required)
Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

Level 2: Multiple Search Categories (Optional)
Complete all of Level 1 criteria.
Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

date/time
city
state
country
shape

I first worked on UFO-level-1 by creating a index.html inside the folder and created a static folder containing css folder for html style, js folder containing data.js and app.js, and images folder containing images for the website.
 
 in app.js file, 
 1. Get the data from data.js by defining a tabledata using data.js
 2. Create the HTML object references to the form elements (tbody, #form, #datetime, #filter-btn)
 3. Assign handler to the target objects in the HTML file
 4. Create event handlers for clicking the button or pressing the enter key; Create the function runFilter() to run for both events
 5. Prevent the page from refreshing
 6. Select the input element and get the raw HTML node via d2 function
7.  Get the value property of the input element
8. Print the value to the console
9. Zero out the table object before appending the new filtered results
  using tbody.html("");
10. Filter data by the entered data/time, and save them in filteredResults.
11. return a no data  if data is not  found
12. Loop through each UFO sighting record in the filteredResults, and append a row to the table for each sighting
13. If no sighting records found for a given date, no new row will be appended.
14. print the '<tr></tr>' HTML tag.
15. fill in each cell with the value extracted from the ufoRecord. the table header order matches the order of the keys in data.js
      
   
  
  



