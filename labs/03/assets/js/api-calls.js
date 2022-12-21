const BASE_URL = "http://localhost:3000";

// 'GET' method
async function getAllRecordsAPICall(urlRoute) {
  //   const response = await fetch(`${BASE_URL}/${urlRoute}`);
  //   const json = await response.json();

  return fetch(`${BASE_URL}/${urlRoute}`).then((response) => {
    return response.json();
  });
}

// 'POST' method
async function createProductAPICall(urlRoute, json) {
  console.log(json, JSON.stringify(json));

  await fetch(`${BASE_URL}/${urlRoute}`, {
    method: "post",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// 'PUT' method
async function updateProductAPICall(urlRoute, json) {
  await fetch(`${BASE_URL}/${urlRoute}`, {
    method: "put",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// 'DELETE' method
async function deleteProductAPICall(urlRoute) {
  console.log("delete url: ", `${BASE_URL}/${urlRoute}`);

  await fetch(`${BASE_URL}/${urlRoute}`, {
    method: "delete",
  });
}
