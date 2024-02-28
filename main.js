  var textos = [
    "Fornecer a melhor experiência de usuário a seus clientes ultilizando  hardware, software e serviços inovadores.",
    "Acreditamos que estamos na face da terra para fazer ótimos produtos e isso não vai mudar. Estamos nesse mundo para fazer os melhores produtos do mundo e deixar o mundo melhor do que o encontramos.",
    "Ouvir e relaciona de maneira amigável com o cliente pra tornar tudo amigável, auxiliando no aprendi-zado. E sempre prezando por respeito e trasparência."
  ];

  var titulos = ["Missão", "Visão", "Valores"];

  var indiceAtual = 0;

  function mudarTextoETitulo() {
    
    document.getElementById("textoMudavel").style.opacity = 0;
    document.getElementById("mudarTitulo").style.opacity = 0;

    setTimeout(function() {
      
      document.getElementById("textoMudavel").textContent = textos[indiceAtual];
      document.getElementById("mudarTitulo").textContent = titulos[indiceAtual];

      

      
      indiceAtual = (indiceAtual + 1) % textos.length;

      
      document.getElementById("textoMudavel").style.opacity = 1;
      document.getElementById("mudarTitulo").style.opacity = 1;
    }, 500); // 500ms = tempo da transição
  }  
mudarTextoETitulo();
setInterval(mudarTextoETitulo, 3000);  


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
      slidesPerView: 2,
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
