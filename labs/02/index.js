let teamMembersData = [];
let filteredTeamMembersData = [];
let numberOfRecords = 0;
let pageSize = 5;
let startIndex = 0;

const table = document.getElementById("data-table");
const tableBody = table.getElementsByTagName("tbody")[0];
const paginationDropdown = document.getElementById("pagination");
const searchTextBox = document.getElementById("search-text");
const numOfRecodsDiv = document.getElementById("num-of-records");

paginationDropdown.addEventListener("change", paginationDropdownValueChanged);

searchTextBox.addEventListener("keyup", searchTextBoxKeyPress);

getInitialData();

function showTableData() {
  numOfRecodsDiv.innerText = `${filteredTeamMembersData.length} members`;

  tableBody.innerHTML = "";

  let start = startIndex;
  let end = startIndex + pageSize;

  for (let index = start; index < end; index++) {
    const teamMember = filteredTeamMembersData[index];

    if (teamMember === undefined) {
      break;
    }

    const tableRowElement = document.createElement("tr");

    tableRowElement.innerHTML = `
        <td>${teamMember.id}</td>
        <td>${teamMember.first_name}</td>
        <td>${teamMember.last_name}</td>
        <td>${teamMember.join_date}</td>
        <td>${teamMember.email}</td>
    `;

    tableBody.append(tableRowElement);
  }
}

function populatePaginationDropdown() {
  const numberOfPage = Math.ceil(numberOfRecords / pageSize);

  if (startIndex > numberOfRecords - 1) {
    startIndex = 0;
  }

  const currentlySelectedvalue = paginationDropdown.value
    ? Number.parseInt(paginationDropdown.value)
    : 0;

  paginationDropdown.innerHTML = "";

  for (let index = 0; index < numberOfPage; index++) {
    const optionElement = document.createElement("option");

    optionElement.value = index + 1;
    optionElement.innerText = `Page ${index + 1}`;

    if (currentlySelectedvalue === index + 1) {
      optionElement.selected = true;
    }

    paginationDropdown.append(optionElement);
  }
}

function paginationDropdownValueChanged(event) {
  const pageNumber = event.target.value;

  startIndex = (pageNumber - 1) * pageSize;

  showTableData();
}

function searchTextBoxKeyPress(event) {
  const searchText = event.target.value.toUpperCase();

  filteredTeamMembersData = teamMembersData.filter((teamMember) => {
    const allText =
      `${teamMember.first_name} ${teamMember.last_name} ${teamMember.email} ${teamMember.join_date}`.toUpperCase();

    return allText.includes(searchText);
  });

  numberOfRecords = filteredTeamMembersData.length;

  populatePaginationDropdown();

  showTableData();
}

function getInitialData() {
  const URL = `https://run.mocky.io/v3/7f32e602-25ee-4705-acab-152e592c07ec`;

  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      teamMembersData = response;

      numberOfRecords = teamMembersData.length;

      filteredTeamMembersData = [...teamMembersData];

      showTableData();

      populatePaginationDropdown();
    })
    .catch((error) => {
      //TODO:
    });

  /** 
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      teamMembersData = JSON.parse(request.response);

      numberOfRecords = teamMembersData.length;

      filteredTeamMembersData = [...teamMembersData];

      showTableData();

      populatePaginationDropdown();
    }
  };

  request.open("GET", URL);

  request.send();
  */
}
