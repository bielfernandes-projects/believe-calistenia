---
name: Believe Calistenia
description: Landing page institucional da Believe Calistenia — dark theme, método SGC, conversão via WhatsApp. Mobile refinado com touch targets WCAG, backdrop dismiss, preços simplificados.
colors:
  background: "#09090b"
  foreground: "#fafafa"
  accent: "#0ea5e9"
  surface: "#18181b"
  surface-elevated: "#27272a"
  border: "rgba(39, 39, 42, 0.5)"
  text-muted: "#a1a1aa"
  text-body: "#e4e4e7"
  amber-accent: "#fbbf24"
  emerald-accent: "#34d399"
  green-accent: "#22c55e"
  purple-accent: "#a855f7"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    maxWidth: "65ch"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "16px"
  full: "9999px"
spacing:
  section-y: "96px"
  card-padding: "24px"
  grid-gap: "24px"
  section-padding-x: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
    typography: "{typography.title}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-body}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
    border: "{colors.border}"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.md}"
    border: "{colors.border}"
  card-elevated:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.md}"
    border: "1px solid rgba(59, 130, 246, 0.5)"
  accordion-header:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  tag:
    backgroundColor: "rgba(14, 165, 233, 0.1)"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Believe Calistenia

## 1. Overview

**Creative North Star: "O Lab de Movimento"**

Um ambiente digital escuro, preciso e metódico — como um laboratório onde o corpo é treinado com ciência e progressão. O design comunica método, não estética. A paleta é monocromática com um único acento azul ciano (#0ea5e9), usado com moderação para guiar o olhar para CTAs e informações-chave.

O sistema rejeita explicitamente o visual "academia convencional" (esteira, halteres cromados, fotos de atletas suados) e o tom "fitness influencer" (frases motivacionais vazias, "transformação em 30 dias"). Em vez disso, aposta em uma estética de ferramenta de precisão: informação clara, hierarquia rígida, zero decoração gratuita.

**Key Characteristics:**
- Dark mode fixo e absoluto (sem toggle) — fundo zinc-950 (#09090b) até o fim
- Single accent blue (#0ea5e9) em CTAs, links e destaques semânticos — nunca decorativo
- Cards com bordas finas e cantos de 16px — contidos, não chamativos
- Sombras ambientes leves (shadow-lg) para destacar superfícies interativas do fundo escuro
- Tipografia Geist Sans monocromática em toda a hierarquia — sem pares de fontes, sem serifa
- Espaçamento generoso (py-24 = 96px entre seções) para dar ar ao conteúdo denso

## 2. Colors

Paleta monocromática com um único acento. Toda cor serve a um propósito funcional.

### Primary
- **Sky Blue** (#0ea5e9): Único acento do sistema. Usado exclusivamente em CTAs (botões primários), links de âncora, spans de destaque em headings, e indicadores de estado ativo (tabs, accordion hover). Proibido em backgrounds decorativos ou texto corrido.

### Neutral
- **Near-Black** (#09090b / zinc-950): Fundo de página absoluto. Todas as superfícies partem daqui.
- **Zinc-900** (#18181b / surface): Fundo de cards e contêineres. 1 step acima do background para criar camada sutil sem sombra.
- **Zinc-800** (#27272a / surface-elevated): Hover de cards, background de tags, bordas. O tom mais claro da família escura.
- **Zinc-500** (#71717a / text-muted): Metadados, labels secundários, textos de baixa ênfase.
- **Zinc-300** (#d4d4d8 / text-body): Corpo de texto padrão. Contraste ~9.7:1 contra o fundo.
- **Zinc-100** (#f4f4f5 / foreground): Títulos e textos de alta ênfase. Contraste ~14.5:1.

### Secondary Accents (uso restrito a contextos específicos)
- **Amber** (#fbbf24): Apenas no card de bônus/presente da aula experimental.
- **Emerald** (#34d399): Apenas no badge de desconto nos planos.
- **Role Colors** (zinc, yellow, orange, green, blue, purple): Mapeamento fixo para os níveis A1-A6 do SGC. Uso exclusivo no accordion de graduação.

### Named Rules
**The Single Accent Rule.** Azul (#0ea5e9) é o único acento cromático do sistema. Nunca use um segundo acento decorativo. Se um elemento não é interativo nem semântico, ele deve ser neutro.

## 3. Typography

**Display & Body Font:** Geist Sans (com fallback ui-sans-serif, system-ui, sans-serif)
**Label Font:** Geist Mono (com fallback ui-monospace, monospace)

**Character:** Geist Sans em peso 400 e 700 cobre toda a hierarquia. Monoespaçado reservado para badges e labels curtos. Ausência de serifa reforça o tom de laboratório preciso e moderno.

### Hierarchy
- **Display** (700, clamp(2.25rem, 6vw, 3.75rem), 1.1): Hero heading. Letter-spacing -0.03em. Uso exclusivo no topo da página.
- **Headline** (700, clamp(1.75rem, 4vw, 2.25rem), 1.2): Títulos de seção. Sempre com um span azul de destaque.
- **Title** (600, 1.125rem, 1.4): Títulos de card, nomes de planos, labels de accordion.
- **Body** (400, 0.9375rem, 1.65): Texto corrido, descrições, parágrafos. Cap line length em 65ch.
- **Label** (600, 0.75rem, 1, tracking 0.05em, uppercase): Badges, tags, metadados. Fonte monoespaçada.

### Named Rules
**The Single Family Rule.** Geist Sans em peso 400 e 700 cobre display, headline, title e body. Não adicione uma segunda família de display ou body. Monoespaçado é aceito apenas para labels.

## 4. Elevation

Profundidade é comunicada através de sombras ambientes leves e camadas tonais, não por blur ou opacidade. O fundo escuro (#09090b) é a âncora; cada nível acima ganha um tom ligeiramente mais claro.

### Shadow Vocabulary
- **Card Default** (`0 4px 6px rgba(0,0,0,0.1)` / shadow-md): Cards de conteúdo em repouso.
- **Card Elevated** (`0 10px 15px rgba(0,0,0,0.2)` / shadow-lg): Cards em hover, CTA principal, modal.
- **Card Highlight** (`0 20px 25px rgba(14,165,233,0.15)` / shadow-xl + shadow-blue-500/25): CTA de aula experimental e cards destacados/highlighted.

### Named Rules
**The Flat-At-Rest Rule.** Superfícies são planas em repouso. Sombras aparecem apenas como resposta a estado (hover em cards, CTA primário). Nunca use sombra em texto corrido, badges ou elementos não interativos.

## 5. Components

### Buttons
- **Shape:** Completamente arredondados (rounded-full / 9999px), padding generoso.
- **Primary (CTA):** Background blue (#0ea5e9), texto branco, shadow-lg em azul. Hover: background mais claro (blue-400). Active: scale(0.97).
- **Secondary (Info):** Border 1px zinc-700, texto zinc-300, sem background. Hover: bg-zinc-800, texto branco.
- **Ghost (Nav):** Padding horizontal 12px, texto zinc-400, sem background. Hover: bg-zinc-800.

### Cards / Containers
- **Corner Style:** 16px (rounded-2xl), exceto em elementos muito pequenos (tags, badges) que usam rounded-full.
- **Background:** zinc-900 (#18181b) com opacidade 50% (bg-zinc-900/50).
- **Border:** 1px solid zinc-800/50. Hover: border-zinc-600.
- **Highlighted Border:** 1px solid blue-500/50 (apenas para plano "Mais popular").
- **Internal Padding:** 20px no mobile, 24px no desktop (p-5 sm:p-6).
- **Shadow:** shadow-md em repouso (ver Elevation).

### Navigation
- **Container:** Fixed topo, border-bottom zinc-800/50, bg-zinc-950/70 com backdrop-blur-lg. Z-index 50.
- **Desktop:** Links em row com ghost buttons (hover bg-zinc-800). CTA primário à direita. Instagram como ícone avulso.
- **Mobile:** Nav mostra apenas logo, Instagram e hamburger. CTA "Agendar Aula Experimental" fica dentro do menu hamburguer, como último item destacado (azul). Toque no backdrop escuro fecha o menu (backdrop dismiss). Touch targets: mínimo 44px (size-11).

### Accordion
- **Header:** Padding 16px 20px, texto branco sem peso. Chevron rotate 180° no estado aberto.
- **Body:** Border-top zinc-800 para separar do header. Padding 16px 20px.
- **Categories:** Labels monoespaçadas (uppercase, tracking-wider, zinc-500). Exercícios em grid 2 colunas no desktop.
- **Video buttons:** 44px (size-11), rounded-full, bg-zinc-80, hover azul.
- **Graduation disclaimer:** Texto zinc-600 em 12px. Oculto no nível A6.

### Tags / Badges
- **Style:** Background tintado (10% opacidade da cor de acento), texto na cor de acento, rounded-full, padding 2px 12px.
- **Graduation:**
  - A1 → zinc, A2 → yellow, A3 → orange, A4 → green, A5 → blue, A6 → purple.
- **Pricing badges:** Background blue sólido, texto branco, shadow-sm azul. Posicionados absolutos no topo do card.

### Pricing
- **Experimental card:** Bloco destacado com fundo azul tintado, badge "Aula Experimental" uppercase, valor R$ 40 em destaque, bônus em amber.
- **Plan cards:** 4 planos em grid responsivo (1 col mobile, 2 col md, 4 col lg). "Crédito Recorrente" oculto por padrão no mobile — toggle expansível para evitar sobrecarga de informação. Badge "Mais popular" no plano Trimestral.
- **CTA:** Botão primário "Agendar Aula Experimental" no card experimental; botão secundário "Quero mais informações" nos planos.

### FAB (WhatsApp)
- **Position:** fixed bottom-5 right-5 (bottom-6 right-6 no desktop).
- **Size:** 56px (size-14), 64px no desktop (size-16).
- **Animation:** Ping pulsante nos primeiros 3 segundos após montagem, depois desliga. Hover desativa o ping. `prefers-reduced-motion` respeitado via CSS global.
- **Touch target:** 56px ≥ 44px mínimo WCAG.

### Section Spacing
- **Standard:** py-20 no mobile, md:py-24 no desktop. Consistente em todas as seções (WhatIsCalisthenics, Methodology, Schedule, Graduation, Testimonials, Pricing, FAQ).
- **Hero:** min-h-screen com pt-20. Radial gradient decorativo.

### Inputs / Fields (não implementado — página não tem formulários)
Todo input proposals devem seguir o estilo de botão secundário: border 1px zinc-700, bg transparente, texto zinc-300, rounded-lg 8px.

## 6. Do's and Don'ts

### Do:
- **Do** usar azul (#0ea5e9) exclusivamente para interação e destaque semântico.
- **Do** manter dark mode fixo — fundo #09090b até o fim.
- **Do** usar rounded-2xl (16px) para cards e contêineres. rounded-full apenas para botões, tags e badges.
- **Do** usar py-20 no mobile, md:py-24 entre seções para respirar.
- **Do** usar sombras ambientes leves (shadow-md/lg) em cards e CTAs.
- **Do** usar a mesma família de fonte (Geist Sans) em toda a hierarquia.
- **Do** prefixar qualquer imagem com `next/image` para lazy loading automático.
- **Do** manter touch targets ≥ 44px no mobile para conformidade WCAG.
- **Do** limitar animações perpétuas (como o ping do FAB) a 3 segundos para reduzir desconforto.

### Don't:
- **Don't** usar border-left ou border-right > 1px como acento colorido em cards.
- **Don't** usar gradient text (`background-clip: text`). Destaque via peso ou tamanho.
- **Don't** usar glassmorphism (backdrop-blur em excesso) como padrão decorativo.
- **Don't** usar o template hero-metric (número grande + label pequena + stats).
- **Don't** repetir cards idênticos (ícone + heading + texto) sem variação de conteúdo.
- **Don't** usar eyebrow labels em uppercase com tracking acima de cada seção — um kicker é voz, repetir em toda seção é muleta de IA.
- **Don't** usar marcação numérica de seção (01 / 02 / 03) como scaffold padrão.
- **Don't** usar fontes da lista de rejeição (Fraunces, Inter, Space Grotesk, etc.) — Geist é a fonte do projeto.
- **Don't** usar "academia convencional" como referência visual (halteres, máquinas, instrutor de boné).
- **Don't** usar tom "fitness influencer" — sem antes/depois, sem "30 dias", sem frases motivacionais vazias.
- **Don't** parear border 1px + box-shadow com blur ≥ 16px no mesmo elemento — escolha um ou outro.
- **Don't** usar border-radius > 16px em cards ou seções (rounded-2xl é o máximo). full-pill é para botões apenas.
