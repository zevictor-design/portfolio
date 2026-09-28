"use strict";

// Dados dos projetos
const projectsData = {
  "project-1": {
    title: "Transformando complexidade em decisões mais claras",
    description: "Como conduzi a evolução de experiências centrais e ajudei a consolidar um sistema de interface mais claro, consistente e escalável na plataforma B2B de prevenção a fraudes da Incognia.",
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
        heading: "Contexto",
        text: [
          "A Incognia utiliza device intelligence para ajudar grandes empresas a detectar comportamentos suspeitos e evitar transações fraudulentas nas suas aplicações. Seu produto de analytics conecta os clientes à API de riscos da empresa através de um SDK, então os analistas podem acompanhar avaliações, investigar as informações que determinaram cada classificação e monitorar o desempenho da sua aplicação.",
          "O produto cresceu ao longo dos anos e precisava transformar uma grande quantidade de dados técnicos e sensíveis em informações que pudessem ser compreendidas e utilizadas mais facilmente em uma investigação."
        ]
      },
      {
        type: "feature-plus-text",
        heading: "Desafio",
        items: [
          {
            icon: "search",
            title: "Informações dispersas",
            text: "Dados importantes em avaliações de risco eram difíceis de localizar e interpretar."
          },
          {
            icon: "wrench",
            title: "Fragmentação técnica",
            text: "Dados coletados pelo SDK estavam espalhados em ferramentas externas."
          },
          {
            icon: "triangle-alert",
            title: "Inconsistência visual",
            text: "Componentes semelhantes possuíam padrões diferentes, aumentando fricção."
          }
        ]
      },
      {
        type: "text",
        text: [
          "Não era possível apenas esconder a complexidade. Os analistas precisavam de profundidade e transparência para compreender por que uma avaliação havia recebido determinado nível de risco. O desafio era tornar o produto mais fácil de entender sem comprometer a riqueza das informações, a explicabilidade ou a performance necessária para operar em grande escala."
        ]
      },
      {
        type: "text",
        heading: "Solução",
        heading2: "Avaliações mais fáceis de investigar",
        text: [
          "Liderei a iniciativa de redesign na principal página de avaliação de risco, com uma nova arquitetura da informação e dados mais fáceis de localizar e interpretar. Desenvolvemos novas formas de explicar os riscos: evidências mais específicas complementavam justificativas genéricas, enquanto um resumo gerado com IA traduzia avaliações complexas para uma linguagem clara e compreensível.",
        ]
      },
      {
        type: "text",
        heading2: "Métricas do SDK no produto",
        text: [
          "Liderei a criação de uma nova área de analytics, desde o discovery até o lançamento. Antes, clientes dependiam de painéis externos para acessar dados do SDK, criando um gap crítico nas fases iniciais de integração.",
          "Colaborei com Customer Success, Engenharia e Dados para definir quais métricas seriam úteis, compreender sua natureza técnica e encontrar as visualizações mais adequadas.",
          "Após benchmarks, protótipos e testes de usabilidade, optamos por criar uma área dedicada e lançá-la progressivamente, transformando uma lacuna em um recurso estratégico para provas de valor."
        ]
      },
      {
        type: "text",
        heading2: "Consistência em toda a plataforma",
        text: [
          "Ao perceber que certos problemas se repetiam, iniciei uma revisão mais ampla da interface e da biblioteca de componentes com apoio de outra designer e em parceria próxima com o time de front-end.",
          "Revisei componentes, estabeleci novos padrões e planejei a aplicação das mudanças em diferentes releases, conectando melhoria visual a uma necessidade estrutural: tornar novas experiências consistentes e escaláveis."
        ]
      },
       {
        type: "text",
        heading: "Processo",
        heading2: "Pesquisa e Entendimento",
        text: [
          "Entrevistas com analistas, observação de workflows e análise de dados de uso para compreender os pontos de fricção reais e as necessidades de profundidade técnica."
        ]
      },
      {
        type: "text",
        heading2: "Arquitetura e Prototipagem",
        text: [
          "Redesenho de fluxos, arquitetura da informação e criação de protótipos interativos para testar diferentes abordagens de apresentação de dados complexos."
        ]
      },
      {
        type: "text",
        heading2: "Testes e Iteração",
        text: [
          "Testes de usabilidade com analistas reais, validação de padrões e ajustes baseados em feedback. IA foi integrada como camada de crítica e apoio investigativo."
        ]
      },
      {
        type: "text",
        heading2: "Implementação e Design System",
        text: [
          "Trabalho próximo com Engenharia para garantir escalabilidade, performance e aplicação consistente dos padrões em toda a plataforma."
        ]
      },
      {
        type: "text",
        heading2: "Rigor técnico apoiado por IA",
        text: [
          "Em cada fase, utilizei IA como camada de análise e crítica: Discovery (compreensão acelerada de problemas técnicos complexos), Design (avaliação de alternativas de solução e revisão de fluxos; Validação (estruturação de análises baseadas nas 10 heurísticas de Nielsen)"
        ]
      },
      {
        type: "feature-plus-text",
        heading: "Resultados",
        items: [
          {
            icon: "arrow-up",
            title: "Percepção do produto",
            text: "Clientes e equipes internas passaram a perceber o produto como mais claro, fácil de ler e consistente."
          },
          {
            icon: "arrow-up",
            title: "Qualidade das investigações",
            text: "Informações que antes geravam dúvidas se tornaram mais fáceis de encontrar e avaliações complexas passaram a contar com explicações mais diretas."
          },
          {
            icon: "arrow-up",
            title: "Suporte a vendas",
            text: "A nova área de métricas tornou-se um recurso importante para a equipe responsável pelas provas de valor, apoiando conversas com potenciais clientes."
          },
          {
            icon: "arrow-up",
            title: "Escalabilidade técnica",
            text: "A evolução da biblioteca de componentes reduziu variações, ampliou a reutilização e criou uma base sólida para novas funcionalidades."
          },
          {
            icon: "arrow-up",
            title: "Alinhamento Design-Engenharia",
            text: "O trabalho aproximou Design e Engenharia, permitindo que decisões de experiência considerassem desde o início os requisitos de escala e performance."
          },
          {
            icon: "arrow-up",
            title: "Transformação estrutural",
            text: "Mais do que simplificar interfaces, o projeto mostrou como estruturar a complexidade para transformá-la em entendimento."
          }
        
        ]
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
    title: "Voi",
    descriptionTitle: "Sobre o projeto",
    description: "Visual identity creation for Voi, a scented candle brand. This project covered everything from the brand concept development and logo design to the visual identity guidelines.",
    tags: ["Branding", "Visual", "Logo Design", "Brand Guidelines"],
    images: [
      "img/works/04.png"
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
    } else if (block.type === 'feature-plus-text') {
      const wrapper = document.createElement('div');
      wrapper.className = 'feature-plus-text';

      const copy = document.createElement('div');
      copy.className = 'feature-plus-text-copy';

      if (block.heading) {
        const h = document.createElement('h2');
        h.className = 'content-heading';
        h.textContent = block.heading;
        copy.appendChild(h);
      }

      const paragraphs = Array.isArray(block.text) ? block.text : [block.text];
      paragraphs.forEach((paragraphText) => {
        if (!paragraphText) return;
        const p = document.createElement('p');
        p.textContent = paragraphText;
        copy.appendChild(p);
      });

      const grid = document.createElement('div');
      grid.className = 'feature-grid feature-grid--icon-cards';

      block.items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'feature-card feature-card--icon-only';

        const iconName = item.icon || 'circle-help';

        card.innerHTML = `
          <div class="feature-card-visual">
            <span class="feature-card-icon feature-card-icon--big"><i data-lucide="${iconName}"></i></span>
          </div>
          <div class="feature-card-heading">
            <span class="feature-card-title">${item.title}</span>
          </div>
          <p class="feature-card-text">${item.text}</p>
        `;

        grid.appendChild(card);
      });

      wrapper.appendChild(copy);
      wrapper.appendChild(grid);
      container.appendChild(wrapper);
      window.lucide.createIcons();
    } else if (block.type === 'text') {
      const wrap = document.createElement('div');
      wrap.className = 'content-text-block';

      if (block.heading) {
        const h = document.createElement('h2');
        h.className = 'content-heading';
        h.textContent = block.heading;
        wrap.appendChild(h);
      }

      if (block.heading2) {
        const h = document.createElement('h2');
        h.className = 'content-heading content-heading-secondary';
        h.textContent = block.heading2;
        wrap.appendChild(h);
      }

      const paragraphs = Array.isArray(block.text) ? block.text : [block.text];
      paragraphs.forEach((paragraphText) => {
        if (!paragraphText) return;
        const p = document.createElement('p');
        p.textContent = paragraphText;
        wrap.appendChild(p);
      });

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
    window.location.href = 'project-detail.html?id=project-1';
    return;
  }

  if (projectId !== 'project-1') {
    window.location.href = 'project-detail.html?id=project-1';
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

// Função para gerenciar menu mobile
function initMobileMenu() {
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  if (!nav || !navBtn || !navBtnImg) return;

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
  const header = document.querySelector("#header");

  if (!header) return;

  window.addEventListener("scroll", function () {
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
  initMobileMenu();
  initStickyHeader();
}); 