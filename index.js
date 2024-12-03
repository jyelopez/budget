let tableData = []
let finalValue = 0

function submitText() {
    let incomeWage = document.querySelector(".place1");
    let budget = document.querySelector(".place2");
    
    let incomeWageText = incomeWage.value;
    let budgetText = budget.value;

    incomeWage.value = "";
    budget.value = "";

    if (typeof finalValue === 'undefined') {
        finalValue = 0;
    }

    finalValue += Number(incomeWageText);
    document.getElementById("income-wage").innerText = finalValue;
    document.getElementById("budget").innerText = `Budget: ${budgetText}`;
}



function submitExpenses() {
    let expenseTitle = document.getElementsByClassName("place3");
    let expenseTitleText = expenseTitle[0].value;
    expenseTitle[0].value = "";

    let newItem = document.createElement("li");
    let expenseList = document.getElementById("list")
    newItem.textContent = expenseTitleText

    expenseList.appendChild(newItem);
    
    let list = []
    list.push(newItem.textContent)
    console.log(list)

    let newButton = document.createElement("button")
    newButton.textContent = "Delete";
    newButton.onclick = function() {
        expenseList.removeChild(newItem)
        dropdown.removeChild(option)
    };
    newItem.appendChild(newButton);



    const dropdown = document.getElementById('dynamicSelect');
    // Loop through each item in the list
    list.forEach(item => {
        // Create a new option element
        const option = document.createElement('option');
        // Set the value and text of the option
        option.value = item.toLowerCase();
        option.text = item;

        newButton.onclick = function() {
            dropdown.removeChild(option)
            expenseList.removeChild(newItem)
        };
        // Append the option to the dropdown
        dropdown.appendChild(option);
    });

}


function addRow() {
    let expenseInput = document.getElementsByClassName("expenseInput");
    // Assuming you want to get the value of the first element in each class list
    let expenseInputText = expenseInput[0].value;
    // Clear the text boxes
    expenseInput[0].value = "";
    let h3table = document.getElementById("tableh3")
    h3table.innerText = `Table: ${expenseInputText}`;


    var table = document.getElementById("table");
    if (!table) {
        console.error("Table element not found!");
        return;
    }

    // Check if insertRow method is available
    if (typeof table.insertRow !== 'function') {
        console.error("insertRow method not available!");
        return;
    }

    var row = table.insertRow(-1);  // Insert a new row at the end of the table
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var dropdown = document.getElementById("dynamicSelect");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;

    cell1.innerHTML = selectedOption;  // Sample data
    cell2.innerHTML = expenseInputText;   // Sample data
    incomewageel = document.getElementById("income-wage").textContent
    expenseMinus = Number(incomewageel) - Number(expenseInputText)
    cell3.innerHTML = expenseMinus
    let h3income = document.getElementById("income-wage")
    h3income.innerText = expenseMinus;
}