"use strict";

// Dados dos projetos
const projectsData = {
  "project-1": {
    title: "Magalu Ads",
    description: "Um produto de Ads para a Magalu, com o objetivo de criar uma nova linha de receita para a companhia. O projeto abrange toda a jornada do usuário, desde a criação da campanha, com interface intuitiva e moderna, até a análise de resultados com gráficos simples e intuitivos. Foi desenvolvido seguindo os princípios de UX/UI Design e testado com usuários reais para garantir a melhor experiência possível.",
    tags: ["UX Research", "Usability Testing", "User Interviews", "Prototyping", "Data Visualization", "Illustration"],
    images: [
      "img/works/01.png"
    ],
    // Exemplo de bloco de conteúdo (feature-grid + texto full-width).
    // Troque as imagens, ícones e textos pelo conteúdo real do case.
    content: [
      {
        type: "feature-grid",
        items: [
          {
            icon: "layout",
            image: "img/works/01.png",
            title: "Título do destaque 1",
            text: "Texto breve explicando esse destaque do case. Substitua por conteúdo real do projeto."
          },
          {
            icon: "target",
            image: "img/works/02.png",
            title: "Título do destaque 2",
            text: "Texto breve explicando esse destaque do case. Substitua por conteúdo real do projeto."
          },
          {
            icon: "sparkles",
            image: "img/works/03.png",
            title: "Título do destaque 3",
            text: "Texto breve explicando esse destaque do case. Substitua por conteúdo real do projeto."
          }
        ]
      },
      {
        type: "text",
        heading: "Título do bloco de texto",
        text: "Bloco de texto ocupando 100% da largura. Use para aprofundar em algum ponto do processo, contexto ou resultado do projeto depois de um bloco de destaques."
      }
    ]
  },
  "project-2": {
    title: "Só Joga",
    description: "Design de aplicativo mobile para competição com o Cartola FC. O projeto foi desenvolvido com o objetivo de criar uma nova forma de jogar Cartola FC entre amigos, com diversão e responsabilidade.",
    tags: ["UX/UI Design", "Mobile", "Prototyping", "User Testing"],
    images: [
      "img/works/02.png"
    ]
  },
  "project-3": {
    title: "Freeler",
    description: "Design de aplicativo mobile para freelancers. O projeto foi desenvolvido com o objetivo de criar uma nova forma de encontrar freelancers para projetos específicos. O projeot entrega um aplicativo mobile para o freelancer e uma área administrativa para o cliente gerenciar os eventos e os contratos.",
    tags: ["UX/UI Design", "Mobile/Desktop", "Prototyping", "User Testing"],
    images: [
      "img/works/03.png"
    ]
  },
  "project-4": {
    title: "Voi",
    description: "Visual identity creation for Voi, a scented candle brand. This project covered everything from the brand concept development and logo design to the visual identity guidelines.",
    tags: ["Branding", "Visual", "Logo Design", "Brand Guidelines"],
    images: [
      "img/works/04.png"
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

// Ícones inline usados nos feature-grid (linha, 24x24, stroke currentColor)
const ICONS = {
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>'
};

// Função para renderizar os blocos de conteúdo do case (feature-grid / texto full-width)
function renderProjectContent(project) {
  const container = document.getElementById('project-content');
  container.innerHTML = '';

  if (!project.content || !project.content.length) return;

  project.content.forEach((block) => {
    if (block.type === 'feature-grid') {
      const grid = document.createElement('div');
      grid.className = 'feature-grid';

      block.items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-duration', '1000');
        card.setAttribute('data-aos-delay', (i * 150).toString());

        const iconSvg = ICONS[item.icon] || ICONS.layout;

        card.innerHTML = `
          <div class="feature-card-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="feature-card-heading">
            <span class="feature-card-icon">${iconSvg}</span>
            <span class="feature-card-title">${item.title}</span>
          </div>
          <p class="feature-card-text">${item.text}</p>
        `;

        grid.appendChild(card);
      });

      container.appendChild(grid);
    } else if (block.type === 'text') {
      const wrap = document.createElement('div');
      wrap.className = 'content-text-block';
      wrap.setAttribute('data-aos', 'fade-up');
      wrap.setAttribute('data-aos-duration', '1000');

      if (block.heading) {
        const h = document.createElement('h2');
        h.className = 'content-heading';
        h.textContent = block.heading;
        wrap.appendChild(h);
      }

      const p = document.createElement('p');
      p.textContent = block.text;
      wrap.appendChild(p);

      container.appendChild(wrap);
    }
  });
}

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

  // Renderizar blocos de conteúdo adicionais (feature-grid / texto full-width)
  renderProjectContent(project);
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