// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");



// Converted to an arrow function
addition = (a, b) => a + b;

function buildTable(data) {
    // clear table data first
    tbody.html("");
    
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // create variable to find tbody html tag and append a table row
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        });
        // in a cell, append/add table data (<td>)
        let cell = row.append("td");
        // add the values
        cell.text(val);
    
    });

}