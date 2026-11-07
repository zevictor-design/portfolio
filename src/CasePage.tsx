import {
  AlertCircle,
  Award,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  CheckCircle2,
  CheckSquare,
  Circle,
  Clock,
  Compass,
  Database,
  Eye,
  Filter,
  Flag,
  Globe,
  Grid,
  Heart,
  Image as ImageIcon,
  Info,
  Layers,
  LayoutTemplate,
  Lightbulb,
  List,
  Map,
  MessageSquare,
  Monitor,
  MousePointerClick,
  Palette,
  PencilRuler,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  UserCog,
  Users,
  Wrench,
  XCircle,
  Zap,
} from "lucide-react"
import type { ComponentType } from "react"
import { useParams } from "react-router-dom"
import type { HighlightCard } from "./caseContent"
import { getCaseBySlug } from "./caseContent"
import { ContactModal, Footer, Header } from "./layout"
import { useLang } from "./i18n"
import { publicAsset } from "./publicAsset"
import { useState } from "react"

type LucideIconComponent = ComponentType<{ size?: number; strokeWidth?: number }>

// Curated icon registry (kept explicit, not `import * as`, so unused Lucide
// icons are tree-shaken out of the bundle). Add an import above + an entry
// here whenever a new case needs an icon name that isn't on this list yet.
const iconRegistry: Record<string, LucideIconComponent> = {
  AlertCircle,
  Award,
  ArrowRight,
  ArrowUp,
  BarChart3,
  CheckCircle2,
  CheckSquare,
  Circle,
  Clock,
  Compass,
  Database,
  Eye,
  Filter,
  Flag,
  Globe,
  Grid,
  Heart,
  Image: ImageIcon,
  Info,
  Layers,
  LayoutTemplate,
  Lightbulb,
  List,
  Map,
  MessageSquare,
  Monitor,
  MousePointerClick,
  Palette,
  PencilRuler,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  UserCog,
  Users,
  Wrench,
  XCircle,
  Zap,
}

function DynamicIcon({ name, size = 16, strokeWidth = 1.6 }: { name: string; size?: number; strokeWidth?: number }) {
  const Icon = iconRegistry[name] ?? Circle
  return <Icon size={size} strokeWidth={strokeWidth} />
}

function HighlightCardItem({
  card,
  iconName = card.icon,
}: {
  card: HighlightCard
  iconName?: string
}) {
  return (
    <div className="case-highlight-card">
      {card.withImage && (
        <div className="case-highlight-image" aria-hidden="true">
          {card.image && <img src={publicAsset(card.image)} alt="" loading="lazy" />}
        </div>
      )}
      <div className="case-highlight-body">
        <span className="case-icon-slot case-content-icon">
          <DynamicIcon name={iconName} size={24} strokeWidth={1.5} />
        </span>
        <strong>{card.title}</strong>
        <p>{card.text}</p>
      </div>
    </div>
  )
}

function PhoneMockup({
  src,
  html,
  demos,
}: {
  src?: string
  html?: string
  demos?: { label: string; src: string }[]
}) {
  const [activeDemo, setActiveDemo] = useState(0)
  const hasMultipleDemos = !!demos && demos.length > 1
  const activeSrc = hasMultipleDemos ? demos![activeDemo].src : src
  const isDesignSystemDemo = hasMultipleDemos && demos![activeDemo].label === "Design System"

  return (
    <div className="case-phone-wrap">
      <p className="case-phone-label">Demonstração</p>
      {hasMultipleDemos && (
        <div className="case-phone-switcher" role="tablist" aria-label="Escolher demonstração">
          {demos!.map((demo, index) => (
            <button
              key={demo.label}
              type="button"
              role="tab"
              aria-selected={index === activeDemo}
              className={`case-phone-switcher-option${index === activeDemo ? " is-active" : ""}`}
              onClick={() => setActiveDemo(index)}
            >
              {demo.label}
            </button>
          ))}
        </div>
      )}
      <div className="case-phone" aria-hidden={false}>
        {isDesignSystemDemo ? (
          <div className="case-phone-screen case-phone-coming-soon" role="status">
            <span className="case-phone-coming-soon-icon" aria-hidden="true">
              <TriangleAlert size={16} strokeWidth={1.5} />
            </span>
            <span>Em breve</span>
          </div>
        ) : activeSrc ? (
          <iframe title="Protótipo interativo do case" src={publicAsset(activeSrc)} className="case-phone-screen" />
        ) : (
          <iframe title="Protótipo interativo do case" srcDoc={html} className="case-phone-screen" />
        )}
        <img className="case-phone-frame" src={publicAsset("/assets/phone-mockup.webp")} alt="" />
      </div>
      <p className="case-phone-disclaimer">
        <span className="case-icon-slot">
          <Info size={16} />
        </span>
        Detalhes proprietários adaptados para respeitar confidencialidade.
      </p>
    </div>
  )
}

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, lang } = useLang()
  const caseData = getCaseBySlug(slug, lang)
  const [contactOpen, setContactOpen] = useState(false)

  if (!caseData) {
    return (
      <main>
        <Header onContact={() => setContactOpen(true)} />
        <div className="shell case-not-found">
          <p>Case não encontrado.</p>
          <a className="button button-secondary" href={import.meta.env.BASE_URL}>
            Voltar para a Home
          </a>
        </div>
        <Footer />
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      </main>
    )
  }

  const isDemo = caseData.type === "demo"
  const isDesktopGallery = caseData.slug === "magalu-craft"
  const isLaut = caseData.slug === "vila-laut"
  const isSabiá = caseData.slug === "sabia"
  const isBrandingSingleSolution = isLaut || isSabiá

  return (
    <main className="case-page">
      <Header onContact={() => setContactOpen(true)} />
      <div className="shell case-shell">
        <a className="button button-secondary case-back" href={`${import.meta.env.BASE_URL}#cases`}>
          <span className="case-icon-slot">
            <ArrowLeft size={16} />
          </span>
          Voltar
        </a>

        <div className={isDemo ? "case-layout case-layout-demo" : "case-layout"}>
          <div className="case-layout-main">
            <div className="case-hero-head">
              <div className="case-hero-logo">
                <img src={publicAsset(caseData.logo)} alt="" />
                <strong>{caseData.company}</strong>
              </div>
              <div className="case-tags">
                {caseData.tags.map((tag) => {
                  const isAiTag = tag === "IA" || tag === "AI"
                  return (
                    <span
                      className={`case-tag${isAiTag ? " case-tag-ai" : ""}`}
                      data-category={caseData.categoryKey}
                      key={tag}
                    >
                      {tag}
                      {isAiTag && <Sparkles size={12} strokeWidth={1.5} fill="currentColor" />}
                    </span>
                  )
                })}
              </div>
            </div>
            <h1 className="case-title">{caseData.title}</h1>
            <p className="case-subtitle">{caseData.subtitle}</p>

            {!isDemo && caseData.highlightCards && (
              <div className={`case-highlight-row${caseData.slug === "incognia" ? " case-highlight-row-clean" : ""}`}>
                {caseData.highlightCards.map((card) => (
                  <HighlightCardItem card={card} key={card.title} />
                ))}
              </div>
            )}

            {!isDesktopGallery && (
              <>
                {caseData.context.length > 0 && (
                  <section className="case-section">
                    <h2>Contexto</h2>
                    {caseData.context.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </section>
                )}

                {!isBrandingSingleSolution && (
                  <section className="case-section">
                    <h2>Desafio</h2>
                    <div className="case-card-row">
                      {caseData.challenge.cards.map((card) => (
                        <HighlightCardItem card={card} key={card.title} />
                      ))}
                    </div>
                    {caseData.challenge.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </section>
                )}
              </>
            )}
          </div>

          {isDemo && (caseData.demoSrc || caseData.demoHtml || caseData.demos) && (
            <div className="case-layout-side">
              <PhoneMockup src={caseData.demoSrc} html={caseData.demoHtml} demos={caseData.demos} />
            </div>
          )}
        </div>

        <section className="case-section case-section-wide">
          {!isDesktopGallery && <h2>Solução</h2>}
          {caseData.solution.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          {caseData.solution.withImages && (
            <div
              className={`case-image-stack${isLaut ? " case-image-stack-laut" : ""}${isDesktopGallery ? " case-image-stack-magalu-craft" : ""}`}
            >
              {caseData.solution.images?.rows?.map((row, rowIndex) => (
                <div
                  className={`case-image-row${row.length === 4 ? " case-image-row-four" : ""}`}
                  key={rowIndex}
                >
                  {row.map((image, imageIndex) => (
                    <div className="case-image-block" key={image}>
                      <img
                        src={publicAsset(image)}
                        alt={
                          isLaut
                            ? `${lang === "en" ? "Vila Laut brand identity" : "Identidade visual da Vila Laut"}, ${lang === "en" ? "image" : "imagem"} ${rowIndex + imageIndex + 1}`
                            : isSabiá
                              ? `${lang === "en" ? "Sabiá brand identity" : "Identidade visual do Sabiá"}`
                            : caseData.slug === "loft"
                              ? `${lang === "en" ? "Loft Details page" : "Página Details da Loft"}`
                            : `Tela ${rowIndex * 2 + imageIndex + 1} do Magalu Ads`
                        }
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
              {caseData.slug === "luiza-labs" && (
                <p className="case-image-note">
                  <span className="case-icon-slot">
                    <Info size={14} />
                  </span>
                  {lang === "en"
                    ? "By Product decision, the Beta was desktop only."
                    : "Por decisão de Produto, o Beta era desktop only."}
                </p>
              )}
            </div>
          )}
        </section>

        {!isDesktopGallery && !isBrandingSingleSolution && (
          <>
            <section className="case-section case-section-wide">
              <h2>Processo</h2>
              {caseData.process.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              {caseData.process.aiCard && (
                <div className="case-ai-card">
                  <span className="case-icon-slot case-content-icon case-ai-icon">
                    <DynamicIcon name="Sparkles" size={24} strokeWidth={1.5} />
                  </span>
                  <div>
                    <strong>{caseData.process.aiCard.title}</strong>
                    <p>{caseData.process.aiCard.text}</p>
                  </div>
                </div>
              )}
            </section>

            <section className="case-section case-section-wide">
              <h2>Resultado</h2>
              <div className="case-card-row">
                {caseData.results.cards.map((card) => (
                  <HighlightCardItem card={card} iconName="ArrowUp" key={card.title} />
                ))}
              </div>
            </section>
          </>
        )}

        <div className="contact-row">
          <strong>{t.about.contactRow}</strong>
          <button className="button contact-button" type="button" onClick={() => setContactOpen(true)}>
            {t.about.ctaContact}
          </button>
        </div>
      </div>
      <Footer />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </main>
  )
}
