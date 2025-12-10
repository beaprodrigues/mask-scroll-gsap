# Mask Scroll GSAP

![Uploading scroll mask.gif…]()


Este projeto é uma experiência visual web que utiliza **HTML**, **CSS** e **JavaScript** com a biblioteca **GSAP** para criar um efeito de máscara de texto e zoom controlado pelo scroll.

A aplicação exibe um vídeo de fundo que aparece "dentro" do texto "SÃO PAULO". Ao rolar a página, o texto aumenta de escala (zoom), criando uma transição imersiva onde o espectador "entra" no vídeo.

## Tecnologias Utilizadas

* **HTML5**: Estrutura semântica.
* **CSS3**: Estilização e efeitos visuais (`mix-blend-mode`).
* **JavaScript**: Lógica de interação.
* **[GSAP](https://greensock.com/gsap/)**: Biblioteca de animação de alta performance.
* **[ScrollTrigger](https://greensock.com/scrolltrigger/)**: Plugin do GSAP para animações baseadas na rolagem.

## Funcionalidades

* **Video Masking**: Utiliza a propriedade CSS `mix-blend-mode: screen` para fazer com que o vídeo apareça apenas através do texto preto sobre um fundo branco.
* **Scroll-Driven Animation**: O movimento de zoom não é baseado em tempo, mas sim na posição da barra de rolagem do usuário (propriedade `scrub` do ScrollTrigger).
* **Pinning**: A seção principal é "fixada" (`pin: true`) enquanto a animação ocorre, garantindo que o usuário veja todo o efeito antes de prosseguir.

## Estrutura do Projeto

```text

├── index.html
├── style.css        
├── script.js        
└── video/
│   └── sp.mp4    
