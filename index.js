const form = document.getElementById("myForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const dateInput = document.getElementById("dateInput");

  const newRow = `
    <tr>
      <td>${nameInput.value}</td>
      <td>${ageInput.value}</td>
      <td>${dateInput.value}</td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);

  nameInput.value = "";
  ageInput.value = "";
  dateInput.value = "";
});

