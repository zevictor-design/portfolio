"use strict";

// Dados dos projetos
const projectsData = {
  "project-1": {
    title: "Incognia",
    descriptionTitle: "Transformando complexidade em decisões mais claras",
    description: "Como conduzi a evolução de experiências centrais e ajudei a consolidar um sistema de interface mais claro, consistente e escalável em uma plataforma B2B de prevenção a fraudes.",
    tags: ["ANTI-FRAUD PLATFORM", "B2B", "ANALYTICS", "DESIGN SYSTEMS", "PRODUCT DESIGN"],
    images: [
      "img/works/case-incognia-01.png"
    ],
    // Exemplo de bloco de conteúdo (feature-grid + texto full-width com imagem opcional).
    // Troque as imagens, ícones e textos pelo conteúdo real do case.
    content: [
      {
        type: "feature-grid",
        items: [
          {
            icon: "component",
            image: "img/works/case-incognia-01.png",
            title: "Consistência centrada no usuário",
            text: "Um novo design system e novos padrões que tornaram a experiência mais escalável e consistente."
          },
          {
            icon: "square-code",
            image: "img/works/case-incognia-02.png",
            title: "Métricas do SDK no produto",
            text: "Dados do SDK exibidos no produto nas fases mais críticas de integração."
          },
          {
            icon: "sparkles",
            image: "img/works/case-incognia-03.png",
            title: "Mais clareza na investigação",
            text: "Informações críticas ficaram mais fáceis de encontrar, entender e explicar."
          }
        ]
      },
      {
        type: "text",
        heading: "Título do bloco de texto",
        text: "Bloco de texto ocupando 100% da largura. Use para aprofundar em algum ponto do processo, contexto ou resultado do projeto depois de um bloco de destaques.",
        image: "img/works/case-incognia-02.png",
        imageAlt: "Detalhe do projeto Incognia"
      },
      {
        type: "text",
        heading: "Título do bloco de texto",
        text: "Bloco de texto ocupando 100% da largura. Use para aprofundar em algum ponto do processo, contexto ou resultado do projeto depois de um bloco de destaques.",
        image: "img/works/case-incognia-03.png",
        imageAlt: "Outra visão do projeto Incognia"
      }
    ]
  },
  "project-2": {
    title: "Só Joga",
    descriptionTitle: "Sobre o projeto",
    description: "Design de aplicativo mobile para competição com o Cartola FC. O projeto foi desenvolvido com o objetivo de criar uma nova forma de jogar Cartola FC entre amigos, com diversão e responsabilidade.",
    tags: ["UX/UI Design", "Mobile", "Prototyping", "User Testing"],
    images: [
      "img/works/02.png"
    ]
  },
  "project-3": {
    title: "Freeler",
    descriptionTitle: "Sobre o projeto",
    description: "Design de aplicativo mobile para freelancers. O projeto foi desenvolvido com o objetivo de criar uma nova forma de encontrar freelancers para projetos específicos. O projeot entrega um aplicativo mobile para o freelancer e uma área administrativa para o cliente gerenciar os eventos e os contratos.",
    tags: ["UX/UI Design", "Mobile/Desktop", "Prototyping", "User Testing"],
    images: [
      "img/works/03.png"
    ]
  },
  "project-4": {
    title: "Voi",
    descriptionTitle: "Sobre o projeto",
    description: "Visual identity creation for Voi, a scented candle brand. This project covered everything from the brand concept development and logo design to the visual identity guidelines.",
    tags: ["Branding", "Visual", "Logo Design", "Brand Guidelines"],
    images: [
      "img/works/04.png"
    ]
  },
  "project-7": {
    title: "Incognia",
    descriptionTitle: "Sobre o projeto",
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
    title: "Ume",
    descriptionTitle: "Sobre o projeto",
    description: "Conteúdo placeholder do case Ume. Substitua esta descrição pelo contexto, objetivo e resultados do projeto.",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/02.png"
    ]
  },
  "project-9": {
    title: "Loft",
    descriptionTitle: "Sobre o projeto",
    description: "Conteúdo placeholder do case Loft. Substitua esta descrição pelo contexto, objetivo e resultados do projeto.",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/03.png"
    ]
  },
  "project-10": {
    title: "Novo Projeto 3",
    descriptionTitle: "Sobre o projeto",
    description: "Case em construção — substitua por uma descrição real deste projeto.",
    tags: ["Product Design", "UX/UI Design"],
    images: [
      "img/works/04.png"
    ]
  },
  "project-5": {
    title: "Brand Identity",
    descriptionTitle: "Sobre o projeto",
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
    descriptionTitle: "Sobre o projeto",
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

        const iconName = item.icon || 'circle-help';

        card.innerHTML = `
          <div class="feature-card-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="feature-card-heading">
            <span class="feature-card-icon"><i data-lucide="${iconName}"></i></span>
            <span class="feature-card-title">${item.title}</span>
          </div>
          <p class="feature-card-text">${item.text}</p>
        `;

        grid.appendChild(card);
      });

      container.appendChild(grid);
      window.lucide.createIcons();
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

      if (block.image) {
        const imgWrap = document.createElement('div');
        imgWrap.className = 'content-text-image';

        const img = document.createElement('img');
        img.src = block.image;
        img.alt = block.imageAlt || block.heading || 'Imagem do projeto';
        img.loading = 'lazy';

        imgWrap.appendChild(img);
        wrap.appendChild(imgWrap);
      }

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

  // Atualizar título da descrição
  document.getElementById('project-description-title').textContent = project.descriptionTitle;
  
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