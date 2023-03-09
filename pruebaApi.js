const url = "https://jsonplaceholder.typicode.com/users";
const respuesta = document.querySelector("#respuesta");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ddc4c0ae4bmsh10bb9812e7bcd94p168b64jsnb444a42b9929",
    "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
  },
};

fetch("https://forecast9.p.rapidapi.com/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

document.addEventListener("DOMContentLoaded", llamarAPI);

async function llamarAPI() {
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  mostrarHtml(data);
}

function mostrarHtml(datos) {
  datos.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.address.city}</td>
                        <td>${item.company.name}</td>`;
    respuesta.appendChild(row);
  });
}
