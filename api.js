/* const apiKey = "4c04d553-4285-4e3a-9a6b-8ef34df33163"; */

/* fetch(
  `https://freelancemjg.synchroteam.com/Api/v3?=4c04d553-4285-4e3a-9a6b-8ef34df33163`,
  {
    headers: {
      authorization:
        'Basic bXljb21wYW55OmZmOGU1YjYzLTBlNzQtNDEwMi1iYTkzLWM4MjlhY2ZiNThmMw==',
      'cache-control': 'no-cache'
    },
    mode: 'no-cors'
  }
)
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error('La respuesta de la API no fue exitosa.')
    }
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.error(error)
  }) */

const domain = "https://freelancemjg.synchroteam.com";
const api_key = "4c04d553-4285-4e3a-9a6b-8ef34df33163";

const auth_str = `${domain}:${api_key}`;
const auth_b64_str = btoa(auth_str);

const headers = {
  Authorization: `Basic ${auth_b64_str}`,
  "Content-Type": "application/json",
  "cache-control": "no-cache",
  Accept: "application/json",
};

fetch("https://ws.synchroteam.com/Api/v3/job/list?page=1&pageSize=25", {
  method: "GET",
  headers: headers,
  mode: "no-cors",
})
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa.");
    }
    return response.json();
  })
  /*  .then((response) => response.json())
  console.log(response) */
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
