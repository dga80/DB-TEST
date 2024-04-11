const url = "https://localhost:3306/database/table";
const headers = {
  "Authorization": "Basic " + btoa("usuario:contraseña")
};

const fetchData = async () => {
  const response = await fetch(url, {
    headers: headers
  });
  const data = await response.json();

  const tbody = document.getElementById("tabla").getElementsByTagName("tbody")[0];

  data.forEach(row => {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdEmail = document.createElement("td");

    tdNombre.textContent = row.nombre;
    tdApellido.textContent = row.apellido;
    tdEmail.textContent = row.email;

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEmail);

    tbody.appendChild(tr);
  });
};

fetchData();
