"use strict";

// Dados dos projetos
const projectsData = {
  "project-1": {
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce desenvolvida com React e Node.js. O projeto inclui sistema de autenticação, carrinho de compras, pagamentos integrados e painel administrativo. Foi desenvolvido com foco em performance e experiência do usuário, utilizando as melhores práticas de desenvolvimento web moderno.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Responsive"],
    images: [
      "img/works/01.jpg",
      "img/works/02.jpg",
      "img/works/03.jpg",
      "img/works/04.jpg"
    ]
  },
  "project-2": {
    title: "Mobile App Design",
    description: "Design de aplicativo mobile para delivery de comida. O projeto abrange toda a jornada do usuário, desde o cadastro até a entrega, com interface intuitiva e moderna. Foi desenvolvido seguindo os princípios de UX/UI Design e testado com usuários reais para garantir a melhor experiência possível.",
    tags: ["Figma", "UX/UI", "Mobile First", "Prototyping", "User Testing"],
    images: [
      "img/works/02.jpg",
      "img/works/03.jpg",
      "img/works/05.jpg",
      "img/works/06.jpg"
    ]
  },
  "project-3": {
    title: "Corporate Website",
    description: "Website corporativo responsivo para uma empresa de tecnologia. O projeto inclui design moderno, otimização para SEO, integração com redes sociais e sistema de blog. O site foi desenvolvido com foco em conversão e engajamento dos visitantes.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO", "WordPress"],
    images: [
      "img/works/03.jpg",
      "img/works/04.jpg",
      "img/works/01.jpg",
      "img/works/02.jpg"
    ]
  },
  "project-4": {
    title: "Dashboard Analytics",
    description: "Dashboard de analytics desenvolvido para monitoramento de métricas em tempo real. O projeto inclui gráficos interativos, filtros avançados e exportação de relatórios. Foi desenvolvido com foco em performance e escalabilidade.",
    tags: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker"],
    images: [
      "img/works/04.jpg",
      "img/works/05.jpg",
      "img/works/06.jpg",
      "img/works/01.jpg"
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