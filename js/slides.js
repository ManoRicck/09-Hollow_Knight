// Seleciona o elemento com a classe 'next'
let next = document.querySelector('.next');

// Seleciona o elemento com a classe 'prev'
let prev = document.querySelector('.prev');

// Seleciona o elemento com a classe 'slider'
let slider = document.querySelector('.slider');

// Adiciona um evento de click ao botão 'next'
next.addEventListener('click', function(){
  // Seleciona todos os elementos com a classe 'slides'
  let slides = document.querySelectorAll('.slides');
  
  // Move o primeiro slide para o final da lista
  slider.appendChild(slides[0]);
});

// Adiciona um evento de click ao botão 'prev'
prev.addEventListener('click', function(){
  // Seleciona todos os elementos com a classe 'lides'
  let slides = document.querySelectorAll('.slides');
  
  // Move o último slide para o início da lista
  slider.prepend(slides[slides.length - 1]);
});