function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById('relogio').innerText = `${horas}:${minutos}:${segundos}`;

    const mensagem = document.getElementById('mensagem');
    const imagem = document.getElementById('paisagem');

    if (horas >= 6 && horas < 12) {
      mensagem.innerText = "Bom Dia!";
      imagem.src = "fotomanha.png"; 
      imagem.alt = "Imagem de um amanhecer";
      document.body.style.backgroundColor = "#ffebb9";
    } else if (horas >= 12 && horas < 18) {
      mensagem.innerText = "Boa Tarde!";
      imagem.src = "fototarde.png"; 
      imagem.alt = "Imagem de uma tarde ensolarada";
      document.body.style.backgroundColor = "#ffd700";
    } else {
      mensagem.innerText = "Boa Noite!";
      imagem.src = "fotonoite.png"; 
      imagem.alt = "Imagem de uma noite estrelada";
      document.body.style.backgroundColor = "#2f4f4f";
    }
  }

  setInterval(atualizarRelogio, 1000);
  atualizarRelogio(); // Chamada inicial para exibir imediatamente