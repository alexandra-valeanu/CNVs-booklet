// Dinamically check for the available column using the table id "cnvs-table" and create a filter for each column. The user can choose by which column they want to filter the table.


document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing DataTable filtering...");

    // Ensure jQuery and DataTables are loaded
    if (typeof jQuery === "undefined") {
        console.error("jQuery is not loaded. Make sure jQuery is included before this script.");
        return;
    }
    if (!$.fn.DataTable) {
        console.error("DataTables is not loaded. Ensure DataTables JS is included.");
        return;
    }

    var tableElement = document.getElementById("cnvs-table");
    
    // Ensure the table exists
    if (!tableElement) {
        console.error("Table with ID 'cnvs-table' not found.");
        return;
    }

    // Initialize DataTable
    var table = $("#cnvs-table").DataTable({
        "paging": true,
        "searching": false, // to avoid conflict with the default search bar
        "ordering": true
    });

    console.log("DataTable initialized successfully!");

    var filterContainer = document.getElementById("cnvs-table-filter");
    var headers = document.querySelectorAll("#cnvs-table thead th");

    if (!filterContainer) {
        console.error("Filter container with ID 'cnvs-table-filter' not found.");
        return;
    }

    // Clear existing filters to avoid duplicates
    filterContainer.innerHTML = "";

    // Create filter inputs for each column
    headers.forEach((header, index) => {
        console.log("Adding filter for column:", header.textContent);

        var label = document.createElement("label");
        label.textContent = "Filter by " + header.textContent + ": ";

        var input = document.createElement("input");
        input.type = "text";
        input.dataset.columnIndex = index;
        input.placeholder = "Enter " + header.textContent.toLowerCase();
        input.classList.add("column-filter");

        label.appendChild(input);
        filterContainer.appendChild(label);
    });

    // Apply filtering based on input
    document.querySelectorAll(".column-filter").forEach(input => {
        input.addEventListener("keyup", function () {
            var index = this.dataset.columnIndex;
            var searchTerm = this.value.toLowerCase();

            console.log("Filtering column", index, "with term:", searchTerm);
            table.column(index).search(searchTerm, false, false).draw();
        });

        // Reset filter when input is cleared so the table can properly display again
        input.addEventListener("input", function () {
            if (this.value === "") {
                console.log("Clearing filter for column", this.dataset.columnIndex);
                table.column(this.dataset.columnIndex).search("").draw();
            }
        });
    });

    console.log("Filtering setup complete.");
});