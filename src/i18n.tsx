import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

export type Lang = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      inicio: "Início",
      cases: "Cases",
      sobre: "Quem sou eu",
      contato: "Entrar em contato",
    },
    aria: {
      backToHome: "Victor Araújo — voltar ao início",
      mainNav: "Navegação principal",
      activateLightTheme: "Ativar tema claro",
      activateDarkTheme: "Ativar tema escuro",
      switchToEnglish: "Mudar site para inglês",
      switchToPortuguese: "Mudar site para português",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      filterCases: "Filtrar cases",
      casesProgress: "Progresso dos cases",
      previousCases: "Ver cases anteriores",
      nextCases: "Ver próximos cases",
      closeForm: "Fechar formulário",
    },
    hero: {
      eyebrow: "HÁ 11 ANOS EM DESIGN DE PRODUTO",
      title: "Design centrado no usuário",
      scriptPre: "com o ",
      scriptEm: "poder",
      scriptPost: " da IA agêntica.",
      description: <>Desenhando produtos que simplificam problemas complexos.</>,
      ctaCases: "Ver cases",
      ctaContact: "Entrar em contato",
    },
    cases: {
      kicker: "UM PEDAÇO DA MINHA HISTÓRIA",
      title: "Cases que me dão orgulho",
      categories: {
        all: "All",
        product: "Design de Produto",
        branding: "Branding",
        creative: "Creative",
      },
      titles: {
        "Luiza Labs": "Criação do Magalu Ads",
        Loft: "Consolidação do Design System",
        Incognia: "Da complexidade à decisões mais claras",
        Ume: "Uma nova experiência, um novo App",
        "Vila Laut": "Onde a natureza descansa",
        Teho: "Neurociência e Cuidado Integrado",
      } as Record<string, string>,
    },
    skills: {
      research: { name: "Research", description: "Discovery e técnicas de pesquisa." },
      ux: { name: "User Experience", description: "Jornada e Experiência do usuário." },
      ui: { name: "User Interface", description: "Do wireframe ao pixel perfect." },
      aiBuilding: {
        name: "Product Building com IA",
        description: "Desenvolvimento com IA assistida.",
      },
      designSystems: {
        name: "Design Systems",
        description: "Criação, manutenção e reflexo no front-end.",
      },
      validation: {
        name: "Validação contínua",
        description: "Testes de usabilidade e métricas de uso.",
      },
      dataViz: {
        name: "Data Visualization",
        description: "Visualização de dados com escala.",
      },
      craft: { name: "Craft", description: "Direção visual, branding e ilustração." },
    },
    about: {
      kicker: (
        <>
          FORMADO EM CIÊNCIA DA COMPUTAÇÃO,
          <br className="mobile-only-break" /> CRIADO NO DESIGN DE PRODUTO
        </>
      ),
      title: "Quem sou eu",
      bio: [
        "Atuo na interseção entre design, produto, engenharia e negócio, gosto de transformar problemas complexos em soluções simples e escaláveis. Como Product Designer ou Builder, encaro o produto de ponta a ponta: da descoberta do problema à prototipação, validação e implementação assistida com IA.",
        "Agentes de IA estão presentes em todo meu processo de Design, ela é um meio para ter mais agilidade.",
        "Ao longo de mais de 12 anos, trabalhei em produtos de AdTech, prevenção a fraudes, marketplace, proptech e fintech, de startups em estruturação a empresas com operações em escala.",
        "Hoje, como Product Designer independente, conduzo projetos de ponta a ponta e utilizo IA para desenvolver as primeiras versões em front-end, facilitando a evolução junto à engenharia. Também lidero projetos de branding e identidade visual pela 008 Design, minha própria operação.",
      ],
      education: "Formação",
      school: "Centro de Informática",
      university: "Universidade Federal de Pernambuco",
      skillsTitle: "Algumas skills",
      portraitAlt: "Victor Araújo sorrindo, de braços cruzados",
      contactRow: "Curtiu? Vamos trocar ideia!",
      ctaContact: "Entrar em contato",
    },
    contact: {
      kicker: "VAMOS CONVERSAR",
      title: "Conte um pouco sobre o seu projeto",
      intro: "Preencha os campos abaixo. Sua mensagem será preparada para envio por e-mail.",
      nameLabel: "Nome",
      namePlaceholder: "Como você se chama?",
      emailLabel: "E-mail",
      emailPlaceholder: "voce@empresa.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Conte sobre o projeto, desafio ou oportunidade.",
      submit: "Preparar e-mail",
      mailSubject: (name: string) => `Contato pelo portfólio — ${name}`,
      mailBody: (name: string, email: string, message: string) =>
        `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
    },
  },
  en: {
    nav: {
      inicio: "Home",
      cases: "Cases",
      sobre: "About me",
      contato: "Get in touch",
    },
    aria: {
      backToHome: "Victor Araújo — back to home",
      mainNav: "Main navigation",
      activateLightTheme: "Activate light theme",
      activateDarkTheme: "Activate dark theme",
      switchToEnglish: "Switch site to English",
      switchToPortuguese: "Switch site to Portuguese",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      filterCases: "Filter cases",
      casesProgress: "Cases progress",
      previousCases: "View previous cases",
      nextCases: "View next cases",
      closeForm: "Close form",
    },
    hero: {
      eyebrow: "11 YEARS IN PRODUCT DESIGN",
      title: "User-centered design",
      scriptPre: "with the ",
      scriptEm: "power",
      scriptPost: " of agentic AI.",
      description: <>Designing products that simplify complex problems.</>,
      ctaCases: "See cases",
      ctaContact: "Get in touch",
    },
    cases: {
      kicker: "A PIECE OF MY STORY",
      title: "Cases I'm proud of",
      categories: {
        all: "All",
        product: "Product Design",
        branding: "Branding",
        creative: "Creative",
      },
      titles: {
        "Luiza Labs": "Building Magalu Ads",
        Loft: "Design System consolidation",
        Incognia: "Turning complexity into clearer decisions",
        Ume: "A new experience, a new app",
        "Vila Laut": "Where nature rests",
        Teho: "Neuroscience and integrated care",
      } as Record<string, string>,
    },
    skills: {
      research: { name: "Research", description: "Discovery and research techniques." },
      ux: { name: "User Experience", description: "User journey and experience." },
      ui: { name: "User Interface", description: "From wireframe to pixel perfect." },
      aiBuilding: {
        name: "AI-Assisted Product Building",
        description: "Development with AI assistance.",
      },
      designSystems: {
        name: "Design Systems",
        description: "Creation, maintenance and reflection in the front-end.",
      },
      validation: {
        name: "Continuous Validation",
        description: "Usability testing and usage metrics.",
      },
      dataViz: {
        name: "Data Visualization",
        description: "Visualizing data at scale.",
      },
      craft: { name: "Craft", description: "Visual direction, branding and illustration." },
    },
    about: {
      kicker: (
        <>
          COMPUTER SCIENCE GRADUATE,
          <br className="mobile-only-break" /> RAISED ON PRODUCT DESIGN
        </>
      ),
      title: "About me",
      bio: [
        "I work at the intersection of design, product, engineering and business, and I like turning complex problems into simple, scalable solutions. As a Product Designer or Builder, I own the product end to end: from problem discovery to prototyping, validation and AI-assisted implementation.",
        "AI agents are present throughout my design process, as a means to move faster.",
        "Over more than 12 years, I've worked on products in AdTech, fraud prevention, marketplace, proptech and fintech, from early-stage startups to companies operating at scale.",
        "Today, as an independent Product Designer, I run projects end to end and use AI to build the first front-end versions, making it easier to evolve alongside engineering. I also lead branding and visual identity projects through 008 Design, my own studio.",
      ],
      education: "Education",
      school: "Centro de Informática",
      university: "Federal University of Pernambuco",
      skillsTitle: "A few skills",
      portraitAlt: "Victor Araújo smiling, arms crossed",
      contactRow: "Liked it? Let's talk!",
      ctaContact: "Get in touch",
    },
    contact: {
      kicker: "LET'S TALK",
      title: "Tell me a bit about your project",
      intro: "Fill in the fields below. Your message will be prepared to send by email.",
      nameLabel: "Name",
      namePlaceholder: "What's your name?",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the project, challenge or opportunity.",
      submit: "Prepare email",
      mailSubject: (name: string) => `Portfolio contact — ${name}`,
      mailBody: (name: string, email: string, message: string) =>
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
    },
  },
}

type LangContextValue = {
  lang: Lang
  t: (typeof translations)["pt"]
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang")
    if (saved === "en" || saved === "pt") return saved

    const browserLanguages =
      typeof navigator !== "undefined"
        ? navigator.languages?.length
          ? navigator.languages
          : [navigator.language]
        : []
    const prefersPortuguese = browserLanguages.some((code) =>
      code?.toLowerCase().startsWith("pt"),
    )
    return prefersPortuguese ? "pt" : "en"
  })

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
    localStorage.setItem("portfolio-lang", lang)
  }, [lang])

  const value: LangContextValue = {
    lang,
    t: translations[lang],
    toggleLang: () => setLang((current) => (current === "pt" ? "en" : "pt")),
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error("useLang must be used within a LangProvider")
  return context
}
