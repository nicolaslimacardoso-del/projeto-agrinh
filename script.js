```css
/* Reset */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html{
  scroll-behavior:smooth;
}

body{
  background:#f4f4f4;
  color:#333;
  transition:0.3s;
}

/* Header */
header{
  background:linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
  url("img/campo.jpg");
  background-size:cover;
  background-position:center;
  color:white;
  min-height:100vh;
}

/* Navegação */
nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 8%;
  background:rgba(0,0,0,0.4);
}

.menu{
  display:flex;
  gap:20px;
  list-style:none;
}

.menu a{
  color:white;
  text-decoration:none;
  font-weight:bold;
}

.menu a:hover{
  color:#7CFC00;
}

#darkMode{
  padding:8px 12px;
  border:none;
  border-radius:8px;
  cursor:pointer;
}

/* Hero */
.hero{
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  height:80vh;
}

.hero h2{
  font-size:3rem;
  margin-bottom:15px;
}

.hero p{
  font-size:1.2rem;
  margin-bottom:20px;
}

.hero button{
  padding:12px 25px;
  border:none;
  background:#2e8b57;
  color:white;
  border-radius:10px;
  cursor:pointer;
  font-size:1rem;
}

.hero button:hover{
  background:#228b22;
}

/* Seções */
section{
  padding:80px 10%;
}

section h2{
  text-align:center;
  margin-bottom:40px;
  color:#2e8b57;
}

/* Cards */
.cards{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  justify-content:center;
}

.card{
  background:white;
  padding:25px;
  border-radius:15px;
  width:300px;
  box-shadow:0 5px 15px rgba(0,0,0,.1);
  text-align:center;
}

.card h3{
  margin-bottom:10px;
}

/* Galeria */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.grid img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius:15px;
  transition:.3s;
}

.grid img:hover{
  transform:scale(1.05);
}

/* Dados */
.dados{
  text-align:center;
  background:#e8f5e9;
}

.contador h3{
  font-size:4rem;
  color:#2e8b57;
}

/* Contato */
form{
  max-width:600px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:15px;
}

input,
textarea{
  padding:12px;
  border:1px solid #ccc;
  border-radius:10px;
}

textarea{
  min-height:120px;
}

form button{
  padding:12px;
  border:none;
  background:#2e8b57;
  color:white;
  border-radius:10px;
  cursor:pointer;
}

form button:hover{
  background:#228b22;
}

/* Footer */
footer{
  background:#222;
  color:white;
  text-align:center;
  padding:20px;
}

/* Dark Mode */
.dark{
  background:#121212;
  color:white;
}

.dark .card{
  background:#1e1e1e;
  color:white;
}

.dark .dados{
  background:#1a1a1a;
}

.dark input,
.dark textarea{
  background:#222;
  color:white;
  border:1px solid #444;
}

/* Responsividade */
@media(max-width:768px){

  nav{
    flex-direction:column;
    gap:15px;
  }

  .menu{
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero h2{
    font-size:2rem;
  }

  .hero p{
    font-size:1rem;
  }
}
```
