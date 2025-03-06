document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the form values
    const name = document.getElementById('eName').value;
    const id = document.getElementById('eId').value;
    const salary = document.getElementById('salary').value;
    const role = document.getElementById('role').value;
    const dob = document.getElementById('dob').value;

    // Create a new row in the table
    const tableBody = document.getElementById('employeeTableBody');
    const newRow = tableBody.insertRow();
    
    // Insert new cells for the new row
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = id;
    newRow.insertCell(2).innerText = salary;
    newRow.insertCell(3).innerText = role;
    newRow.insertCell(4).innerText = dob;

    // Create and append Edit button
    const editCell = newRow.insertCell(5);
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = function() {
        // Code to edit the row will go here
        document.getElementById('eName').value = name;
        document.getElementById('eId').value = id;
        document.getElementById('salary').value = salary;
        document.getElementById('role').value = role;
        document.getElementById('dob').value = dob;
        
        // Remove the row for re-adding upon submission
        tableBody.deleteRow(newRow.rowIndex - 1);
    };
    editCell.appendChild(editButton);

    // Create and append Delete button
    const deleteCell = newRow.insertCell(6);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        tableBody.deleteRow(newRow.rowIndex - 1);
    };
    deleteCell.appendChild(deleteButton);

    // Clear the form fields
    document.getElementById('employeeForm').reset();
});
