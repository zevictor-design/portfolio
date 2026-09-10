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
            icon: "layout-grid",
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
  "project-7": {
    title: "Incognia",
    description: "Case em construção — substitua por uma descrição real do projeto Incognia (contexto, objetivo e seu papel no time).",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/case-incognia-01.png"
    ],
    // Conteúdo baseado nas telas enviadas. Ajuste títulos e textos com o
    // discurso real do case (esses ainda descrevem só o que aparece nas imagens).
    content: [
      {
        type: "feature-grid",
        items: [
          {
            icon: "shield-check",
            image: "img/works/case-incognia-01.png",
            title: "Autenticação",
            text: "Tela de login do produto, com acesso por e-mail e senha."
          },
          {
            icon: "layers",
            image: "img/works/case-incognia-02.png",
            title: "Integração",
            text: "Arquitetura de integração em três camadas: SDK, API e Analytics."
          },
          {
            icon: "gauge",
            image: "img/works/case-incognia-03.png",
            title: "Classificação de risco",
            text: "Classificação em tempo real: baixo risco, alto risco ou não identificado."
          }
        ]
      },
      {
        type: "text",
        heading: "Título do bloco de texto",
        text: "Bloco de texto ocupando 100% da largura. Use para aprofundar em algum ponto do processo, contexto ou resultado do projeto."
      }
    ]
  },
  "project-8": {
    title: "Novo Projeto 1",
    description: "Case em construção — substitua por uma descrição real deste projeto.",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/02.png"
    ]
  },
  "project-9": {
    title: "Novo Projeto 2",
    description: "Case em construção — substitua por uma descrição real deste projeto.",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/03.png"
    ]
  },
  "project-10": {
    title: "Novo Projeto 3",
    description: "Case em construção — substitua por uma descrição real deste projeto.",
    tags: ["Product Design", "UX/UI Design"],
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

// Ícones da biblioteca Lucide (https://lucide.dev), inline, 24x24, stroke currentColor
const ICONS = {
  "layout-grid": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>',
  "shield-check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>'
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