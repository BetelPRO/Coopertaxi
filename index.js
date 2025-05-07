const produtos = [
  { id: "acai300", nome: "Açaí 300ml" },
  { id: "acai400", nome: "Açaí 400ml" },
  { id: "acai500", nome: "Açaí 500ml" },
  { id: "cupu300", nome: "Cupuaçu 300ml" },
  { id: "cupu400", nome: "Cupuaçu 400ml" },
  { id: "cupu500", nome: "Cupuaçu 500ml" },
];

function gerarFormularios() {
  const container = document.getElementById("acompanhamentosContainer");
  container.innerHTML = "";
  let copoCount = 0;

  produtos.forEach(prod => {
    const qtd = parseInt(document.getElementById(prod.id).value);
    for (let i = 1; i <= qtd; i++) {
      copoCount++;
      const div = document.createElement("div");
      div.className = "copo";
      div.innerHTML = `
  <h3>Copo ${copoCount}: ${prod.nome}</h3>

  <div class="grupo">
    <strong>Coberturas:</strong>
    <label><input type="checkbox" name="copo${copoCount}-coberturas" value="Leite Condensado"> Leite Condensado</label>
    <label><input type="checkbox" name="copo${copoCount}-coberturas" value="Chocolate"> Chocolate</label>
    <label><input type="checkbox" name="copo${copoCount}-coberturas" value="Morango"> Morango</label>
  </div>

  <div class="grupo">
    <strong>Farinhas:</strong>
    <label><input type="checkbox" name="copo${copoCount}-farinhas" value="Leite"> Leite</label>
    <label><input type="checkbox" name="copo${copoCount}-farinhas" value="Paçoca"> Paçoca</label>
    <label><input type="checkbox" name="copo${copoCount}-farinhas" value="Granola"> Granola</label>
  </div>

  <div class="grupo">
    <strong>Guloseimas:</strong>
    <label><input type="checkbox" name="copo${copoCount}-guloseimas" value="Confete"> Confete</label>
    <label><input type="checkbox" name="copo${copoCount}-guloseimas" value="Chocoball"> Chocoball</label>
    <label><input type="checkbox" name="copo${copoCount}-guloseimas" value="Jujuba"> Jujuba</label>
  </div>

  <div class="grupo">
    <strong>Frutas:</strong>
    <label><input type="checkbox" name="copo${copoCount}-frutas" value="Banana"> Banana</label>
    <label><input type="checkbox" name="copo${copoCount}-frutas" value="Morango"> Morango</label>
    <label><input type="checkbox" name="copo${copoCount}-frutas" value="Uva"> Uva</label>
  </div>

  <input type="hidden" name="copo${copoCount}-produto" value="${prod.nome}">
`;

      container.appendChild(div);
    }
  });

  if (copoCount === 0) {
    alert("Selecione pelo menos um copo.");
  } else {
    document.getElementById("btnResumo").style.display = "block";
  }
}

function mostrarResumo() {
  const totalCopos = document.querySelectorAll(".copo").length;
  const resumo = document.getElementById("resumo");
  resumo.innerHTML = "";

  for (let i = 1; i <= totalCopos; i++) {
    const produto = document.querySelector(`input[name="copo${i}-produto"]`).value;
    resumo.innerHTML += `<h3>Copo ${i}: ${produto}</h3>`;

    ["coberturas","farinhas", "guloseimas", "frutas"].forEach(grupo => {
      const selecionados = document.querySelectorAll(`input[name="copo${i}-${grupo}"]:checked`);
      if (selecionados.length > 0) {
        resumo.innerHTML += `<div style="font-size: 14px; font-weight: bold; margin-top: 2px;">${grupo.charAt(0).toUpperCase() + grupo.slice(1)}:</div><ul>`;
        selecionados.forEach(item => {
          resumo.innerHTML += `<li style="font-size: 20px;">${item.value}</li>`;
        });
        resumo.innerHTML += `</ul>`;
      }
    });
  }

  document.getElementById("pedidoForm").style.display = "none";
  document.getElementById("acompanhamentosContainer").style.display = "none";
  document.getElementById("btnResumo").style.display = "none";
}
