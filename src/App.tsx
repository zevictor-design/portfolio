import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CheckSquare,
  Image as ImageIcon,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  PencilRuler,
  Search,
  Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { createPortal } from "react-dom"
import { cases } from "./caseContent"
import type { CategoryKey } from "./caseContent"
import CasePage from "./CasePage"
import { LangProvider, useLang } from "./i18n"
import { ContactModal, Footer, Header, navItems } from "./layout"
import type { SectionId } from "./layout"
import { publicAsset } from "./publicAsset"
import { ThemeProvider, useTheme } from "./theme"

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

function Hero({
  activeSection,
  onContact,
}: {
  activeSection: SectionId
  onContact: () => void
}) {
  const { t, lang } = useLang()
  const { theme } = useTheme()

  return (
    <section className="hero" id="inicio">
      <div className="hero-fallback" aria-hidden="true" />
      <video
        key={theme}
        ref={(el) => {
          if (!el) return
          el.playbackRate = 1 / 1.5
          el.muted = true
          const tryPlay = () => {
            const p = el.play()
            if (p) p.catch(() => {})
          }
          tryPlay()
        }}
        className="hero-background"
        src={publicAsset(theme === "dark" ? "/videos/scene-dark.webm" : "/videos/scene-light.webm")}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell">
        <img
          className="hero-diagram"
          src={publicAsset(
            `/assets/diagram/diagrama-${theme}${lang === "en" ? "-en" : ""}.svg`,
          )}
          alt=""
          aria-hidden="true"
        />
        <h1>{t.hero.title}</h1>
        <p className="hero-script">
          {t.hero.scriptPre}
          <em>{t.hero.scriptEm}</em>
          {t.hero.scriptPost}
        </p>
        <div className="hero-proof">
          <div className="hero-proof-avatars" aria-hidden="true">
            <img src={publicAsset("/assets/logos/logo-ufpe.svg")} alt="" />
            <img src={publicAsset("/assets/logos/logo-ume.svg")} alt="" />
            <img src={publicAsset("/assets/logos/logo-incognia.svg")} alt="" />
            <img src={publicAsset("/assets/logos/logo-loft.svg")} alt="" />
            <img src={publicAsset("/assets/logos/logo-magalu.svg")} alt="" />
          </div>
          <p className="hero-proof-text">
            <strong>{t.hero.proofStrong}</strong> {t.hero.proofRest}
          </p>
        </div>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#cases">
            {t.hero.ctaCases} <ArrowDown size={16} />
          </a>
          <button className="button button-secondary" type="button" onClick={onContact}>
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  )
}

function CasesSection() {
  const { t } = useLang()
  const [filter, setFilter] = useState<"all" | CategoryKey | "ai">("all")
  const [subtitleTooltip, setSubtitleTooltip] = useState<{
    slug: string
    text: string
    x: number
    y: number
  } | null>(null)
  const categories: ("all" | CategoryKey | "ai")[] = ["all", "product", "branding", "creative", "ai"]
  const visibleCases = cases.filter(
    (item) =>
      item.slug !== "ume" &&
      item.slug !== "casa-nui" &&
      (filter === "all" || (filter === "ai" ? item.aiAssisted : item.categoryKey === filter)),
  )

  const updateSubtitleTooltip = (
    event: React.MouseEvent<HTMLParagraphElement>,
    slug: string,
    text: string,
  ) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return
    }

    const target = event.currentTarget
    if (target.scrollWidth <= target.clientWidth) {
      setSubtitleTooltip(null)
      return
    }

    const horizontalInset = Math.min(192, window.innerWidth / 2)
    setSubtitleTooltip({
      slug,
      text,
      x: Math.max(horizontalInset, Math.min(event.clientX, window.innerWidth - horizontalInset)),
      y: event.clientY,
    })
  }

  return (
    <section className="cases-section" id="cases">
      <div className="shell">
        <p className="kicker">{t.cases.kicker}</p>
        <h2>{t.cases.title}</h2>
        <div className="filters" aria-label={t.aria.filterCases}>
          {categories.map((category) => (
            <button
              type="button"
              className={`${filter === category ? "active" : ""}${category === "ai" ? " filter-ai" : ""}`}
              onClick={() => setFilter(category)}
              key={category}
            >
              {t.cases.categories[category]}
              {category === "ai" && <Sparkles size={13} strokeWidth={1.5} fill="currentColor" />}
            </button>
          ))}
        </div>
        <div className="cases-grid">
          {visibleCases.map((item) => (
            <Link
              className={`case-card${item.coverImage ? " has-cover" : ""}`}
              to={`/cases/${item.slug}`}
              key={item.slug}
            >
              <div className="case-image" aria-hidden="true">
                {item.coverImage ? (
                  <img src={publicAsset(item.coverImage)} alt="" loading="lazy" />
                ) : (
                  <ImageIcon size={32} strokeWidth={1.25} />
                )}
              </div>
              {item.coverImage && <div className="case-card-overlay" aria-hidden="true" />}
              <div className="case-footer">
                <div className="case-meta">
                  <img src={publicAsset(item.logo)} alt="" />
                  <div>
                    <h3>{item.company}</h3>
                    <p
                      aria-describedby={
                        subtitleTooltip?.slug === item.slug ? "case-subtitle-tooltip" : undefined
                      }
                      onMouseEnter={(event) =>
                        updateSubtitleTooltip(event, item.slug, t.cases.titles[item.company])
                      }
                      onMouseMove={(event) =>
                        updateSubtitleTooltip(event, item.slug, t.cases.titles[item.company])
                      }
                      onMouseLeave={() => setSubtitleTooltip(null)}
                    >
                      {t.cases.titles[item.company]}
                    </p>
                  </div>
                </div>
                <div className="case-tag-group">
                  <span className="case-tag" data-category={item.categoryKey}>
                    {t.cases.categories[item.categoryKey]}
                  </span>
                  {item.aiAssisted && (
                    <span className="case-tag case-tag-ai">
                      {t.cases.categories.ai}
                      <Sparkles size={12} strokeWidth={1.5} fill="currentColor" />
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {subtitleTooltip &&
          createPortal(
            <div
              className="case-subtitle-tooltip"
              id="case-subtitle-tooltip"
              role="tooltip"
              style={{ left: subtitleTooltip.x, top: subtitleTooltip.y }}
            >
              {subtitleTooltip.text}
            </div>,
            document.body,
          )}
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
              <div className="about-formation">
                <h3>{t.about.education}</h3>
                <div className="education">
                  <span className="education-logo">
                    <img src={publicAsset("/assets/logos/logo-ufpe.svg")} alt="" />
                  </span>
                  <span>
                    <strong>{t.about.school}</strong>
                    <small>{t.about.university}</small>
                  </span>
                </div>
              </div>
              <div className="about-skills">
                <h3>{t.about.skillsTitle}</h3>
                <ul className="skills-list">
                  {skillIcons.map(({ key, icon }) => (
                    <SkillItem key={key} {...t.skills[key]} icon={icon} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="about-portrait">
              <div className="portrait">
                <img src={publicAsset("/assets/dff8f.png")} alt={t.about.portraitAlt} />
              </div>
            </div>
          </div>
          <div className="contact-row" id="contato">
            <strong>{t.about.contactRow}</strong>
            <button className="button contact-button" type="button" onClick={onContact}>
              {t.about.ctaContact} <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases/:slug" element={<CasePage />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  )
}

function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("inicio")
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    let scrollFrame = 0

    const updateActiveSection = () => {
      cancelAnimationFrame(scrollFrame)
      scrollFrame = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 1
        const current = navItems.reduce<SectionId>((active, { key }) => {
          const section = document.getElementById(key)
          const sectionTop = section
            ? section.getBoundingClientRect().top + window.scrollY
            : Number.POSITIVE_INFINITY
          return scrollPosition >= sectionTop ? key : active
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
      <Header activeSection={activeSection} onContact={() => setContactOpen(true)} />
      <Hero activeSection={activeSection} onContact={() => setContactOpen(true)} />
      <CasesSection />
      <AboutSection onContact={() => setContactOpen(true)} />
      <Footer activeSection={activeSection} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </main>
  )
}
