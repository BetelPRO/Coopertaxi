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
  
  <div class="grupo">
  <strong>Adicionais:</strong>
  <label><input type="checkbox" name="copo${copoCount}-adicionais" value="Goma de amora"> Goma de amora</label>
  <label><input type="checkbox" name="copo${copoCount}-adicionais" value="Goma ácida"> Goma ácida</label>
  <label><input type="checkbox" name="copo${copoCount}-adicionais" value="Canudinho"> Canudinho</label>
  <label><input type="checkbox" name="copo${copoCount}-adicionais" value="Fini"> Fini</label>
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
  const pedidos = [];

  for (let i = 1; i <= totalCopos; i++) {
    const produto = document.querySelector(`input[name="copo${i}-produto"]`).value;
    const copoResumo = { copo: i, produto, acompanhamentos: {} };

    ["farinhas", "guloseimas", "frutas", "coberturas", "adicionais"].forEach(grupo => {
      const selecionados = Array.from(document.querySelectorAll(`input[name="copo${i}-${grupo}"]:checked`)).map(item => item.value);
      if (selecionados.length > 0) {
        copoResumo.acompanhamentos[grupo] = selecionados;
      }
    });

    pedidos.push(copoResumo);
  }

  // Exibe o resumo na tela
  const resumo = document.getElementById("resumo");
  resumo.innerHTML = "<h2>Resumo do Pedido:</h2>";

  pedidos.forEach(copo => {
    resumo.innerHTML += `<h3>Copo ${copo.copo}: ${copo.produto}</h3>`;
    Object.entries(copo.acompanhamentos).forEach(([grupo, itens]) => {
      resumo.innerHTML += `<div><strong>${grupo}:</strong><ul>${itens.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
    });
  });

  // Oculta os formulários
  document.getElementById("pedidoForm").style.display = "none";
  document.getElementById("acompanhamentosContainer").style.display = "none";
  document.getElementById("btnResumo").style.display = "none";
}


  document.getElementById("pedidoForm").style.display = "none";
  document.getElementById("acompanhamentosContainer").style.display = "none";
  document.getElementById("btnResumo").style.display = "none";
}
