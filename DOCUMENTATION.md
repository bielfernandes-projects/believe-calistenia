# Believe Calistenia — Landing Page

## Sobre

Landing page institucional da Believe Calistenia, uma escola de calistenia em Fortaleza/CE. O objetivo é converter visitantes em leads qualificados que agendam uma aula experimental via WhatsApp.

**Stack:** Next.js 16.2.9, React 19, TypeScript, Tailwind CSS v4, Turbopack

## Seções da Página

| # | Seção | Componente | Descrição |
|---|-------|-----------|-----------|
| 1 | Hero | `HeroSection` | Badge "350+ alunos", headline com gradiente radial, CTA principal |
| 2 | O que é Calistenia | `WhatIsCalisthenics` | Texto explicativo + imagem + lista de benefícios |
| 3 | Como são as aulas | `MethodologySection` | 3 pilares (Aquecimento, Técnica, Circuito) em cards |
| 4 | Grade de Horários | `ScheduleSection` | Accordion mobile + grid desktop com horários semanais |
| 5 | SGC | `GraduationAccordion` | Accordion de níveis A1–A6 com exercícios, reps e vídeos |
| 6 | Depoimentos | `TestimonialsSection` | Grid 2×2 de depoimentos de alunos reais |
| 7 | Preços | `PricingSection` | Planos mensal/trimestral/semestral/anual + crédito recorrente |
| 8 | FAQ | `FAQSection` | Perguntas frequentes com accordion |
| 9 | Footer | `FooterSection` | Mapa, links, contato, Instagram e WhatsApp |

### Componentes globais

- `Navbar` — Nav fixa com backdrop-blur, desktop e mobile com menu hamburger
- `WhatsAppFab` — FAB flutuante com efeito ping, link direto para WhatsApp
- `InstagramIcon` — Ícone SVG do Instagram

## SEO

- **robots.ts** — Gera `/robots.txt` permitindo todos os crawlers, com link pro sitemap
- **sitemap.ts** — Gera `/sitemap.xml` com a URL principal (single page)
- **layout.tsx** — Metadata completa: title com localização ("Calistenia em Fortaleza"), description, canonical, OG tags, Twitter Card, robots meta
- **Schema LocalBusiness** — Injetado via `<script>` no layout: endereço, telefone, horários, Instagram/YouTube
- **Schema FAQ** — Injetado via `<script>` no FAQSection: cada pergunta/resposta vira `Question`/`Answer` estruturado
- **Hero H1** — Inclui "Calistenia em Fortaleza" como keyword principal

## Estrutura de Arquivos

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + keyframes + utilities
│   ├── layout.tsx           # Root layout com fonts, metadata, schema LocalBusiness
│   ├── robots.ts            # Gera robots.txt
│   ├── sitemap.ts           # Gera sitemap.xml
│   └── page.tsx             # Página única com todas as seções
├── components/
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── WhatIsCalisthenics.tsx
│   ├── MethodologySection.tsx
│   ├── ScheduleSection.tsx
│   ├── GraduationAccordion.tsx
│   ├── TestimonialsSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQSection.tsx       # Inclui schema FAQ (JSON-LD)
│   ├── FooterSection.tsx
│   ├── WhatsAppFab.tsx
│   └── InstagramIcon.tsx
├── data/
│   └── mock.ts              # Horários, preços e níveis de graduação
└── app/
    ├── fonts/               # Geist Sans + Geist Mono (variáveis)
    └── images/              # fotos-box.png, calistenia-foto.png
```

## Design System

### Cores

- **Fundo:** `#09090b` (zinc-950) — dark mode fixo
- **Superfície:** `#18181b` (zinc-900/50) — cards e contêineres
- **Acento único:** `#0ea5e9` (blue-500) — CTAs, links, destaques
- **Texto:** `#f4f4f5` (zinc-100) títulos, `#d4d4d8` (zinc-300) corpo, `#71717a` (zinc-500) metadados
- **Bordas:** `#27272a` (zinc-800) neutras, `blue-500/50` em hover/highlight

### Tipografia

- **Fonte única:** Geist Sans (variável) em toda hierarquia
- **Geist Mono:** apenas para badges e labels (uppercase tracking)
- **Utility `text-body`:** line-height 1.75, letter-spacing 0.01em, text-wrap: pretty

### Animações

- **Hero:** fade-up com delays escalonados (0ms / 100ms / 200ms / 300ms)
- **Grids (cards):** `grid-reveal` com IntersectionObserver — fade-up em cascata (delay 0ms / 80ms / 160ms / 240ms)
- **Accordion:** transição suave com `grid-template-rows` (0fr ↔ 1fr) e easing `--ease-out-quart`
- **Hover universal:** azul como cor de interação em todos os elementos clicáveis
- **`prefers-reduced-motion`:** zerado em animações/transições quando ativado

### Hover Pattern

Todos os hovers da página seguem o padrão: estado repouso neutro → estado hover azul.

| Tipo | Default | Hover |
|------|---------|-------|
| Cards | `border-zinc-800` | `border-blue-500/50 shadow-lg shadow-blue-500/5` |
| Accordion headers | — | `bg-blue-500/10` |
| Nav links | `text-zinc-400` | `bg-blue-500/10 text-blue-400` |
| Botões outline | `border border-zinc-700 text-zinc-300` | `bg-blue-500/10 text-blue-400` |
| Text links (footer) | `text-zinc-500` | `text-blue-400` |
| Botões primários | `bg-blue-500` | `bg-blue-400` (já era azul) |

## Dados

### Horários (`mock.ts`)

- Segunda a Sexta: 11 horários (05:30–20:35)
- Sábado: 2 horários de Aulão (09:00, 10:10)
- Terça/Quinta: KIDS às 15:10
- Sexta: sem aula às 20:35

### Preços

Quatro planos padrão (Mensal R$349 → Anual R$239/mês) e três de crédito recorrente (Trimestral R$322 → Anual R$271/mês). Descontos de 5% a 32%.

### Graduação SGC (A1–A6)

Seis níveis com 4 categorias cada (Básicos, Skills, Condicionamento, Bônus). Cores mapeadas por nível: A1 zinc, A2 yellow, A3 orange, A4 green, A5 blue, A6 purple.

## Scripts

```bash
npm run dev      # Dev server (Next.js + Turbopack)
npm run build    # Build de produção
npm run start    # Servir build
npm run lint     # ESLint
```

## Infraestrutura

- **Next.js 16.2.9** com App Router, páginas estáticas
- **Tailwind v4** via `@import "tailwindcss"` + `@theme inline`
- **Imagens:** `next/image` com lazy loading automático
- **Deploy:** adequado para Vercel ou qualquer host static-friendly
