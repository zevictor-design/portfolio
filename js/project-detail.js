"use strict";

// Dados dos projetos
const projectsData = {
  "project-1": {
    title: "Magalu Ads",
    description: "Um produto de Ads para a Magalu, com o objetivo de criar uma nova linha de receita para a companhia. O projeto abrange toda a jornada do usuário, desde a criação da campanha, com interface intuitiva e moderna, até a análise de resultados com gráficos simples e intuitivos. Foi desenvolvido seguindo os princípios de UX/UI Design e testado com usuários reais para garantir a melhor experiência possível.",
    tags: ["UX Research", "Usability Testing", "User Interviews", "Prototyping", "Data Visualization", "Illustration"],
    images: [
      "img/works/01.png",
      "img/works/magalu-02.png",
      "img/works/magalu-03.png",
      "img/works/magalu-04.png",
      "img/works/magalu-05.png",
      "img/works/magalu-06.png",
      "img/works/magalu-07.png",
      "img/works/magalu-08.png"

    ]
  },
  "project-2": {
    title: "Só Joga",
    description: "Design de aplicativo mobile para competição com o Cartola FC. O projeto foi desenvolvido com o objetivo de criar uma nova forma de jogar Cartola FC entre amigos, com diversão e responsabilidade.",
    tags: ["UX/UI Design", "Mobile", "Prototyping", "User Testing"],
    images: [
      "img/works/02.png",
      "img/works/sojoga-02.png",
      "img/works/sojoga-03.png",
      "img/works/sojoga-04.png"
    ]
  },
  "project-3": {
    title: "Freeler",
    description: "Design de aplicativo mobile para freelancers. O projeto foi desenvolvido com o objetivo de criar uma nova forma de encontrar freelancers para projetos específicos. O projeot entrega um aplicativo mobile para o freelancer e uma área administrativa para o cliente gerenciar os eventos e os contratos.",
    tags: ["UX/UI Design", "Mobile/Desktop", "Prototyping", "User Testing"],
    images: [
      "img/works/03.png",
      "img/works/freeler-02.png",
      "img/works/freeler-03.png",
      "img/works/freeler-04.png",
      "img/works/freeler-05.png",
      "img/works/freeler-06.png"
    ]
  },
  "project-4": {
    title: "Voi",
    description: "Visual identity creation for Voi, a scented candle brand. This project covered everything from the brand concept development and logo design to the visual identity guidelines.",
    tags: ["Branding", "Viusual", "Logo Design", "Brand Guidelines"],
    images: [
      "img/works/04.png",
      "img/works/voi-02.png",
      "img/works/voi-03.png",
      "img/works/voi-04.png",
      "img/works/voi-05.png",
      "img/works/voi-06.png"
    ]
  },
  "project-5": {
    title: "Brand Identity",
    description: "Identidade visual completa para uma startup de tecnologia. O projeto inclui logo, paleta de cores, tipografia, aplicações em diferentes suportes e guidelines de marca. Foi desenvolvido com foco em memorabilidade e diferenciação no mercado.",
    tags: ["Branding", "Logo Design", "Typography", "Color Theory", "Print Design"],
    images: [
      "img/works/05.jpg",
      "img/works/06.jpg",
      "img/works/01.jpg",
      "img/works/03.jpg"
    ]
  },
  "project-6": {
    title: "Social Media Campaign",
    description: "Campanha completa de redes sociais para lançamento de produto. O projeto inclui estratégia de conteúdo, design de posts, planejamento editorial e métricas de engajamento. A campanha resultou em aumento significativo de seguidores e conversões.",
    tags: ["Social Media", "Content Strategy", "Graphic Design", "Analytics", "Marketing"],
    images: [
      "img/works/06.jpg",
      "img/works/01.jpg",
      "img/works/02.jpg",
      "img/works/04.jpg"
    ]
  }
};

// Função para obter parâmetros da URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Função para carregar dados do projeto
function loadProjectData() {
  const projectId = getUrlParameter('id');
  
  if (!projectId || !projectsData[projectId]) {
    // Projeto não encontrado, redirecionar para home
    window.location.href = 'index.html#works';
    return;
  }

  const project = projectsData[projectId];
  
  // Atualizar título da página
  document.title = `${project.title} - Victor Araújo`;
  
  // Atualizar título do projeto
  document.getElementById('project-title').textContent = project.title;
  
  // Atualizar descrição
  document.getElementById('project-description').textContent = project.description;
  
  // Criar tags
  const tagsContainer = document.getElementById('project-tags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'project-tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  
  // Criar galeria
  const galleryContainer = document.getElementById('project-gallery');
  galleryContainer.innerHTML = '';
  project.images.forEach((image, index) => {
    const imageElement = document.createElement('div');
    imageElement.className = 'gallery-item';
    imageElement.setAttribute('data-aos', 'fade-up');
    imageElement.setAttribute('data-aos-duration', '1000');
    imageElement.setAttribute('data-aos-delay', (index * 100).toString());
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${project.title} - Imagem ${index + 1}`;
    img.loading = 'lazy';
    
    imageElement.appendChild(img);
    galleryContainer.appendChild(imageElement);
  });
}

// Função para inicializar AOS
function initAOS() {
  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out'
  });
}

// Função para gerenciar menu mobile
function initMobileMenu() {
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };
}

// Função para gerenciar header sticky
function initStickyHeader() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  loadProjectData();
  initAOS();
  initMobileMenu();
  initStickyHeader();
}); 