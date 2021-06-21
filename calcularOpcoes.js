function calcularOpcoes() {
  var score = parseInt(localStorage['score']);
  var tEmprestimo = 0;
  var tParcelas = 0;
  var juros = 0;

  var nivelCartao = 0;
  var bonus = 0;

  if (score >= 900) {
    tEmprestimo = 100000;
    tParcelas = 120;
    juros = 0.8;

    nivelCartao = 4;

  } else if (score >= 800) {
    tEmprestimo = 40000;
    tParcelas = 60;
    juros = 1.5;

    nivelCartao = 3;

  } else if (score >= 700) {
    tEmprestimo = 25000;
    tParcelas = 36;
    juros = 2;

    nivelCartao = 3;

  } else if (score >= 600) {
    tEmprestimo = 18000;
    tParcelas = 24;
    juros = 4;

    nivelCartao = 2;

  } else if (score >= 500) {
    tEmprestimo = 13000;
    tParcelas = 15;
    juros = 2;

    nivelCartao = 2;

  } else if (score >= 400) {
    tEmprestimo = 10000;
    tParcelas = 12;
    juros = 8;

    nivelCartao = 2;

  } else if (score >= 300) {
    tEmprestimo = 6000;
    tParcelas = 8;
    juros = 10;

    nivelCartao = 1;

  } else if (score >= 200) {
    tEmprestimo = 4000;
    tParcelas = 4;
    juros = 13;

    nivelCartao = 1;

  } else if (score >= 100) {
    tEmprestimo = 3000;
    tParcelas = 3;
    juros = 16;

    nivelCartao = 1;
  } else {
    tEmprestimo = 2000;
    tParcelas = 2;
    juros = 20;

    nivelCartao = 1;
  }

  montaTextoEmprestimo(tEmprestimo, tParcelas, juros);
  montaTextoCartao(nivelCartao);
}

function montaTextoEmprestimo(tEmprestimo, tParcelas, juros) {
  const divEmprestimo = document.getElementById("opcoesEmprestimo");
  var textHtml = "";

  textHtml = "<div class=\"col-md-12 my-5\">" +
    "<h1 class=\"display-6\">Empréstimo de " + (tEmprestimo / 1000) + " mil reais com juros de " + juros + "% a.m. - Banco 1</h1>" +
    "<p class=\"lead\">Viajar, estudar, realizar um sonho: para cada conquista, temos uma solução sob medida. Conheça nossas opções de empréstimos e financiamentos pessoais.</p>" +
    "<p class=\"lead contratar\" onclick=\"" +
    "localStorage.setItem('tEmprestimo', " + tEmprestimo + ");" +
    "localStorage.setItem('juros', " + juros + ");" +
    "localStorage.setItem('tParcelas', " + tParcelas + ");" +
    "window.location.href = 'calcular.html'" +
    "\">Simular</p>" +
    "</div>";
  const tEmprestimo2 = tEmprestimo / 2;
  const tParcelas2 = tParcelas / 2;
  const juros2 = parseFloat((juros * 0.7).toFixed(1));

  textHtml += "<div class=\"col-md-12 my-5\">" +
    "<h1 class=\"display-6\">Empréstimo de " + (tEmprestimo2 / 1000) + " mil reais com juros de " + juros2 + "% a.m. - Banco 2</h1>" +
    "<p class=\"lead\">O financiamento pela cooperativa direto nas lojas conveniadas é uma alternativa de crédito simples e de fácil acesso. São centenas de lojistas conveniados oferecendo ótimas oportunidades de negócios para você.</p>" +
    "<p class=\"lead contratar\" onclick=\"" +
    "localStorage.setItem('tEmprestimo', " + tEmprestimo2 + ");" +
    "localStorage.setItem('juros', " + juros2 + ");" +
    "localStorage.setItem('tParcelas', " + tParcelas2 + ");" +
    "window.location.href = 'calcular.html'" +
    "\">Simular</p>" +
    "</div>";
  divEmprestimo.innerHTML = textHtml;
}

const beneficioNivel4 = "Proteção de Compra, Proteção de Preço, Serviço de Concierge, Atendimento Especializado, Boingo Wi-Fi, Diferenciais em hotéis e resorts, Seguro para Veículo de Locadora, Priority Pass, Priceless Cities, Carta Schengen, LoungeKey e muito mais.";
const beneficioNivel3 = "Serviço de Concierge, Atendimento Especializado, Seguro para Veículo de Locadora, Proteção de Preço, Proteção de Compra, Programa de fidelidade, Substituição Emergencial de Cartão, dentre outros diferenciais.";
const beneficioNivel2 = "Seguro para Veículo de Locadora, Serviço de Saque Emergencial, Seguro de Garantia Estendida Original, Proteção de Compra, Proteção de Preço, Substituição Emergencial de Cartão e muito mais.";
const beneficioNivel1 = "Serviço de Saque Emergencial";

const tituloNivel4 = "Cartão Black sem limites e anuidade de R$ 1.000,00";
const tituloNivel3 = "Cartão Platinum com limite de R$ 10.000,00 e anuidade de R$ 700,00";
const tituloNivel2 = "Cartão Gold com limite de R$ 5.000,00 e anuidade de R$ 300,00";
const tituloNivel1 = "Cartão tradicional com limite de R$ 2.000,00 e anuidade de R$ 200,00";

function montaTextoCartao(nivelCartao) {
  const divCartao = document.getElementById("opcoesCartao");
  var textHtml = "";

  if (nivelCartao >= 4) {
    textHtml += "<div class=\"col-md-12 my-5\">" +
      "<h1 class=\"display-6\">" + tituloNivel4 + "</h1>" +
      "<p class=\"lead\">Benefícios: " + beneficioNivel4 + "</p>" +
      "<p class=\"lead contratar\" onclick=\"localStorage.setItem('nivelCartao', 4);window.location.href='confirmarCartao.html';\">Contratar</p>" +
      "</div>";
  }

  if (nivelCartao >= 3) {
    textHtml += "<div class=\"col-md-12 my-5\">" +
      "<h1 class=\"display-6\">" + tituloNivel3 + "</h1>" +
      "<p class=\"lead\">Benefícios: " + beneficioNivel3 + "</p>" +
      "<p class=\"lead contratar\" onclick=\"localStorage.setItem('nivelCartao', 3);window.location.href='confirmarCartao.html';\">Contratar</p>" +
      "</div>";
  }

  if (nivelCartao >= 2) {
    textHtml += "<div class=\"col-md-12 my-5\">" +
      "<h1 class=\"display-6\">" + tituloNivel2 + "</h1>" +
      "<p class=\"lead\">Benefícios: " + beneficioNivel2 + "</p>" +
      "<p class=\"lead contratar\" onclick=\"localStorage.setItem('nivelCartao', 2);window.location.href='confirmarCartao.html';\">Contratar</p>" +
      "</div>";
  }

  if (nivelCartao >= 1) {
    textHtml += "<div class=\"col-md-12 my-5\">" +
      "<h1 class=\"display-6\">" + tituloNivel1 + "</h1>" +
      "<p class=\"lead\">Benefícios: " + beneficioNivel1 + "</p>" +
      "<p class=\"lead contratar\" onclick=\"localStorage.setItem('nivelCartao', 1);window.location.href='confirmarCartao.html';\">Contratar</p>" +
      "</div>";
  }

  divCartao.innerHTML = textHtml;
}

function iniciarConfirmarCartao() {
  const nivel = parseInt(localStorage['nivelCartao']);
  var limite = '';
  var tipo = '';
  var anuidade = '';
  switch (nivel) {
    case 1:
      limite = '2.000,00';
      tipo = 'Clássico';
      anuidade = '200,00';
      break;

    case 2:
      limite = '5.000,00';
      tipo = 'Gold';
      anuidade = '300,00';
      break;

    case 3:
      limite = '10.000,00';
      tipo = 'Platinum';
      anuidade = '700,00';
      break;

    case 4:
      limite = 'Sem Limites';
      tipo = 'Black';
      anuidade = '1.000,00';
      break;
    default:
      break;
  }

  document.getElementById("limiteCartao").innerText = limite;
  document.getElementById("tipoCartao").innerText = tipo;
  document.getElementById("anuidade").innerText = anuidade;
}

function iniciarConfirmarEmprestimo() {


  document.getElementById("valorEmprestimo").innerText = localStorage["valorEmprestimo"];
  document.getElementById("quantidadeParcelas").innerText = localStorage["quantidadeParcelas"];
  document.getElementById("valorParcelas").innerText = localStorage["valorParcelas"];
  document.getElementById("juros").innerText = localStorage["juros"];
  document.getElementById("valorTotal").innerText = localStorage["valorTotal"];
}
