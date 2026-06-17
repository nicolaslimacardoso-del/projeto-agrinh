// 🌙 DARK MODE
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // opcional: mudar ícone
  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});


// 📊 CONTADOR ANIMADO
const contador = document.getElementById("numero");

let valorAtual = 0;
const valorFinal = 1000; // você pode mudar aqui

function animarContador() {
  if (valorAtual < valorFinal) {
    valorAtual += 10;
    contador.textContent = valorAtual;

    setTimeout(animarContador, 20);
  } else {
    contador.textContent = valorFinal;
  }
}

animarContador();


// 📍 SCROLL PARA GALERIA
function scrollGaleria() {
  const galeria = document.getElementById("galeria");

  galeria.scrollIntoView({
    behavior: "smooth"
  });
}


// ✉️ FORMULÁRIO (simulação)
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // não recarrega a página

  alert("Mensagem enviada com sucesso! 🌱");

  form.reset();
});
