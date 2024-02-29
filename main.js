function aumentarAltura(idDiv) {
  var divSelecionada = document.getElementById(idDiv);
  var divs = document.querySelectorAll('.olho_da_empresa');
  var titulo = document.getElementById('titulo');

  // Fecha todas as outras divs e verifica se pelo menos uma está aberta
  var algumaAberta = false;
  divs.forEach(function(div) {
      if (div !== divSelecionada) {
          div.style.height = '100px'; // Altura original
          if (div.style.height === '400px') {
              algumaAberta = true;
          }
      }
  });

  // Alterna a altura da div selecionada
  if (divSelecionada.style.height !== '400px') {
      divSelecionada.style.height = '400px'; // Abre a div selecionada
      algumaAberta = true;
  } else {
      divSelecionada.style.height = '100px'; // Fecha a div selecionada
  }

  // Oculta ou exibe o título conforme o estado das divs
  titulo.style.display = algumaAberta ? 'none' : 'block';
}

let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function(){
  nextImage();
}, 2000) 

function nextImage(){
  count++;
  if(count>4){
    count=1
  } 

  document.getElementById("slide"+count).checked = true;
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true, 
  centerSlide: true, // Correção: 'true' deve ser true
  fade: true, // Correção: 'true' deve ser true
  grabCursor: true, // Correção: 'true' deve ser true
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
    dynamicBullets: true, // Correção: 'DynamicBullets' deve ser dynamicBullets
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000, // Intervalo de tempo em milissegundos (5 segundos no exemplo)
    disableOnInteraction: false, // Permite que o autoplay continue mesmo se o usuário interagir com os slides
  },
  breakpoints: { // Correção: 'breakpoint' deve ser 'breakpoints'
    0: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    }, 
    1600: {
      slidesPerView: 4,
    },
  },
});



function mudarImagem() {
  var imagens = document.querySelectorAll('.slide-img');
  var imagemAtiva = document.querySelector('.slide-img.ativa');
  var proximaImagem;

  // Encontra a próxima imagem a ser exibida
  for (var i = 0; i < imagens.length; i++) {
    if (imagens[i] === imagemAtiva) {
      proximaImagem = imagens[(i + 1) % imagens.length];
      break;
    }
  }

  // Remove a classe ativa da imagem atual e adiciona à próxima imagem
  imagemAtiva.classList.remove('ativa');
  proximaImagem.classList.add('ativa');
}


function trocarTexto() { 
  console.log('ameixa');
  var blocos = document.querySelectorAll('.bloco');
  var textoAnterior = blocos[blocos.length - 1].textContent;
  
  for (var i = 0; i < blocos.length; i++) {
    var textoAtual = blocos[i].textContent;
    blocos[i].textContent = textoAnterior;
    textoAnterior = textoAtual;
  }
}; 


function executarAmbos(){
  mudarImagem();
  trocarTexto();
}
