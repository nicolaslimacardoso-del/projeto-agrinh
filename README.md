# projeto-agrinh
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agrinho 2026</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <nav>
    <h1>Agrinho 2026</h1>

    <ul class="menu">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#galeria">Galeria</a></li>
      <li><a href="#dados">Dados</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>

    <button id="darkMode">🌙</button>
  </nav>

  <section class="hero">
    <div>
      <h2>Conexão Campo e Cidade</h2>
      <p>
        A tecnologia transforma a agricultura e aproxima pessoas.
      </p>

      <button onclick="scrollGaleria()">
        Explorar
      </button>
    </div>
  </section>
</header>

<main>

<section id="sobre" class="sobre">
  <h2>Sobre o Projeto</h2>

  <div class="cards">

    <div class="card">
      <h3>🌱 Sustentabilidade</h3>
      <p>
        A agricultura sustentável protege o meio ambiente.
      </p>
    </div>

    <div class="card">
      <h3>🚜 Tecnologia</h3>
      <p>
        Máquinas inteligentes aumentam a produtividade.
      </p>
    </div>

    <div class="card">
      <h3>🏙 Cidade</h3>
      <p>
        O campo alimenta milhões de pessoas diariamente.
      </p>
    </div>

  </div>
</section>

<section id="galeria" class="galeria">

  <h2>Galeria</h2>

  <div class="grid">

    <img src="img/campo.jpg" alt="Plantação no campo">

    <img src="img/cidade.jpg" alt="Cidade moderna">

    <img src="img/agricultura.jpg" alt="Tecnologia agrícola">

  </div>

</section>

<section id="dados" class="dados">

  <h2>Impacto da Agricultura</h2>

  <div class="contador">
    <h3 id="numero">0</h3>
    <p>Produções agrícolas monitoradas</p>
  </div>

</section>

<section id="contato" class="contato">

  <h2>Contato</h2>

  <form>

    <input type="text" placeholder="Seu nome">

    <input type="email" placeholder="Seu email">

    <textarea placeholder="Mensagem"></textarea>

    <button type="submit">
      Enviar
    </button>

  </form>

</section>

</main>

<footer>
  <p>Projeto Agrinho 2026 • Desenvolvimento Front-End</p>
</footer>

<script src="script.js"></script>

</body>
</html>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial, sans-serif;
  background:#f4f4f4;
  color:#333;
  transition:0.3s;
}

header{
  height:100vh;
  background:linear-gradient(rgba(0,0,0,.5),
  rgba(0,0,0,.5)),
  url('img/campo.jpg');
  background-size:cover;
  background-position:center;
}

nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
  background:#2e7d32;
}

nav h1{
  color:white;
}

.menu{
  display:flex;
  gap:20px;
  list-style:none;
}

.menu a{
  color:white;
  text-decoration:none;
}

.hero{
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;
  text-align:center;
  color:white;
}

.hero h2{
  font-size:3rem;
}

.hero button{
  margin-top:20px;
  padding:12px 24px;
  border:none;
  background:#43a047;
  color:white;
  cursor:pointer;
  border-radius:10px;
}

section{
  padding:60px 20px;
}

.cards{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
}

.card{
  flex:1;
  min-width:250px;
  background:white;
  padding:20px;
  border-radius:15px;
  box-shadow:0 4px 10px rgba(0,0,0,.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-10px);
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.grid img{
  width:100%;
  border-radius:15px;
}

.dados{
  text-align:center;
  background:#c8e6c9;
}

.contador h3{
  font-size:4rem;
  color:#1b5e20;
}

form{
  display:flex;
  flex-direction:column;
  gap:15px;
  max-width:500px;
  margin:auto;
}

input, textarea{
  padding:15px;
  border-radius:10px;
  border:1px solid #ccc;
}

form button{
  padding:15px;
  border:none;
  background:#2e7d32;
  color:white;
  border-radius:10px;
  cursor:pointer;
}

footer{
  text-align:center;
  padding:20px;
  background:#1b5e20;
  color:white;
}

/* DARK MODE */

.dark{
  background:#121212;
  color:white;
}

.dark .card{
  background:#1e1e1e;
}

/* RESPONSIVIDADE */

@media(max-width:768px){

  .menu{
    display:none;
  }

  .hero h2{
    font-size:2rem;
  }

}
// Scroll suave

function scrollGaleria(){
  document
  .getElementById("galeria")
  .scrollIntoView({
    behavior:"smooth"
  });
}

// Dark mode

const botao = document.getElementById("darkMode");

botao.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

});

// Contador animado

let numero = document.getElementById("numero");

let contador = 0;

let intervalo = setInterval(()=>{

  contador++;

  numero.innerHTML = contador;

  if(contador >= 500){

    clearInterval(intervalo);

  }

}, 10)
