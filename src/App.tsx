import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckSquare,
  Image as ImageIcon,
  LayoutTemplate,
  Menu,
  MousePointerClick,
  Palette,
  PencilRuler,
  Search,
  Send,
  Sparkles,
  Sun,
  Moon,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Theme = "dark" | "light"
type SectionId = "inicio" | "cases" | "sobre" | "contato"

const navItems: { href: `#${SectionId}`; label: string }[] = [
  { href: "#inicio", label: "Início" },
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Quem sou eu" },
  { href: "#contato", label: "Entrar em contato" },
]

const cases = [
  {
    company: "Luiza Labs",
    title: "Criação do Magalu Ads",
    category: "Produto",
    logo: "/assets/4c94b.svg",
  },
  {
    company: "Loft",
    title: "Consolidação do Design System",
    category: "Produto",
    logo: "/assets/1c25f.svg",
  },
  {
    company: "Incognia",
    title: "Transformando complexidade em decisões mais claras",
    category: "Produto",
    logo: "/assets/111a2.svg",
  },
  {
    company: "008 Design",
    title: "Identidades que criam conexão",
    category: "Branding",
    logo: "/assets/afe17.png",
  },
]

const skills = [
  {
    name: "Research",
    description: "Discovery e técnicas de pesquisa.",
    icon: Search,
  },
  {
    name: "User Experience",
    description: "Jornada e Experiência do usuário.",
    icon: MousePointerClick,
  },
  {
    name: "User Interface",
    description: "Do wireframe ao pixel perfect.",
    icon: LayoutTemplate,
  },
  {
    name: "Product Building com IA",
    description: "Desenvolvimento com IA assistida.",
    icon: Sparkles,
  },
  {
    name: "Design Systems",
    description: "Criação, manutenção e reflexo no front-end.",
    icon: Palette,
  },
  {
    name: "Validação contínua",
    description: "Testes de usabilidade e métricas de uso.",
    icon: CheckSquare,
  },
  {
    name: "Data Visualization",
    description: "Visualização de dados com escala.",
    icon: BarChart3,
  },
  {
    name: "Craft",
    description: "Direção visual, branding e ilustração.",
    icon: PencilRuler,
  },
]

function Logo({
  showAvatar = false,
  muted = false,
}: {
  showAvatar?: boolean
  muted?: boolean
}) {
  return (
    <a
      className={`logo${muted ? " logo-muted" : ""}`}
      href="#inicio"
      aria-label="Victor Araújo — voltar ao início"
    >
      {showAvatar && (
        <span className="logo-avatar" aria-hidden="true">
          <img src="/assets/ee689.png" alt="" />
        </span>
      )}
      <span className="logo-copy">
        <strong>Victor Araújo</strong>
        <span>SENIOR PRODUCT DESIGNER</span>
      </span>
    </a>
  )
}

function NavLinks({
  activeSection,
  onContact,
  onNavigate,
  showActive = true,
}: {
  activeSection: SectionId
  onContact?: () => void
  onNavigate?: () => void
  showActive?: boolean
}) {
  return (
    <nav className="nav-links" aria-label="Navegação principal">
      {navItems.map(({ href, label }) => {
        const isActive = showActive && href === `#${activeSection}`

        return (
          <a
            className={isActive ? "active" : undefined}
            href={href}
            aria-current={isActive ? "location" : undefined}
            onClick={(event) => {
              if (href === "#contato" && onContact) {
                event.preventDefault()
                onContact()
              }
              onNavigate?.()
            }}
            key={href}
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}

function ThemeButton({
  theme,
  onToggle,
}: {
  theme: Theme
  onToggle: () => void
}) {
  return (
    <button
      className="theme-button"
      type="button"
      onClick={onToggle}
      aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

function Header({
  theme,
  activeSection,
  onContact,
  onToggleTheme,
}: {
  theme: Theme
  activeSection: SectionId
  onContact: () => void
  onToggleTheme: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header shell">
      <Logo showAvatar />
      <div className="desktop-nav">
        <NavLinks activeSection={activeSection} onContact={onContact} />
        <ThemeButton theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="mobile-actions">
        <ThemeButton theme={theme} onToggle={onToggleTheme} />
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <NavLinks
            activeSection={activeSection}
            onContact={onContact}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  )
}

function Hero({
  theme,
  activeSection,
  onContact,
  onToggleTheme,
}: {
  theme: Theme
  activeSection: SectionId
  onContact: () => void
  onToggleTheme: () => void
}) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-fallback" aria-hidden="true" />
      <video
        key={theme}
        className="hero-background"
        src={theme === "dark" ? "/videos/scene-dark.webm" : "/videos/scene-light.webm"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true" />
      <Header
        theme={theme}
        activeSection={activeSection}
        onContact={onContact}
        onToggleTheme={onToggleTheme}
      />
      <div className="hero-content shell">
        <div className="eyebrow-pill">
          <span />
          HÁ 12 ANOS ATUANDO COMO DESIGNER DE PRODUTO
        </div>
        <h1>Design Workflow</h1>
        <p className="hero-script">
          com o poder de <em>execução</em> da IA
        </p>
        <p className="hero-description">
          Formado em Ciência da Computação, criado no design de produto.
          <br />
          Desenhando produtos que simplificam problemas complexos.
        </p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#cases">
            Ver cases <ArrowDown size={16} />
          </a>
          <button
            className="button button-secondary"
            type="button"
            onClick={onContact}
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  )
}

function CasesSection() {
  const [filter, setFilter] = useState("All")
  const [carousel, setCarousel] = useState({
    progress: 0,
    canGoBack: false,
    canGoForward: false,
  })
  const trackRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const categories = ["All", "Produto", "Branding", "Creative"]
  const visibleCases =
    filter === "All" ? cases : cases.filter((item) => item.category === filter)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateCarousel = () => {
      const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0)
      setCarousel({
        progress: maxScroll
          ? (track.scrollLeft + track.clientWidth) / track.scrollWidth
          : 1,
        canGoBack: track.scrollLeft > 2,
        canGoForward: track.scrollLeft < maxScroll - 2,
      })
    }

    track.scrollTo({ left: 0 })
    updateCarousel()
    track.addEventListener("scroll", updateCarousel, { passive: true })
    const resizeObserver = new ResizeObserver(updateCarousel)
    resizeObserver.observe(track)

    return () => {
      track.removeEventListener("scroll", updateCarousel)
      resizeObserver.disconnect()
    }
  }, [filter])

  const moveCarousel = (direction: -1 | 1) => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>(".case-card")
    if (!track || !card) return
    const nextCard = card.nextElementSibling as HTMLElement | null
    const step = nextCard
      ? nextCard.offsetLeft - card.offsetLeft
      : card.offsetWidth

    track.scrollBy({
      left: direction * step,
      behavior: "smooth",
    })
  }

  return (
    <section className="cases-section" id="cases">
      <div className="shell">
        <p className="kicker">UM PEDAÇO DA MINHA HISTÓRIA</p>
        <h2>Cases que me dão orgulho</h2>
        <div className="filters" aria-label="Filtrar cases">
          {categories.map((category) => (
            <button
              type="button"
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`cases-carousel${carousel.canGoForward ? " has-next" : ""}`}
      >
        <div
          className="cases-track"
          ref={trackRef}
          onPointerDown={(event) => {
            if (event.pointerType === "touch") return
            const track = trackRef.current
            if (!track) return
            drag.current = {
              active: true,
              startX: event.clientX,
              scrollLeft: track.scrollLeft,
            }
            track.setPointerCapture(event.pointerId)
          }}
          onPointerMove={(event) => {
            if (event.pointerType === "touch") return
            const track = trackRef.current
            if (!track || !drag.current.active) return
            track.scrollLeft =
              drag.current.scrollLeft - (event.clientX - drag.current.startX)
          }}
          onPointerUp={() => {
            drag.current.active = false
          }}
          onPointerCancel={() => {
            drag.current.active = false
          }}
        >
          {visibleCases.map((item) => (
            <article className="case-card" key={`${item.company}-${item.title}`}>
              <div className="case-image" aria-hidden="true">
                <ImageIcon size={32} strokeWidth={1.25} />
              </div>
              <div className="case-footer">
                <div className="case-meta">
                  <img src={item.logo} alt="" />
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
                <span className="case-tag" data-category={item.category}>
                  {item.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-controls shell">
        <progress
          className="carousel-progress"
          max="100"
          value={Math.round(carousel.progress * 100)}
          aria-label="Progresso dos cases"
        />
        <div className="carousel-arrows">
          <button
            type="button"
            aria-label="Ver cases anteriores"
            disabled={!carousel.canGoBack}
            onClick={() => moveCarousel(-1)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Ver próximos cases"
            disabled={!carousel.canGoForward}
            onClick={() => moveCarousel(1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function SkillItem({
  name,
  description,
  icon: Icon,
}: {
  name: string
  description: string
  icon: (props: { size?: number strokeWidth?: number }) => React.ReactNode
}) {
  return (
    <li className="skill-item">
      <span className="skill-icon">
        <Icon size={16} strokeWidth={1.6} />
      </span>
      <span>
        <strong>{name}</strong>
        <small>{description}</small>
      </span>
    </li>
  )
}

function AboutSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="about-section" id="sobre">
      <div className="about-bg" aria-hidden="true" />
      <div className="about-overlay">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">
              FORMADO EM CIÊNCIA DA COMPUTAÇÃO,
              <br className="mobile-only-break" /> CRIADO NO DESIGN DE PRODUTO
            </p>
            <h2>Quem sou eu</h2>
          </div>
          <div className="about-grid">
            <div className="bio-column">
              <div className="bio-copy">
                <p>
                  Atuo na interseção entre design, produto, engenharia e negócio,
                  gosto de transformar problemas complexos em soluções simples e
                  escaláveis. Como Product Designer ou Builder, encaro o produto
                  de ponta a ponta: da descoberta do problema à prototipação,
                  validação e implementação assistida com IA.
                </p>
                <p>
                  Agentes de IA estão presentes em todo meu processo de Design,
                  ela é um meio para ter mais agilidade.
                </p>
                <p>
                  Ao longo de mais de 12 anos, trabalhei em produtos de AdTech,
                  prevenção a fraudes, marketplace, proptech e fintech, de
                  startups em estruturação a empresas com operações em escala.
                </p>
                <p>
                  Hoje, como Product Designer independente, conduzo projetos de
                  ponta a ponta e utilizo IA para desenvolver as primeiras
                  versões em front-end, facilitando a evolução junto à
                  engenharia. Também lidero projetos de branding e identidade
                  visual pela 008 Design, minha própria operação.
                </p>
              </div>
            </div>
            <div className="skills-column">
              <div>
                <h3>Formação</h3>
                <div className="education">
                  <span className="education-logo">
                    <img src="/assets/0e969.png" alt="" />
                  </span>
                  <span>
                    <strong>Centro de Informática</strong>
                    <small>Universidade Federal de Pernambuco</small>
                  </span>
                </div>
              </div>
              <div>
                <h3>Algumas skills</h3>
                <ul className="skills-list">
                  {skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="portrait">
              <img
                src="/assets/dff8f.png"
                alt="Victor Araújo sorrindo, de braços cruzados"
              />
            </div>
          </div>
          <div className="contact-row" id="contato">
            <strong>Curtiu? Vamos trocar ideia!</strong>
            <button
              className="button contact-button"
              type="button"
              onClick={onContact}
            >
              Entrar em contato <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({
  theme,
  activeSection,
  onToggleTheme,
}: {
  theme: Theme
  activeSection: SectionId
  onToggleTheme: () => void
}) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Logo showAvatar muted />
        <div className="desktop-nav">
          <NavLinks activeSection={activeSection} showActive={false} />
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </footer>
  )
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    nameRef.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Fechar formulário"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <p className="kicker">VAMOS CONVERSAR</p>
        <h2 id="contact-title">Conte um pouco sobre o seu projeto</h2>
        <p className="modal-intro">
          Preencha os campos abaixo. Sua mensagem será preparada para envio por
          e-mail.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            const name = String(data.get("name"))
            const email = String(data.get("email"))
            const message = String(data.get("message"))
            const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`)
            const body = encodeURIComponent(
              `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
            )
            window.location.href = `mailto:contato@victoraraujo.design?subject=${subject}&body=${body}`
            onClose()
          }}
        >
          <label>
            Nome
            <input
              ref={nameRef}
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Como você se chama?"
              required
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="voce@empresa.com"
              required
            />
          </label>
          <label>
            Mensagem
            <textarea
              name="message"
              placeholder="Conte sobre o projeto, desafio ou oportunidade."
              rows={5}
              required
            />
          </label>
          <button className="button modal-submit" type="submit">
            Preparar e-mail <Send size={16} />
          </button>
        </form>
      </section>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("inicio")
  const [contactOpen, setContactOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme")
    if (saved === "light" || saved === "dark") return saved
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    let scrollFrame = 0

    const updateActiveSection = () => {
      cancelAnimationFrame(scrollFrame)
      scrollFrame = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 1
        const current = navItems.reduce<SectionId>((active, { href }) => {
          const section = document.querySelector<HTMLElement>(href)
          const sectionTop = section
            ? section.getBoundingClientRect().top + window.scrollY
            : Number.POSITIVE_INFINITY
          return scrollPosition >= sectionTop
            ? (href.slice(1) as SectionId)
            : active
        }, "inicio")
        setActiveSection(current)
      })
    }

    if (!window.location.hash) {
      window.history.scrollRestoration = "manual"
      window.scrollTo({ top: 0 })
    }
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <main>
      <Hero
        theme={theme}
        activeSection={activeSection}
        onContact={() => setContactOpen(true)}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <CasesSection />
      <AboutSection onContact={() => setContactOpen(true)} />
      <Footer
        theme={theme}
        activeSection={activeSection}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </main>
  )
}
