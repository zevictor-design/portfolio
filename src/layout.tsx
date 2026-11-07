import { Check, Globe, Menu, Moon, Send, Sun, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLang } from "./i18n"
import { publicAsset } from "./publicAsset"
import { useTheme } from "./theme"

export type SectionId = "inicio" | "cases" | "sobre" | "contato"

// Get a free access key at https://web3forms.com (enter zevictor.design@gmail.com,
// the key arrives by email instantly, no password/account needed). Paste it below.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY"

export const navItems: { href: string; key: SectionId }[] = [
  { href: `${import.meta.env.BASE_URL}#inicio`, key: "inicio" },
  { href: `${import.meta.env.BASE_URL}#cases`, key: "cases" },
  { href: `${import.meta.env.BASE_URL}#sobre`, key: "sobre" },
  { href: `${import.meta.env.BASE_URL}#contato`, key: "contato" },
]

export function Logo({
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
      href={`${import.meta.env.BASE_URL}#inicio`}
      aria-label={t.aria.backToHome}
    >
      {showAvatar && (
        <span className="logo-avatar" aria-hidden="true">
          <img src={publicAsset("/assets/ee689.png")} alt="" />
        </span>
      )}
      <span className="logo-copy">
        <strong>Victor Araújo</strong>
        <span>SENIOR PRODUCT DESIGNER</span>
      </span>
    </a>
  )
}

export function NavLinks({
  activeSection,
  onContact,
  onNavigate,
  showActive = true,
}: {
  activeSection?: SectionId
  onContact?: () => void
  onNavigate?: () => void
  showActive?: boolean
}) {
  const { t } = useLang()
  return (
    <nav className="nav-links" aria-label={t.aria.mainNav}>
      {navItems.map(({ href, key }) => {
        const isActive = showActive && key === activeSection

        return (
          <a
            className={isActive ? "active" : undefined}
            href={href}
            aria-current={isActive ? "location" : undefined}
            onClick={(event) => {
              if (key === "contato" && onContact) {
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

export function ThemeButton() {
  const { t } = useLang()
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className="theme-button"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.aria.activateLightTheme : t.aria.activateDarkTheme}
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

export function LangButton() {
  const { lang, t, toggleLang } = useLang()
  return (
    <button
      className="lang-button"
      type="button"
      onClick={toggleLang}
      aria-label={lang === "pt" ? t.aria.switchToEnglish : t.aria.switchToPortuguese}
    >
      <Globe size={16} />
      {lang.toUpperCase()}
    </button>
  )
}

export function Header({
  activeSection,
  onContact,
}: {
  activeSection?: SectionId
  onContact: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    let hideTimeout: number | undefined
    const onScroll = () => {
      const isScrolled = window.scrollY > 8
      setScrolled(isScrolled)
      setHeaderHidden(false)
      window.clearTimeout(hideTimeout)

      if (isScrolled && !menuOpen) {
        hideTimeout = window.setTimeout(() => setHeaderHidden(true), 1000)
      }
    }
    const onMouseMove = (event: MouseEvent) => {
      if (window.scrollY > 8 && event.clientY <= 24) {
        window.clearTimeout(hideTimeout)
        setHeaderHidden(false)
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("mousemove", onMouseMove)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
      window.clearTimeout(hideTimeout)
    }
  }, [menuOpen])

  return (
    <div
      className={`header-bar${scrolled ? " is-scrolled" : ""}${headerHidden ? " is-hidden" : ""}${menuOpen ? " is-menu-open" : ""}`}
    >
      <header className="header shell">
        <Logo showAvatar />
        <div className="desktop-nav">
          <NavLinks activeSection={activeSection} onContact={onContact} />
          <div className="lang-theme-group">
            <LangButton />
            <ThemeButton />
          </div>
        </div>
        <div className="mobile-actions">
          <div className="lang-theme-group">
            <LangButton />
            <ThemeButton />
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
    </div>
  )
}

export function Footer({ activeSection }: { activeSection?: SectionId }) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Logo showAvatar muted />
        <div className="desktop-nav">
          <NavLinks activeSection={activeSection} showActive={false} />
          <div className="lang-theme-group">
            <LangButton />
            <ThemeButton />
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang()
  const nameRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

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

  const buttonLabel =
    status === "sending"
      ? t.contact.submitSending
      : status === "sent"
        ? t.contact.submitSent
        : status === "error"
          ? t.contact.submitError
          : t.contact.submit

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
          onSubmit={async (event) => {
            event.preventDefault()
            if (status === "sending") return

            const form = event.currentTarget
            const data = new FormData(form)
            const name = String(data.get("name"))
            const email = String(data.get("email"))
            const message = String(data.get("message"))

            setStatus("sending")
            try {
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                  access_key: WEB3FORMS_ACCESS_KEY,
                  subject: t.contact.mailSubject(name),
                  from_name: name,
                  name,
                  email,
                  message,
                }),
              })
              const result = await response.json()
              if (response.ok && result.success) {
                setStatus("sent")
                form.reset()
                setTimeout(onClose, 1600)
              } else {
                setStatus("error")
              }
            } catch {
              setStatus("error")
            }
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
          <button
            className="button modal-submit"
            type="submit"
            disabled={status === "sending" || status === "sent"}
          >
            {buttonLabel} {status === "sent" ? <Check size={16} /> : <Send size={16} />}
          </button>
        </form>
      </section>
    </div>
  )
}
