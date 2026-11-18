export type CategoryKey = "product" | "branding" | "creative"

export type CaseSummary = {
  slug: string
  company: string
  categoryKey: CategoryKey
  logo: string
  /** Optional cover image shown on the homepage case card, instead of the generic placeholder icon. */
  coverImage?: string
  /** Marks the case for the dedicated "IA" filter/tag, independent from its main categoryKey. */
  aiAssisted?: boolean
}

export const cases: CaseSummary[] = [
  {
    slug: "luiza-labs",
    company: "Luiza Labs",
    categoryKey: "product",
    logo: "/assets/logos/logo-magalu.svg",
    coverImage: "/assets/cases/magalu/cover.webp",
  },
  {
    slug: "loft",
    company: "Loft",
    categoryKey: "product",
    logo: "/assets/logos/logo-loft.svg",
    coverImage: "/assets/cases/loft/loft cover 2.webp",
  },
  {
    slug: "incognia",
    company: "Incognia",
    categoryKey: "product",
    logo: "/assets/logos/logo-incognia.svg",
    coverImage: "/assets/cases/incognia/login.png",
    aiAssisted: true,
  },
  {
    slug: "magalu-craft",
    company: "Magalu",
    categoryKey: "creative",
    logo: "/assets/logos/logo-magalu.svg",
    coverImage: "/assets/cases/magalu-craft/cover-magalu-craft 3.webp",
  },
  { slug: "ume", company: "Ume", categoryKey: "product", logo: "/assets/logos/logo-ume.svg" },
  {
    slug: "vila-laut",
    company: "Vila Laut",
    categoryKey: "branding",
    logo: "/assets/logos/logo-laut.svg",
    coverImage: "/assets/cases/laut/cover-laut.png",
  },
  {
    slug: "sabia",
    company: "Sabiá",
    categoryKey: "branding",
    logo: "/assets/logos/logo-sabia.svg",
    coverImage: "/assets/cases/sabia/img-sabia-01.png",
  },
  {
    slug: "casa-nui",
    company: "Casa Nui",
    categoryKey: "creative",
    logo: "/assets/logos/logo-casanui.svg",
    coverImage: "/assets/cases/casanui/capa.png",
  },
]

/** A Lucide icon name (PascalCase, e.g. "Search", "Sparkles", "ArrowUp"). */
export type IconName = string

export type HighlightCard = {
  icon: IconName
  title: string
  text: string
  /** Only used for the 3 "no-demo" headline cards, which carry an image above the text. */
  withImage?: boolean
  /** Real image shown in place of the placeholder square when withImage is true. */
  image?: string
}

export type CaseDetail = CaseSummary & {
  tags: string[]
  title: string
  subtitle: string
  type: "demo" | "no-demo"
  /** Preferred when type is "demo": a built prototype served from /public, loaded via iframe src. */
  demoSrc?: string
  /** Fallback when type is "demo" and there is no demoSrc: inline HTML rendered via iframe srcDoc. */
  demoHtml?: string
  /** When a case has more than one prototype (e.g. two chapters of the same story), a small
   * selector renders above the phone frame so the visitor can switch between them. Takes
   * priority over demoSrc/demoHtml when present with more than one entry. */
  demos?: { label: string; src: string }[]
  /** Required when type is "no-demo": exactly 3 highlight cards shown under the header. */
  highlightCards?: HighlightCard[]
  context: string[]
  challenge: { paragraphs: string[]; cards: HighlightCard[] }
  solution: {
    paragraphs: string[]
    withImages?: boolean
    /** Real screenshots for the Solução section, arranged in side-by-side rows. */
    images?: { rows?: string[][] }
  }
  process: { paragraphs: string[]; aiCard?: { title: string; text: string } }
  results: { cards: HighlightCard[] }
}

const p1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam, sed nisi nulla quis sem at nibh elementum imperdiet."
const p2 =
  "Duis sagittis ipsum, praesent mauris fermentum. Nullam quis ante etiam sit amet orci eget eros faucibus tincidunt, duis leo sed fringilla mauris sit amet nibh."
const p3 =
  "Donec ullamcorper nulla non metus auctor fringilla, cras mattis consectetur purus sit amet fermentum, aenean lacinia bibendum nulla sed consectetur."

const defaultChallengeCards: HighlightCard[] = [
  { icon: "Search", title: "Lorem ipsum", text: "Dolor sit amet consectetur adipiscing elit." },
  { icon: "Wrench", title: "Dolor sit amet", text: "Consectetur adipiscing elit integer nec odio." },
  { icon: "TriangleAlert", title: "Consectetur", text: "Adipiscing elit integer nec odio praesent." },
]

const defaultHighlightCards: HighlightCard[] = [
  { icon: "Search", title: "Lorem ipsum dolor", text: "Sit amet consectetur adipiscing elit integer.", withImage: true },
  { icon: "Wrench", title: "Sed cursus ante", text: "Dapibus diam sed nisi nulla quis sem.", withImage: true },
  { icon: "TriangleAlert", title: "Nibh elementum", text: "Imperdiet duis sagittis ipsum praesent.", withImage: true },
]

const defaultResultCards: HighlightCard[] = [
  { icon: "ArrowUp", title: "Lorem ipsum", text: "Dolor sit amet consectetur adipiscing elit integer nec odio." },
  { icon: "ArrowUp", title: "Praesent libero", text: "Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh." },
  { icon: "ArrowUp", title: "Elementum imperdiet", text: "Duis sagittis ipsum praesent mauris fermentum nullam quis." },
]

const defaultAiCard = {
  title: "Rigor técnico apoiado por IA",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
}

const demoHtmlPlaceholder = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { margin: 0; font-family: -apple-system, Arial, sans-serif; background: #f5f6f7; color: #212427; }
      .bar { padding: 16px; font-weight: 700; border-bottom: 1px solid #e3e4e5; }
      .content { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
      .card { background: #fff; border-radius: 16px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
    </style>
  </head>
  <body>
    <div class="bar">Lorem Ipsum</div>
    <div class="content">
      <div class="card">Dolor sit amet consectetur adipiscing elit.</div>
      <div class="card">Integer nec odio praesent libero sed cursus.</div>
      <div class="card">Ante dapibus diam sed nisi nulla quis sem.</div>
    </div>
  </body>
</html>`

function buildDetail(
  summary: CaseSummary,
  title: string,
  type: CaseDetail["type"] = "no-demo",
  subtitle: string = p1,
): CaseDetail {
  return {
    ...summary,
    tags: [summary.categoryKey === "branding" ? "Branding" : summary.categoryKey === "creative" ? "Craft" : "Produto"],
    title,
    subtitle,
    type,
    demoHtml: type === "demo" ? demoHtmlPlaceholder : undefined,
    highlightCards: type === "no-demo" ? defaultHighlightCards : undefined,
    context: [p1, p2],
    challenge: { paragraphs: [p3], cards: defaultChallengeCards },
    solution: { paragraphs: [p1, p2], withImages: true },
    process: { paragraphs: [p2, p3], aiCard: defaultAiCard },
    results: { cards: defaultResultCards },
  }
}

const caseTitles: Record<string, string> = {
  "luiza-labs": "Criação do novo Magalu Ads",
  "magalu-craft": "Da ilustração dos personagens ao desenvolvimento.",
  loft: "Conversão de agendamento e Design System",
  incognia: "Transformando complexidade em decisões mais claras",
  ume: "Uma nova experiência, um novo App",
  "vila-laut": "Onde a natureza descansa",
  sabia: "Instituto de pediatria",
  "casa-nui": "Casa Nui",
}

// --- Magalu Ads (Luiza Labs) -------------------------------------------
// Conteúdo real do case. Nomes de empresa, produto e funcionalidades são
// reais; interfaces, fluxos e dados nas telas do protótipo foram
// reconstruídos/ficcionalizados para respeitar confidencialidade.

const magaluChallengeCards: HighlightCard[] = [
  {
    icon: "UserCog",
    title: "Feito para especialistas",
    text: "Pensado para consultores de mídia operarem, não os sellers: pouco destaque no site e muito jargão técnico.",
  },
  {
    icon: "TrendingDown",
    title: "Instabilidade e baixo resultado",
    text: "Falhas técnicas recorrentes e campanhas com resultado fraco minavam a confiança de quem testava o produto.",
  },
  {
    icon: "Users",
    title: "Sem espaço para o pequeno seller",
    text: "Sem incentivo para campanhas menores, o produto ficava fora do alcance da maior parte dos sellers.",
  },
]

const magaluResultCards: HighlightCard[] = [
  {
    icon: "TrendingUp",
    title: "Nova linha de receita",
    text: "O Magalu Ads se tornou uma linha de receita relevante, com faturamento na casa de centenas de milhares de reais já nos dois primeiros meses de teste.",
  },
  {
    icon: "Zap",
    title: "Criação em dois passos",
    text: "Criar uma campanha, que antes dependia de um consultor de mídia, passou a caber em dois passos fáceis de entender.",
  },
  {
    icon: "Rocket",
    title: "Alfa em menos de um ano",
    text: "Da decisão de reconstruir o produto ao lançamento da alfa, testada com early adopters e marcas grandes, levou menos de um ano.",
  },
]

const magaluDetail: CaseDetail = {
  slug: "luiza-labs",
  company: "Luiza Labs",
  categoryKey: "product",
  logo: "/assets/logos/logo-magalu.svg",
  tags: ["Produto",  "Ad Tech", "B2B", "Self-service", "Validação com early adopters"],
  title: caseTitles["luiza-labs"],
  subtitle:
    "Um time fruto da aquisição da In Loco tinha a missão de reconstruir do zero o produto de Ads da Magalu, saindo de uma ferramenta operada por consultores de mídia para uma experiência self-service para os vendedores em dois passos.",
  type: "demo",
  demoSrc: "/demos/magalu-ads.html?v=3",
  context: [
    "A Magalu tem no seu ecossistema de marketplace mais de 360 mil parceiros ativos. Em 2021 a empresa tinha no primeiro trimestre de 2021: 56 mil vendedores na sua plataforma, a companhia terminou aqule ano com incríveis 160 vendedores.",
    "Apesar do ecosistema já gigante, seu produto de Ads era muito fraco perto do potencial da marca. Pequenos vendedores a marcas como a Samsung, tinham pouca forma eficiente de dar destaque aos próprios produtos dentro do site.",
    "Para resolver isso, a Magalu adquiriu a In Loco, empresa de Ad Tech onde eu era designer de produto. A empresa recifense já se destacava no mercado brasileiro por uma tecnologia precisa, privacy by design e um ROI consistente para seus clientes.", 
    "Da aquisição nasceu a squad Magalu Ads. Tínhamos autonomia para reconstruir o produto de anúncios da Magalu do zero, usando toda a bagagem técnica trazida da In Loco.",
  ],
  challenge: {
    cards: magaluChallengeCards,
    paragraphs: [
      "Reconstruir um produto de Ads do zero envolve mais que a mecânica de campanha, cobrança e alcance: era preciso desenhar a lógica de placement e um sistema de preço justo, com lance e orçamento variáveis, tudo sobre uma arquitetura legada e com limitações reais de dados.",
    ],
  },
  solution: {
    withImages: true,
    images: {
      rows: [
        [
          "/assets/cases/magalu/img empty.webp",
          "/assets/cases/magalu/tela magalu 01.webp",
        ],
        [
          "/assets/cases/magalu/tela magalu 02.webp",
          "/assets/cases/magalu/tela magalu 03.webp",
        ],
      ],
    },
    paragraphs: [
      "O processo começou pela experiência existente: entender onde sellers e marcas travavam, mapear fluxos e comparar com outras plataformas de Ads. A partir daí, desenhamos a arquitetura de informação, testamos protótipos com usuários reais e evoluímos a interface junto com a Engenharia.",
      "A decisão de design mais importante foi o nível de controle que o seller teria ao criar uma campanha. Entre uma experiência simples, com configurações avançadas para depois, e atacar de cara pontos como público-alvo e orçamento, escolhemos a primeira: priorizamos velocidade de lançamento, deixando de fora da primeira versão algumas configurações importantes para grupos específicos.",
      "O resultado foi um produto reconstruído do zero: mais simples de operar, com resultado mais fácil de entender e ROI relevante para quem anunciava.",
    ],
  },
  process: {
    paragraphs: [
      "Entrei no início da iniciativa, direto na definição da visão de produto e do roadmap, ao lado de PM, Engenharia, Data e Liderança, levando a experiência da pesquisa até a implementação.",
      "Para validar a direção antes do lançamento amplo, montamos um programa de early adopters, um grupo fechado de sellers e marcas testando a versão alfa, o que permitiu ajustar a experiência com dados reais de uso antes de abrir o produto para todos.",
    ],
  },
  results: {
    cards: magaluResultCards,
  },
}


// --- Loft -----------------------------------------------------------------
// Conteúdo real do case, cobrindo as duas iniciativas que liderei na Loft:
// o revamp da página de Details e, no ano seguinte, a consolidação do
// Design System entre Loft, CredPago e Vista.

const loftHighlightCards: HighlightCard[] = [
  {
    icon: "LayoutTemplate",
    title: "Revamp de conversão",
    text: "Nova página de Details reunindo experimentos já validados em uma experiência única e coesa.",
  },
  {
    icon: "Palette",
    title: "Design System consolidado",
    text: "CredPago, Vista e Loft passaram a operar sob o mesmo sistema visual.",
  },
  {
    icon: "Target",
    title: "Decisões guiadas por dados",
    text: "Testes A/B orientaram as mudanças em uma das páginas mais sensíveis do produto.",
  },
]

const loftChallengeCards: HighlightCard[] = [
  {
    icon: "Search",
    title: "Evidências sem um projeto",
    text: "Pesquisas, testes de usabilidade e dados de uso sobre a Details já existiam, mas faltava a iniciativa de reunir tudo em um revamp.",
  },
  {
    icon: "LayoutTemplate",
    title: "Página fragmentada",
    text: "A Details acumulava problemas legados de arquitetura da informação, com dados misturados que dificultavam a decisão do usuário.",
  },
  {
    icon: "Palette",
    title: "Pouca consistência entre os produtos",
    text: "Depois das aquisições da CredPago e da Vista, cada marca operava com sua própria interface, sem um sistema visual em comum.",
  },
]

const loftResultCards: HighlightCard[] = [
  {
    icon: "TrendingUp",
    title: "Mais de 70% de uma meta ambiciosa",
    text: "Nosso OKR era aumentar a conversão da página em 3,5%, uma meta já desafiadora. Alcançamos mais de 70% desse objetivo com o revamp da Details.",
  },
  {
    icon: "CheckCircle2",
    title: "OKRs entregues",
    text: "As duas iniciativas entregaram os OKRs definidos, com foco em conversão, quantidade de experimentos validados e padronização visual.",
  },
  {
    icon: "Layers",
    title: "Três marcas, um sistema",
    text: "CredPago, Vista e Loft passaram a operar sob o mesmo Design System, consolidando o look and feel da companhia.",
  },
  {
    icon: "LayoutTemplate",
    title: "Uma página, oito aprendizados",
    text: "A nova Details reuniu mais de 8 experimentos validados em uma única experiência, resolvendo problemas legados de arquitetura da informação.",
  },
]

const loftDetail: CaseDetail = {
  slug: "loft",
  company: "Loft",
  categoryKey: "product",
  logo: "/assets/logos/logo-loft.svg",
  coverImage: "/assets/cases/loft/loft cover 2.webp",
  tags: ["Produto", "Design Systems", "PropTech", "Conversão", "A/B Testing"],
  title: caseTitles["loft"],
  subtitle:
    "Aqui temos dois capítulos: o revamp da Details, nome dado à página de detalhamento do apartamento e um dos pontos de conversão mais importantes da jornada do cliente da Loft, e a consolidação do Design System depois das aquisições da CredPago e da Vista CRM.",
  type: "demo",
  demos: [
    { label: "Details", src: "/demos/loft-details.html" },
    { label: "Design System", src: "/demos/loft-design-system.html" },
  ],
  highlightCards: loftHighlightCards,
  context: [
    "A Loft é uma proptech (startup de tecnologia para o mercado imobiliário) brasileira que ajuda pessoas a comprar, vender e alugar imóveis, cobrindo toda a jornada: da busca ao fechamento do negócio, incluindo crédito imobiliário e CRM para o corretor.",
    "Quem acessava a Details geralmente já estava em uma fase avançada da busca: comparando apartamentos, avaliando fotos, preço e condições antes de decidir avançar para uma negociação de compra.",
    "Fiquei cerca de dois anos na empresa. No primeiro, no time de Aquisição, cuidei da página de Details de um apartamento. No segundo, fui chamado para o time de Design Ops para liderar o Design System, em um momento de forte reorganização após a Loft adquirir a CredPago e a Vista.",
  ],
  challenge: {
    cards: loftChallengeCards,
    paragraphs: [
    ],
  },
  solution: {
    paragraphs: [
      "Parti de entrevistas e pesquisas já realizadas que ainda não tinham sido endereçadas. A partir delas, fomos rodando experimentos para cada parte da página, testando a arquitetura pedaço por pedaço até chegar em um revamp consistente, resolvendo problemas legados como informações misturadas e hierarquia confusa, com o cuidado de manter ou elevar a conversão da página.",
      "No ano seguinte, fui chamado para liderar o Design System, em um momento de reorganização da Loft como plataforma, somando vendas, CRM e crédito às marcas recém-adquiridas CredPago e Vista.",
      "Conduzi um estudo de cores para equilibrar as interfaces das diferentes marcas com o mesmo look and feel já consolidado na Loft, dando consistência visual sem apagar a identidade de cada uma.",
    ],
    withImages: true,
    images: {
      rows: [["/assets/cases/loft/details 2.webp"]],
    },
  },
  process: {
    paragraphs: [
      "Análise da experiência existente, reunindo pesquisas, testes de usabilidade e dados de uso já realizados sobre a Details.",
      "Nova arquitetura da informação, benchmark e testes A/B para validar as decisões sem comprometer a conversão da página.",
      "Evolução do Design System, com estudo de cores e novos padrões para consolidar CredPago, Vista e Loft sob o mesmo sistema visual.",
      "Discussões técnicas e acompanhamento próximo da implementação em ambas as frentes.",
    ],
  },
  results: {
    cards: loftResultCards,
  },
}


// --- Incognia -----------------------------------------------------------
// Conteúdo real do case, adaptado do site anterior (victor-araujo.com).

const incogniaHighlightCards: HighlightCard[] = [
  {
    icon: "Layers",
    title: "Consistência centrada no usuário",
    text: "Um novo design system e novos padrões que tornaram a experiência mais escalável e consistente.",
    withImage: true,
    image: "/assets/cases/incognia/login.png",
  },
  {
    icon: "Eye",
    title: "Mais clareza na investigação",
    text: "Informações críticas ficaram mais fáceis de encontrar, entender e explicar.",
    withImage: true,
    image: "/assets/cases/incognia/risco.png",
  },
  {
    icon: "BarChart3",
    title: "Métricas do SDK no produto",
    text: "Dados do SDK exibidos no produto nas fases mais críticas de integração.",
    withImage: true,
    image: "/assets/cases/incognia/sdk-api-analytics.png",
  },
]

const incogniaChallengeCards: HighlightCard[] = [
  {
    icon: "Search",
    title: "Informações dispersas",
    text: "Dados importantes em avaliações de risco eram difíceis de localizar e interpretar.",
  },
  {
    icon: "BarChart3",
    title: "Fragmentação técnica",
    text: "Dados coletados pelo SDK estavam espalhados em ferramentas externas.",
  },
  {
    icon: "Palette",
    title: "Inconsistência visual",
    text: "Componentes semelhantes possuíam padrões diferentes, aumentando fricção.",
  },
]

const incogniaResultCards: HighlightCard[] = [
  {
    icon: "Eye",
    title: "Percepção do produto",
    text: "Clientes e equipes internas passaram a perceber o produto como mais claro, fácil de ler e consistente.",
  },
  {
    icon: "Search",
    title: "Qualidade das investigações",
    text: "Informações que antes geravam dúvidas se tornaram mais fáceis de encontrar, e avaliações complexas passaram a contar com explicações mais diretas.",
  },
  {
    icon: "Target",
    title: "Suporte a vendas",
    text: "A nova área de métricas se tornou um recurso importante para a equipe responsável pelas provas de valor, apoiando conversas com potenciais clientes.",
  },
  {
    icon: "Layers",
    title: "Escalabilidade técnica",
    text: "A evolução da biblioteca de componentes reduziu variações, ampliou a reutilização e criou uma base sólida para novas funcionalidades.",
  },
  {
    icon: "Compass",
    title: "Alinhamento com engenharia",
    text: "O trabalho aproximou Design e Engenharia, permitindo que decisões de experiência considerassem desde o início os requisitos de escala e performance.",
  },
]

const incogniaDetail: CaseDetail = {
  slug: "incognia",
  company: "Incognia",
  categoryKey: "product",
  logo: "/assets/logos/logo-incognia.svg",
  coverImage: "/assets/cases/incognia/login.png",
  tags: ["Produto", "Anti-fraude", "B2B", "Analytics", "Design Systems", "IA"],
  title: caseTitles["incognia"],
  subtitle:
    "Como conduzi a evolução de experiências centrais e ajudei a consolidar um sistema de interface mais claro, consistente e escalável na plataforma B2B de prevenção a fraudes da Incognia.",
  type: "no-demo",
  highlightCards: incogniaHighlightCards,
  context: [
    "A Incognia utiliza device intelligence para ajudar grandes empresas a detectar comportamentos suspeitos e evitar transações fraudulentas nas suas aplicações. Seu produto de analytics conecta os clientes à API de riscos da empresa através de um SDK, então os analistas podem acompanhar avaliações, investigar as informações que determinaram cada classificação e monitorar o desempenho da sua aplicação.",
    "O produto cresceu ao longo dos anos e precisava transformar uma grande quantidade de dados técnicos e sensíveis em informações que pudessem ser compreendidas e utilizadas mais facilmente em uma investigação.",
  ],
  challenge: {
    cards: incogniaChallengeCards,
    paragraphs: [
      "Não era possível apenas esconder a complexidade. Os analistas precisavam de profundidade e transparência para compreender por que uma avaliação havia recebido determinado nível de risco. O desafio era tornar o produto mais fácil de entender sem comprometer a riqueza das informações, a explicabilidade ou a performance necessária para operar em grande escala.",
    ],
  },
  solution: {
    paragraphs: [
      "Liderei a iniciativa de redesign na principal página de avaliação de risco, com uma nova arquitetura da informação e dados mais fáceis de localizar e interpretar. Desenvolvemos novas formas de explicar os riscos: evidências mais específicas complementavam justificativas genéricas, enquanto um resumo gerado com IA traduzia avaliações complexas para uma linguagem clara e compreensível.",
      "Também liderei a criação de uma nova área de analytics, desde o discovery até o lançamento. Antes, clientes dependiam de painéis externos para acessar dados do SDK, criando um gap crítico nas fases iniciais de integração. Colaborei com Customer Success, Engenharia e Dados para definir quais métricas seriam úteis, compreender sua natureza técnica e encontrar as visualizações mais adequadas. Após benchmarks, protótipos e testes de usabilidade, optamos por criar uma área dedicada e lançá-la progressivamente, transformando uma lacuna em um recurso estratégico para provas de valor.",
      "Ao perceber que certos problemas se repetiam, iniciei uma revisão mais ampla da interface e da biblioteca de componentes, com apoio de outra designer e em parceria próxima com o time de front-end. Revisei componentes, estabeleci novos padrões e planejei a aplicação das mudanças em diferentes releases, conectando melhoria visual a uma necessidade estrutural: tornar novas experiências consistentes e escaláveis.",
    ],
  },
  process: {
    paragraphs: [
      "Entrevistas com analistas, observação de workflows e análise de dados de uso para compreender os pontos de fricção reais e as necessidades de profundidade técnica.",
      "Redesenho de fluxos, arquitetura da informação e criação de protótipos interativos para testar diferentes abordagens de apresentação de dados complexos.",
      "Testes de usabilidade com analistas reais, validação de padrões e ajustes baseados em feedback. IA foi integrada como camada de crítica e apoio investigativo.",
      "Trabalho próximo com Engenharia para garantir escalabilidade, performance e aplicação consistente dos padrões em toda a plataforma.",
    ],
    aiCard: {
      title: "Rigor técnico apoiado por IA",
      text: "Em cada fase, utilizei IA como camada de análise e crítica: no Discovery, para acelerar a compreensão de problemas técnicos complexos; no Design, para avaliar alternativas de solução e revisar fluxos; e na Validação, para estruturar análises baseadas nas 10 heurísticas de Nielsen.",
    },
  },
  results: {
    cards: incogniaResultCards,
  },
}


// --- Incognia (EN) -------------------------------------------------------
// English translation, reviewed content only. Only cases with reviewed PT
// copy get an EN version for now; everything else still falls back to PT
// when the site is in English.

const incogniaHighlightCardsEn: HighlightCard[] = [
  {
    icon: "Layers",
    title: "User-centered consistency",
    text: "A new design system and new patterns that made the experience more scalable and consistent.",
    withImage: true,
    image: "/assets/cases/incognia/login.png",
  },
  {
    icon: "Eye",
    title: "More clarity in investigation",
    text: "Critical information became easier to find, understand and explain.",
    withImage: true,
    image: "/assets/cases/incognia/risco.png",
  },
  {
    icon: "BarChart3",
    title: "SDK metrics in the product",
    text: "SDK data surfaced in the product during the most critical integration stages.",
    withImage: true,
    image: "/assets/cases/incognia/sdk-api-analytics.png",
  },
]

const incogniaChallengeCardsEn: HighlightCard[] = [
  {
    icon: "Search",
    title: "Scattered information",
    text: "Important data in risk assessments was hard to locate and interpret.",
  },
  {
    icon: "BarChart3",
    title: "Technical fragmentation",
    text: "Data collected by the SDK was spread across external tools.",
  },
  {
    icon: "Palette",
    title: "Visual inconsistency",
    text: "Similar components had different patterns, adding friction.",
  },
]

const incogniaResultCardsEn: HighlightCard[] = [
  {
    icon: "Eye",
    title: "Product perception",
    text: "Clients and internal teams came to see the product as clearer, easier to read and more consistent.",
  },
  {
    icon: "Search",
    title: "Investigation quality",
    text: "Information that used to raise doubts became easier to find, and complex assessments now come with more direct explanations.",
  },
  {
    icon: "Target",
    title: "Sales support",
    text: "The new metrics area became an important resource for the team responsible for proof-of-value, supporting conversations with potential clients.",
  },
  {
    icon: "Layers",
    title: "Technical scalability",
    text: "The evolution of the component library reduced variation, increased reuse and created a solid foundation for new features.",
  },
  {
    icon: "Compass",
    title: "Alignment with engineering",
    text: "The work brought Design and Engineering closer together, letting experience decisions account for scale and performance requirements from the start.",
  },
]

const incogniaDetailEn: CaseDetail = {
  slug: "incognia",
  company: "Incognia",
  categoryKey: "product",
  logo: "/assets/logos/logo-incognia.svg",
  coverImage: "/assets/cases/incognia/login.png",
  tags: ["Product", "Anti-fraud", "B2B", "Analytics", "Design Systems", "AI"],
  title: "Turning complexity into clearer decisions",
  subtitle:
    "How I led the evolution of core experiences and helped consolidate a clearer, more consistent and scalable interface system across Incognia's B2B fraud-prevention platform.",
  type: "no-demo",
  highlightCards: incogniaHighlightCardsEn,
  context: [
    "Incognia uses device intelligence to help large companies detect suspicious behavior and prevent fraudulent transactions in their applications. Its analytics product connects clients to the company's risk API through an SDK, so analysts can track assessments, investigate the information behind each classification, and monitor their application's performance.",
    "The product had grown over the years and needed to turn a large volume of technical, sensitive data into information that could be understood and used more easily during an investigation.",
  ],
  challenge: {
    cards: incogniaChallengeCardsEn,
    paragraphs: [
      "Hiding the complexity wasn't an option. Analysts needed depth and transparency to understand why an assessment received a given risk level. The challenge was making the product easier to understand without compromising the richness of the information, its explainability, or the performance needed to operate at scale.",
    ],
  },
  solution: {
    paragraphs: [
      "I led the redesign initiative on the main risk assessment page, with a new information architecture and data that was easier to locate and interpret. We developed new ways to explain risk: more specific evidence complemented generic justifications, while an AI-generated summary translated complex assessments into clear, understandable language.",
      "I also led the creation of a new analytics area, from discovery to launch. Clients used to depend on external dashboards to access SDK data, creating a critical gap in the early integration stages. I worked with Customer Success, Engineering and Data to define which metrics would be useful, understand their technical nature and find the right visualizations. After benchmarks, prototypes and usability tests, we decided to build a dedicated area and roll it out progressively, turning a gap into a strategic resource for proof-of-value conversations.",
      "Noticing that certain problems kept repeating, I started a broader review of the interface and component library, with support from another designer and close partnership with the front-end team. I reviewed components, established new patterns and planned the rollout across different releases, connecting visual improvement to a structural need: making new experiences consistent and scalable.",
    ],
  },
  process: {
    paragraphs: [
      "Interviews with analysts, workflow observation and usage data analysis to understand the real friction points and the need for technical depth.",
      "Redesigning flows, information architecture and building interactive prototypes to test different approaches to presenting complex data.",
      "Usability testing with real analysts, pattern validation and feedback-based adjustments. AI was built in as a layer for critique and investigative support.",
      "Close work with Engineering to ensure scalability, performance and consistent application of patterns across the platform.",
    ],
    aiCard: {
      title: "Technical rigor supported by AI",
      text: "In every phase, I used AI as a layer of analysis and critique: in Discovery, to speed up understanding of complex technical problems; in Design, to evaluate solution alternatives and review flows; and in Validation, to structure analyses based on Nielsen's 10 heuristics.",
    },
  },
  results: {
    cards: incogniaResultCardsEn,
  },
}

// --- Magalu Ads (EN) ------------------------------------------------------

const magaluChallengeCardsEn: HighlightCard[] = [
  {
    icon: "UserCog",
    title: "Built for specialists",
    text: "Designed for media consultants to operate, not sellers: little visibility on the site and heavy technical jargon.",
  },
  {
    icon: "TrendingDown",
    title: "Instability and weak results",
    text: "Recurring technical failures and underperforming campaigns undermined the confidence of anyone testing the product.",
  },
  {
    icon: "Users",
    title: "No room for the small seller",
    text: "With no incentive for smaller campaigns, the product stayed out of reach for most sellers.",
  },
]

const magaluResultCardsEn: HighlightCard[] = [
  {
    icon: "TrendingUp",
    title: "New revenue line",
    text: "Magalu Ads became a relevant revenue line, generating hundreds of thousands of reais within its first two months of testing.",
  },
  {
    icon: "Zap",
    title: "Two-step creation",
    text: "Creating a campaign, which used to depend on a media consultant, now fit into two easy-to-understand steps.",
  },
  {
    icon: "Rocket",
    title: "Alpha in under a year",
    text: "From the decision to rebuild the product to the alpha launch, tested with early adopters and major brands, it took less than a year.",
  },
]

const magaluDetailEn: CaseDetail = {
  slug: "luiza-labs",
  company: "Luiza Labs",
  categoryKey: "product",
  logo: "/assets/logos/logo-magalu.svg",
  tags: ["Product", "Ad Tech", "B2B", "Self-service", "Early adopter validation"],
  title: "Building the new Magalu Ads",
  subtitle:
    "A team born from the In Loco acquisition was tasked with rebuilding Magalu's Ads product from scratch, moving from a tool operated by media consultants to a self-service experience sellers could use in two steps.",
  type: "demo",
  demoSrc: "/demos/magalu-ads.html?v=3",
  context: [
    "Magalu's marketplace ecosystem has more than 360,000 active partners. In the first quarter of 2021 alone, the company had 56,000 sellers on its platform, and ended that year with an impressive 160,000.",
    "Despite this already massive ecosystem, its Ads product was far weaker than the brand's potential. From small sellers to brands like Samsung, there was little efficient way to highlight their own products on the site.",
    "To solve this, Magalu acquired In Loco, the Ad Tech company where I worked as a product designer. The Recife-based company already stood out in the Brazilian market for its precise technology, privacy-by-design approach and consistent ROI for clients.",
    "The acquisition gave birth to the Magalu Ads squad. We had the autonomy to rebuild Magalu's ads product from scratch, using all the technical background brought over from In Loco.",
  ],
  challenge: {
    cards: magaluChallengeCardsEn,
    paragraphs: [
      "Rebuilding an Ads product from scratch involves more than campaign mechanics, billing and reach: we had to design the placement logic and a fair pricing system, with variable bidding and budget, all on top of a legacy architecture and real data limitations.",
    ],
  },
  solution: {
    withImages: true,
    images: {
      rows: [
        [
          "/assets/cases/magalu/img empty.webp",
          "/assets/cases/magalu/tela magalu 01.webp",
        ],
        [
          "/assets/cases/magalu/tela magalu 02.webp",
          "/assets/cases/magalu/tela magalu 03.webp",
        ],
      ],
    },
    paragraphs: [
      "The process started with the existing experience: understanding where sellers and brands got stuck, mapping flows and comparing with other Ads platforms. From there, we designed the information architecture, tested prototypes with real users and evolved the interface alongside Engineering.",
      "The most important design decision was how much control the seller would have when creating a campaign. Between a simple experience, leaving advanced settings for later, and tackling points like audience and budget head-on, we chose the former: we prioritized launch speed, leaving some settings that mattered to specific groups out of the first version.",
      "The result was a product rebuilt from scratch: simpler to operate, with results that were easier to understand and relevant ROI for advertisers.",
    ],
  },
  process: {
    paragraphs: [
      "I joined at the start of the initiative, straight into defining the product vision and roadmap alongside PM, Engineering, Data and Leadership, carrying the experience from research through to implementation.",
      "To validate the direction before a wide launch, we set up an early adopter program, a closed group of sellers and brands testing the alpha version, which let us adjust the experience with real usage data before opening the product to everyone.",
    ],
  },
  results: {
    cards: magaluResultCardsEn,
  },
}


// --- Loft (EN) --------------------------------------------------------------

const loftHighlightCardsEn: HighlightCard[] = [
  {
    icon: "LayoutTemplate",
    title: "Conversion revamp",
    text: "A new Details page bringing together already-validated experiments into one cohesive experience.",
  },
  {
    icon: "Palette",
    title: "Consolidated Design System",
    text: "CredPago, Vista and Loft began operating under the same visual system.",
  },
  {
    icon: "Target",
    title: "Data-driven decisions",
    text: "A/B tests guided the changes on one of the product's most sensitive pages.",
  },
]

const loftChallengeCardsEn: HighlightCard[] = [
  {
    icon: "Search",
    title: "Evidence without a project",
    text: "Research, usability tests and usage data on the Details page already existed, but no one had taken the initiative to bring it all together into a revamp.",
  },
  {
    icon: "LayoutTemplate",
    title: "A fragmented page",
    text: "The Details page had accumulated legacy information architecture problems, with mixed-up data that made it harder for users to decide.",
  },
  {
    icon: "Palette",
    title: "Little consistency across products",
    text: "After the CredPago and Vista acquisitions, each brand operated with its own interface, with no shared visual system.",
  },
]

const loftResultCardsEn: HighlightCard[] = [
  {
    icon: "TrendingUp",
    title: "Over 70% of an ambitious goal",
    text: "Our OKR was to increase the page's conversion by 3.5%, an already challenging target. We reached over 70% of that goal with the Details revamp.",
  },
  {
    icon: "CheckCircle2",
    title: "OKRs delivered",
    text: "Both initiatives delivered on their defined OKRs, focused on conversion, number of validated experiments and visual standardization.",
  },
  {
    icon: "Layers",
    title: "Three brands, one system",
    text: "CredPago, Vista and Loft began operating under the same Design System, consolidating the company's look and feel.",
  },
  {
    icon: "LayoutTemplate",
    title: "One page, eight lessons",
    text: "The new Details page brought together more than 8 validated experiments into a single experience, resolving legacy information architecture problems.",
  },
]

const loftDetailEn: CaseDetail = {
  slug: "loft",
  company: "Loft",
  categoryKey: "product",
  logo: "/assets/logos/logo-loft.svg",
  coverImage: "/assets/cases/loft/loft cover 2.webp",
  tags: ["Product", "Design Systems", "PropTech", "Conversion", "A/B Testing"],
  title: "Booking conversion and Design System",
  subtitle:
    "Two chapters here: the revamp of the Details page, the name given to the apartment's detail page and one of the most important conversion points in Loft's customer journey, and the consolidation of the Design System after the CredPago and Vista CRM acquisitions.",
  type: "demo",
  demos: [
    { label: "Details", src: "/demos/loft-details.html" },
    { label: "Design System", src: "/demos/loft-design-system.html" },
  ],
  highlightCards: loftHighlightCardsEn,
  context: [
    "Loft is a Brazilian proptech (a real estate technology startup) that helps people buy, sell and rent property, covering the whole journey: from search to closing the deal, including real estate credit and CRM for agents.",
    "Whoever reached the Details page was usually already deep into their search: comparing apartments, weighing photos, price and conditions before deciding to move into a purchase negotiation.",
    "I spent about two years at the company. In the first, on the Acquisition team, I owned the apartment Details page. In the second, I was brought onto the Design Ops team to lead the Design System, during a period of heavy reorganization after Loft acquired CredPago and Vista.",
  ],
  challenge: {
    cards: loftChallengeCardsEn,
    paragraphs: [
    ],
  },
  solution: {
    paragraphs: [
      "I started from interviews and research that had already been done but never acted on. From there, we ran experiments for each part of the page, testing the architecture piece by piece until we reached a consistent revamp, fixing legacy problems like mixed-up information and confusing hierarchy, all while being careful to maintain or raise the page's conversion.",
      "The following year, I was brought in to lead the Design System, during a moment when Loft was reorganizing as a platform, adding sales, CRM and credit to the newly acquired CredPago and Vista brands.",
      "I led a color study to balance the different brands' interfaces with the look and feel already consolidated at Loft, giving them visual consistency without erasing each one's identity.",
    ],
    withImages: true,
    images: {
      rows: [["/assets/cases/loft/details 2.webp"]],
    },
  },
  process: {
    paragraphs: [
      "Analysis of the existing experience, gathering research, usability tests and usage data already collected on the Details page.",
      "New information architecture, benchmarking and A/B tests to validate decisions without compromising the page's conversion.",
      "Evolution of the Design System, with a color study and new patterns to consolidate CredPago, Vista and Loft under the same visual system.",
      "Technical discussions and close follow-up on implementation across both fronts.",
    ],
  },
  results: {
    cards: loftResultCardsEn,
  },
}


export const caseDetails: Record<string, CaseDetail> = Object.fromEntries(
  cases.map((summary) => {
    if (summary.slug === "luiza-labs") return [summary.slug, magaluDetail]
    if (summary.slug === "magalu-craft") {
      return [
        summary.slug,
        {
          ...buildDetail(summary, caseTitles[summary.slug], "no-demo", "Além de liderar o produto, assumi pessoalmente o desenvolvimento da landing page do Magalu Ads: mais rápido construir do zero, do wireframe ao conteúdo final, do que repassar o briefing pra outro time. Revisei o conteúdo de perto com o time de Marketing e criei uma linha própria de personagens ilustrados para dar identidade visual ao produto, hoje usada em outros pontos de contato da marca."),
          highlightCards: undefined,
          tags: ["Craft", "Content", "UI/UX", "Desenvolvimento"],
          subtitle: "",
          context: [
            "Além de liderar o produto, assumi pessoalmente o desenvolvimento da landing page do Magalu Ads: mais rápido construir do zero, do wireframe ao conteúdo final, do que repassar o briefing pra outro time. Revisei o conteúdo de perto com o time de Marketing e criei uma linha própria de personagens ilustrados para dar identidade visual ao produto, hoje usada em outros pontos de contato da marca.",
          ],
          challenge: { paragraphs: [], cards: [] },
          solution: {
            paragraphs: [],
            withImages: true,
            images: {
              rows: [
                ["/assets/cases/magalu-craft/inicio.webp"],
                ["/assets/cases/magalu-craft/como-funciona.webp"],
                ["/assets/cases/magalu-craft/quero-usar.webp"],
              ],
            },
          },
          process: { paragraphs: [] },
          results: { cards: [] },
        },
      ]
    }
    if (summary.slug === "loft") return [summary.slug, loftDetail]
    if (summary.slug === "incognia") return [summary.slug, incogniaDetail]
    if (summary.slug === "vila-laut") {
      return [
        summary.slug,
        {
          ...buildDetail(
            summary,
            caseTitles[summary.slug],
            "no-demo",
            "Identidade visual completa para uma pousada boutique em Porto de Galinhas.",
          ),
          highlightCards: undefined,
          tags: ["Id visual", "Logo design"],
          context: [
            "A Vila Laut é uma pousada boutique em Porto de Galinhas, pensada como um refúgio de luxo descalço: a sensação de Bali traduzida em arquitetura, natureza e mar, num destino onde a maioria das marcas comunica só \"praia\". Pela 008 Design, conduzi a criação da marca do zero, do nome ao símbolo, passando pelo posicionamento e fechando num manual de identidade completo.",
          ],
          challenge: { paragraphs: [], cards: [] },
          solution: {
            paragraphs: [],
            withImages: true,
            images: {
              rows: [
                ["/assets/cases/laut/laut brand 0.1webp.webp"],
                ["/assets/cases/laut/laut brand 02.webp"],
              ],
            },
          },
          process: { paragraphs: [] },
          results: { cards: [] },
        },
      ]
    }
    if (summary.slug === "sabia") {
      return [
        summary.slug,
        {
          ...buildDetail(
            summary,
            caseTitles[summary.slug],
            "no-demo",
            "Identidade visual para um instituto de pediatria que quer ser referência no Nordeste.",
          ),
          highlightCards: undefined,
          tags: ["Id visual", "Logo design"],
          context: [
            "O Instituto Sabiá é um instituto de pediatria que quer atender de forma próxima e humana, unindo isso a tecnologia avançada de imagem e ressonância, algo que ainda não existe na região. A proposta junta cuidado humano a precisão técnica, o tipo de combinação que pode transformar o instituto numa referência em saúde infantil em todo o Nordeste.",
          ],
          challenge: { paragraphs: [], cards: [] },
          solution: {
            paragraphs: [],
            withImages: true,
            images: {
              rows: [["/assets/cases/sabia/sabia-branding-1.webp"]],
            },
          },
          process: { paragraphs: [] },
          results: { cards: [] },
        },
      ]
    }
    if (summary.slug === "casa-nui") {
      return [
        summary.slug,
        {
          ...buildDetail(summary, caseTitles[summary.slug], "no-demo", "Criatividade no ecossistema da marca"),
          highlightCards: undefined,
          context: [
            "A Casa Nui também é uma pousada em Porto de Galinhas. O desafio era criar um sistema de assets ilustrados, versáteis o suficiente para aplicação em diferentes formatos, trazendo mais cor e alegria para a marca. O trabalho passou por ilustração, direção de imagem e direção de conteúdo escrito, moldando a forma como a marca se comunica visualmente hoje.",
          ],
          challenge: { paragraphs: [], cards: [] },
          solution: { paragraphs: [], withImages: false },
          process: { paragraphs: [] },
          results: { cards: [] },
        },
      ]
    }
    // As demais entradas seguem com o esqueleto padrão (lorem ipsum) até receberem conteúdo real.
    return [summary.slug, buildDetail(summary, caseTitles[summary.slug], "no-demo")]
  }),
)

// English versions only exist for cases whose EN copy has been reviewed.
// Everything else keeps showing the PT content even when the site is in
// English, until its own EN translation is added here.
const magaluCraftDetailEn: CaseDetail = {
  slug: "magalu-craft",
  company: "Magalu",
  categoryKey: "creative",
  logo: "/assets/logos/logo-magalu.svg",
  coverImage: "/assets/cases/magalu-craft/cover-magalu-craft 3.webp",
  tags: ["Craft", "Content", "UI/UX", "Development"],
  title: "From character illustration to development.",
  subtitle: "",
  type: "no-demo",
  highlightCards: undefined,
  context: [
    "Beyond leading the product, I personally took on building the Magalu Ads landing page: faster to build it myself from scratch, from wireframe to final content, than to hand the brief off to another team. I reviewed the content closely with the Marketing team and created an original line of illustrated characters to give the product its visual identity, one that's now used across other brand touchpoints.",
  ],
  challenge: { paragraphs: [], cards: [] },
  solution: {
    paragraphs: [],
    withImages: true,
    images: {
      rows: [
        ["/assets/cases/magalu-craft/inicio.webp"],
        ["/assets/cases/magalu-craft/como-funciona.webp"],
        ["/assets/cases/magalu-craft/quero-usar.webp"],
      ],
    },
  },
  process: { paragraphs: [] },
  results: { cards: [] },
}

const vilaLautDetailEn: CaseDetail = {
  slug: "vila-laut",
  company: "Vila Laut",
  categoryKey: "branding",
  logo: "/assets/logos/logo-laut.svg",
  coverImage: "/assets/cases/laut/cover-laut.png",
  tags: ["Id visual", "Logo design"],
  title: "Where nature rests",
  subtitle: "Complete visual identity for a boutique inn in Porto de Galinhas.",
  type: "no-demo",
  highlightCards: undefined,
  context: [
    "Vila Laut is a boutique inn in Porto de Galinhas, designed as a barefoot-luxury retreat: the feeling of Bali translated into architecture, nature and the sea, in a destination where most brands only talk about \"the beach\". Through 008 Design, I led the brand's creation from scratch, from the name to the symbol, through positioning, closing with a full identity manual.",
  ],
  challenge: { paragraphs: [], cards: [] },
  solution: {
    paragraphs: [],
    withImages: true,
    images: {
      rows: [
        ["/assets/cases/laut/laut brand 0.1webp.webp"],
        ["/assets/cases/laut/laut brand 02.webp"],
      ],
    },
  },
  process: { paragraphs: [] },
  results: { cards: [] },
}

const sabiaDetailEn: CaseDetail = {
  slug: "sabia",
  company: "Sabiá",
  categoryKey: "branding",
  logo: "/assets/logos/logo-sabia.svg",
  coverImage: "/assets/cases/sabia/img-sabia-01.png",
  tags: ["Id visual", "Logo design"],
  title: "Pediatrics Institute",
  subtitle: "Visual identity for a pediatrics institute aiming to become a reference in Brazil's Northeast.",
  type: "no-demo",
  highlightCards: undefined,
  context: [
    "Instituto Sabiá is a pediatrics institute that wants to deliver close, human care paired with advanced imaging and MRI technology, something that doesn't yet exist in the region. The proposal pairs human care with technical precision, the kind of combination that could turn the institute into a reference for children's health across Brazil's Northeast.",
  ],
  challenge: { paragraphs: [], cards: [] },
  solution: {
    paragraphs: [],
    withImages: true,
    images: {
      rows: [["/assets/cases/sabia/sabia-branding-1.webp"]],
    },
  },
  process: { paragraphs: [] },
  results: { cards: [] },
}

const casaNuiDetailEn: CaseDetail = {
  slug: "casa-nui",
  company: "Casa Nui",
  categoryKey: "creative",
  logo: "/assets/logos/logo-casanui.svg",
  coverImage: "/assets/cases/casanui/capa.png",
  tags: ["Craft"],
  title: "Casa Nui",
  subtitle: "Creativity across the brand's ecosystem",
  type: "no-demo",
  highlightCards: undefined,
  context: [
    "Casa Nui is also an inn in Porto de Galinhas. The challenge was creating a system of illustrated assets, versatile enough to apply across different formats, bringing more color and joy to the brand. The work spanned illustration, art direction and content direction, shaping how the brand communicates visually today.",
  ],
  challenge: { paragraphs: [], cards: [] },
  solution: { paragraphs: [], withImages: false },
  process: { paragraphs: [] },
  results: { cards: [] },
}

export const caseDetailsEn: Partial<Record<string, CaseDetail>> = {
  "luiza-labs": magaluDetailEn,
  "magalu-craft": magaluCraftDetailEn,
  loft: loftDetailEn,
  incognia: incogniaDetailEn,
  "vila-laut": vilaLautDetailEn,
  sabia: sabiaDetailEn,
  "casa-nui": casaNuiDetailEn,
}

export function getCaseBySlug(
  slug: string | undefined,
  lang: "pt" | "en" = "pt",
): CaseDetail | undefined {
  if (!slug) return undefined
  if (lang === "en" && caseDetailsEn[slug]) return caseDetailsEn[slug]
  return caseDetails[slug]
}
