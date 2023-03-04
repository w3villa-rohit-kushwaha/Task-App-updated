// Get DOM elements
let taskSubmit = document.getElementById("submit");
let taskTable = document.getElementById("task-table");
let taskRow = document.getElementById("task-row");
let editingRow = null;

// Add event listener to task submission button
taskSubmit.addEventListener("click", (e) => {
  let taskName = document.getElementById("task-name");
  let taskDue = document.getElementById("due-date");
  let taskDiscription = document.getElementById("task-description");

  // Perform validation on user input
  if (taskName.value.trim() === "" || taskDue.value === "" || taskDiscription.value.trim() === "") {
    alert("Please fill all the fields");
  } else {
    e.preventDefault(); // Prevent form submission

    if (editingRow) {
      // Update existing row
      editingRow.cells[0].innerText = taskName.value;
      editingRow.cells[1].innerText = taskDue.value;
      editingRow.cells[2].innerText = taskDiscription.value;
      editingRow = null;
    } else {
      // Add new row to the table
      taskRow.innerHTML += `
          <tr>
          <td>${taskName.value}</td>
          <td>${taskDue.value}</td>
          <td>${taskDiscription.value}</td>
          <td><button onclick="myedit(event)">Edit</button></td>
          <td><i onclick="myremove(event)"class="fa-sharp fa-solid fa-circle-xmark fa-2x"></i></td>
          </tr>
           `;
    }

    // Clear the input fields
    taskName.value = "";
    taskDue.value = "";
    taskDiscription.value = "";
    
    // Reset the modal title and button text
    document.getElementById("edited_task").innerHTML="<h1> Task App</h1>";
    document.getElementById("submit").innerHTML="Add task";

    // Close the modal
    modalBg.style.display = 'none';
  }
});

// Edit task function
function myedit(event) {
  // Show the modal
  modalBg.style.display = 'flex';

  // Set the modal title and button text
  document.getElementById("edited_task").innerHTML="<h3> Edit Task</h3>";
  document.getElementById("submit").innerHTML="Edit task";

  event.preventDefault(); // Prevent button click from submitting the form

  // Store a reference to the row being edited
  editingRow = event.target.parentNode.parentNode;
  let cells = editingRow.getElementsByTagName("td");

  // Populate the input fields with the existing values
  let taskName = document.getElementById("task-name");
  let taskDue = document.getElementById("due-date");
  let taskDiscription = document.getElementById("task-description");
  taskName.value = cells[0].innerText;
  taskDue.value = cells[1].innerText;
  taskDiscription.value = cells[2].innerText;
}

// Delete task function
function myremove(event) {
  let row = event.target.parentNode.parentNode;
  row.parentNode.removeChild(row); // Remove the row from the table
}

// Get modal elements and add event listeners to show/hide the modal
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBg = document.getElementById('modal-background');

openModalBtn.addEventListener('click', () => {
  modalBg.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modalBg.style.display = 'none';
});
