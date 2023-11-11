const persons = [];
const salaries = [];

function addSalary() {
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");

    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value);

    if (name === "" || isNaN(salary)) {
        alert("Name and Salary must not be empty, and Salary must be numeric.");
        return;
    }

    persons.push(name);
    salaries.push(salary);
    nameInput.value = "";
    salaryInput.value = "";
}

function displayResults() {
    if (salaries.length === 0) {
        alert("No data to calculate.");
        return;
    }

    const average = salaries.reduce((acc, current) => acc + current, 0) / salaries.length;
    const highest = Math.max(...salaries);

    document.getElementById("averageSalary").textContent = average.toFixed(2);
    document.getElementById("highestSalary").textContent = highest.toFixed(2);
}

function displaySalary() {
    const resultsTable = document.getElementById("results-table");

    if (persons.length === 0) {
        alert("No data to display.");
        return;
    }

    resultsTable.style.display = "table";
    resultsTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;

    for (let i = 0; i < persons.length; i++) {
        resultsTable.innerHTML += `
            <tr>
                <td>${persons[i]}</td>
                <td>$${salaries[i].toFixed(2)}</td>
            </tr>
        `;
    }
}

function updateEmployeeSelect() {
    const select = document.getElementById("employee");
    select.innerHTML = '<option value="option1" selected>Select</option>';

    for (let i = 0; i < persons.length; i++) {
        const option = document.createElement("option");
        option.value = salaries[i];
        option.textContent = persons[i];
        select.appendChild(option);
    }
}

function selectEmployee() {
    const select = document.getElementById("employee");
    const selectedOption = select.options[select.selectedIndex];
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");

    nameInput.value = selectedOption.text;
    salaryInput.value = selectedOption.value;
}

// Attach the functions to the buttons
document.getElementById("addButton").addEventListener("click", addSalary);
document.getElementById("displayResultButton").addEventListener("click", displayResults);
document.getElementById("displaySalaryButton").addEventListener("click", displaySalary);

// Attach the selectEmployee function to the select input change event
document.getElementById("employee").addEventListener("change", selectEmployee);
