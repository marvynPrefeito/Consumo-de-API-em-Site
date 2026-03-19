const URL = "https://hp-api.onrender.com/api";

// PERSONAGENS
function carregarPersonagens() {
  fetch(URL + "/characters")
    .then(res => res.json())
    .then(dados => {
      const div = document.getElementById("personagens");
      div.innerHTML = "";

      dados.slice(0, 10).forEach(p => {
        div.innerHTML += `
          <div class="card">
            <img src="${p.image || 'https://via.placeholder.com/200'}">
            <h3>${p.name}</h3>
            <p>${p.house || "Sem casa"}</p>
          </div>
        `;
      });
    });
}

// ESTUDANTES
function carregarEstudantes() {
  fetch(URL + "/characters/students")
    .then(res => res.json())
    .then(dados => {
      const div = document.getElementById("estudantes");
      div.innerHTML = "";

      dados.slice(0, 10).forEach(p => {
        div.innerHTML += `
          <div class="card">
            <img src="${p.image || 'https://via.placeholder.com/200'}">
            <h3>${p.name}</h3>
            <p>${p.house}</p>
          </div>
        `;
      });
    });
}

// FEITIÇOS
function carregarFeiticos() {
  fetch(URL + "/spells")
    .then(res => res.json())
    .then(dados => {
      const div = document.getElementById("feiticos");
      div.innerHTML = "";

      dados.slice(0, 10).forEach(f => {
        div.innerHTML += `
          <div class="card">
            <h3>${f.name}</h3>
            <p>${f.description}</p>
          </div>
        `;
      });
    });
}