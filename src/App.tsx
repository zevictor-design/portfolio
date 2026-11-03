import {
  ArrowDown,
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
import { LangProvider, useLang } from "./i18n"
import type { Lang } from "./i18n"

type Theme = "dark" | "light"
type SectionId = "inicio" | "cases" | "sobre" | "contato"
type CategoryKey = "product" | "branding" | "creative"

const navItems: { href: `#${SectionId}`; key: SectionId }[] = [
  { href: "#inicio", key: "inicio" },
  { href: "#cases", key: "cases" },
  { href: "#sobre", key: "sobre" },
  { href: "#contato", key: "contato" },
]

const cases: {
  company: string
  categoryKey: CategoryKey
  logo: string
}[] = [
  {
    company: "Luiza Labs",
    categoryKey: "product",
    logo: "/assets/logos/logo-magalu.svg",
  },
  {
    company: "Loft",
    categoryKey: "product",
    logo: "/assets/logos/logo-loft.svg",
  },
  {
    company: "Incognia",
    categoryKey: "product",
    logo: "/assets/logos/logo-incognia.svg",
  },
  {
    company: "Ume",
    categoryKey: "product",
    logo: "/assets/logos/logo-ume.svg",
  },
  {
    company: "Vila Laut",
    categoryKey: "branding",
    logo: "/assets/logos/logo-laut.svg",
  },
  {
    company: "Teho",
    categoryKey: "branding",
    logo: "/assets/logos/logo-sabia.svg",
  },
]

const skillIcons = [
  { key: "research", icon: Search },
  { key: "ux", icon: MousePointerClick },
  { key: "ui", icon: LayoutTemplate },
  { key: "aiBuilding", icon: Sparkles },
  { key: "designSystems", icon: Palette },
  { key: "validation", icon: CheckSquare },
  { key: "dataViz", icon: BarChart3 },
  { key: "craft", icon: PencilRuler },
] as const

function Logo({
  showAvatar = false,
  muted = false,
}: {
  showAvatar?: boolean
  muted?: boolean
}) {
  const { t } = useLang()
  return (
    <a
      className={`logo${muted ? " logo-muted" : ""}`}
      href="#inicio"
      aria-label={t.aria.backToHome}
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
  const { t } = useLang()
  return (
    <nav className="nav-links" aria-label={t.aria.mainNav}>
      {navItems.map(({ href, key }) => {
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
            {t.nav[key]}
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
  const { t } = useLang()
  return (
    <button
      className="theme-button"
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? t.aria.activateLightTheme : t.aria.activateDarkTheme}
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

function LangButton() {
  const { lang, t, toggleLang } = useLang()
  return (
    <button
      className="lang-button"
      type="button"
      onClick={toggleLang}
      aria-label={lang === "pt" ? t.aria.switchToEnglish : t.aria.switchToPortuguese}
    >
      {lang.toUpperCase()}
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
  const { t } = useLang()

  return (
    <header className="header shell">
      <Logo showAvatar />
      <div className="desktop-nav">
        <NavLinks activeSection={activeSection} onContact={onContact} />
        <div className="lang-theme-group">
          <LangButton />
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
      <div className="mobile-actions">
        <div className="lang-theme-group">
          <LangButton />
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
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
  const { t } = useLang()

  return (
    <section className="hero" id="inicio">
      <div className="hero-fallback" aria-hidden="true" />
      <video
        key={theme}
        ref={(el) => {
          if (el) el.playbackRate = 1 / 1.5
        }}
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
        <img
          className="hero-diagram"
          src={theme === "dark" ? "/assets/diagram/diagrama-dark.svg" : "/assets/diagram/diagrama-light.svg"}
          alt=""
          aria-hidden="true"
        />
        <h1>{t.hero.title}</h1>
        <p className="hero-script">
          {t.hero.scriptPre}
          <em>{t.hero.scriptEm}</em>
          {t.hero.scriptPost}
        </p>
        <div className="eyebrow-pill">
          <span />
          {t.hero.eyebrow}
        </div>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#cases">
            {t.hero.ctaCases} <ArrowDown size={16} />
          </a>
          <button
            className="button button-secondary"
            type="button"
            onClick={onContact}
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  )
}

function CasesSection() {
  const { t } = useLang()
  const [filter, setFilter] = useState<"all" | CategoryKey>("all")
  const categories: ("all" | CategoryKey)[] = ["all", "product", "branding", "creative"]
  const visibleCases =
    filter === "all" ? cases : cases.filter((item) => item.categoryKey === filter)

  return (
    <section className="cases-section" id="cases">
      <div className="shell">
        <p className="kicker">{t.cases.kicker}</p>
        <h2>{t.cases.title}</h2>
        <div className="filters" aria-label={t.aria.filterCases}>
          {categories.map((category) => (
            <button
              type="button"
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
              key={category}
            >
              {t.cases.categories[category]}
            </button>
          ))}
        </div>
        <div className="cases-grid">
          {visibleCases.map((item) => (
            <article className="case-card" key={item.company}>
              <div className="case-image" aria-hidden="true">
                <ImageIcon size={32} strokeWidth={1.25} />
              </div>
              <div className="case-footer">
                <div className="case-meta">
                  <img src={item.logo} alt="" />
                  <div>
                    <h3>{item.company}</h3>
                    <p>{t.cases.titles[item.company]}</p>
                  </div>
                </div>
                <span className="case-tag" data-category={item.categoryKey}>
                  {t.cases.categories[item.categoryKey]}
                </span>
              </div>
            </article>
          ))}
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
  icon: (props: { size?: number; strokeWidth?: number }) => React.ReactNode
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
  const { t } = useLang()
  return (
    <section className="about-section" id="sobre">
      <div className="about-bg" aria-hidden="true" />
      <div className="about-overlay">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker about-kicker">{t.about.kicker}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-grid">
            <div className="about-left">
              <div className="bio-copy">
                {t.about.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <div className="about-columns">
                <div className="about-column">
                  <h3>{t.about.education}</h3>
                  <div className="education">
                    <span className="education-logo">
                      <img src="/assets/0e969.png" alt="" />
                    </span>
                    <span>
                      <strong>{t.about.school}</strong>
                      <small>{t.about.university}</small>
                    </span>
                  </div>
                </div>
                <div className="about-column">
                  <h3>{t.about.skillsTitle}</h3>
                  <ul className="skills-list">
                    {skillIcons.map(({ key, icon }) => (
                      <SkillItem key={key} {...t.skills[key]} icon={icon} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-portrait">
              <div className="portrait">
                <img src="/assets/dff8f.png" alt={t.about.portraitAlt} />
              </div>
            </div>
          </div>
          <div className="contact-row" id="contato">
            <strong>{t.about.contactRow}</strong>
            <button
              className="button contact-button"
              type="button"
              onClick={onContact}
            >
              {t.about.ctaContact} <ArrowUpRight size={16} />
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
          <div className="lang-theme-group">
            <LangButton />
            <ThemeButton theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang()
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
          aria-label={t.aria.closeForm}
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <p className="kicker">{t.contact.kicker}</p>
        <h2 id="contact-title">{t.contact.title}</h2>
        <p className="modal-intro">{t.contact.intro}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            const name = String(data.get("name"))
            const email = String(data.get("email"))
            const message = String(data.get("message"))
            const subject = encodeURIComponent(t.contact.mailSubject(name))
            const body = encodeURIComponent(t.contact.mailBody(name, email, message))
            window.location.href = `mailto:contato@victoraraujo.design?subject=${subject}&body=${body}`
            onClose()
          }}
        >
          <label>
            {t.contact.nameLabel}
            <input
              ref={nameRef}
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t.contact.namePlaceholder}
              required
            />
          </label>
          <label>
            {t.contact.emailLabel}
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </label>
          <label>
            {t.contact.messageLabel}
            <textarea
              name="message"
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
            />
          </label>
          <button className="button modal-submit" type="submit">
            {t.contact.submit} <Send size={16} />
          </button>
        </form>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}

function AppContent() {
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
