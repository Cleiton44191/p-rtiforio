<button onclick="VerificarCondicao()">Enviar</button>

    function tocarMusica() {
      const condicao = document.getElementById('entradaUsuario').value === "Paradise";
        const audio = new Audio('coldplay-paradise.mp3');
        if (condicao) {
            audio.play();
        } else {
                    alert("Você não digitou a palavra mágica!");
                }
            }