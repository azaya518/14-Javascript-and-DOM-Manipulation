// from data.js
var tableData = data;

// reference the html table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each sightings object
data.forEach(function(sightings) {
    console.log(sightings);
    // append one table row `tr` for each sightings object
    var row = tbody.append("tr");
    // `Object.entries` to console.log each sightings value
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value in the sightings object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });