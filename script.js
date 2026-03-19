const URL = "https://hp-api.onrender.com/api";

// Traduz casas
function traduzirCasa(casa) {
  switch(casa) {
    case "Gryffindor": return "Grifinória";
    case "Slytherin": return "Sonserina";
    case "Hufflepuff": return "Lufa-Lufa";
    case "Ravenclaw": return "Corvinal";
    default: return "Sem casa";
  }
}

// 🆕 Traduz feitiços
function traduzirFeitico(nome) {
  switch(nome) {
    case "Expelliarmus": return "Expelliarmus (Desarma)";
    case "Avada Kedavra": return "Avada Kedavra (Maldição da Morte)";
    case "Lumos": return "Lumos (Luz)";
    case "Nox": return "Nox (Apagar luz)";
    case "Expecto Patronum": return "Expecto Patronum (Invocar Patrono)";
    case "Wingardium Leviosa": return "Wingardium Leviosa (Levitação)";
    case "Accio": return "Accio (Convocar objeto)";
    case "Alohomora": return "Alohomora (Abrir portas)";
    case "Stupefy": return "Estupefaça (Atordoar)";
    case "Protego": return "Protego (Escudo)";
    default: return nome;
  }
}

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
            <p>Casa: ${traduzirCasa(p.house)}</p>
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
            <p>Casa: ${traduzirCasa(p.house)}</p>
          </div>
        `;
      });
    });
}

// FEITIÇOS (ATUALIZADO)
function carregarFeiticos() {
  fetch(URL + "/spells")
    .then(res => res.json())
    .then(dados => {
      const div = document.getElementById("feiticos");
      div.innerHTML = "";

      dados.slice(0, 10).forEach(f => {
        div.innerHTML += `
          <div class="card">
            <h3>${traduzirFeitico(f.name)}</h3>
            <p>${f.description}</p>
          </div>
        `;
      });
    });
}