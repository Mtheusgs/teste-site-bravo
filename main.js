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
      slidesPerView: 4,
    }, 
    1600: {
      slidesPerView: 4,
    },
  },
});



function mudarImagem() {
  var imagem1 = document.getElementById('imagem1');
  var imagem2 = document.getElementById('imagem2');
  var imagem3 = document.getElementById('imagem3'); 
  console.log('abacaxi');
  
  // Verifica qual é a imagem superior
  if (imagem1.style.opacity == '1') {
    // Se a imagem 1 é a superior, troca com a imagem 2
    imagem1.style.opacity = '0';
    imagem2.style.opacity = '1';
  } else if (imagem2.style.opacity == '1') {
    // Se a imagem 2 é a superior, troca com a imagem 3
    imagem2.style.opacity = '0';
    imagem3.style.opacity = '1';
  } else {
    // Se a imagem 3 é a superior, troca com a imagem 1
    imagem3.style.opacity = '0';
    imagem1.style.opacity = '1';
  }
};


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