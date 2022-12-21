let productData = [];

const tbody = document.querySelector("tbody");
const addNewButton = document.getElementById("add-new-button");

addNewButton.addEventListener("click", addNew);

getAllProducts();

function addNew() {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `<tr>
          <td><input name="product-name" type="text" size="8"/></td>
          <td><input name="product-desc" type="text"  size="15"/></td>
          <td><input name="product-qty" type="text"  size="5"/></td>
          <td>
              <i class="fa-solid fa-plus" onclick="addProduct(event)"></i>
          </td>
          </tr>`;

  tbody.append(tableRow);
}

function addProduct(event) {
  const row = event.target.parentElement.parentElement;

  const nameInput = row.querySelector("input[name=product-name]");
  const descInput = row.querySelector("input[name=product-desc]");
  const qtyInput = row.querySelector("input[name=product-qty]");

  const postJson = {
    name: nameInput.value,
    desc: descInput.value,
    qty: qtyInput.value,
  };

  createProductAPICall("products", postJson);
}

function updateProduct(event) {
  const row = event.target.parentElement.parentElement;
  const prodid = event.target.dataset.prodid;

  const name = row.children[0].innerText;
  const desc = row.children[1].innerText;
  const qty = row.children[2].innerText;

  row.innerHTML = "";

  row.innerHTML = `<tr>
          <td><input name="product-name" type="text" size="8" value="${name}"/></td>
          <td><input name="product-desc" type="text"  size="15" value="${desc}"/></td>
          <td><input name="product-qty" type="text"  size="5" value="${qty}"/></td>
          <td>
              <i data-prodid="${prodid}" class="fa-solid fa-pen-to-square" onclick="updateRecord(event)"></i>
          </td>
          </tr>`;
}

function updateRecord(event) {
  const row = event.target.parentElement.parentElement;
  const prodid = event.target.dataset.prodid;

  console.log(prodid);

  const nameInput = row.querySelector("input[name=product-name]");
  const descInput = row.querySelector("input[name=product-desc]");
  const qtyInput = row.querySelector("input[name=product-qty]");

  const postJson = {
    name: nameInput.value,
    desc: descInput.value,
    qty: qtyInput.value,
  };

  updateProductAPICall(`products/${prodid}`, postJson);
}

async function deleteProduct(event) {
  const prodid = event.target.dataset.prodid;

  await deleteProductAPICall(`products/${prodid}`);

  populateTable();
}

async function getAllProducts() {
  productData = await getAllRecordsAPICall("products");

  populateTable();
}

function populateTable() {
  tbody.innerHTML = "";

  for (let index = 0; index < productData.length; index++) {
    const product = productData[index];

    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `<tr>
          <td>${product.name}</td>
          <td>${product.desc}</td>
          <td>${product.qty}</td>
          <td>
              <i data-prodid="${product.id}" class="fa-solid fa-pen-to-square" onclick="updateProduct(event)"></i>&nbsp;&nbsp;&nbsp;

              <i data-prodid="${product.id}" class="fa-solid fa-trash" onclick="deleteProduct(event)"></i>
          </td>
          </tr>`;

    tbody.append(tableRow);
  }
}
