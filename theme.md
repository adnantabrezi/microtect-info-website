# MicroTech India — Design System & Theme Reference

> This document describes every design token, component style, and responsive behaviour used across the MicroTech India website.  
> Source of truth: [`src/index.css`](file:///c:/Users/adnan/Desktop/microtech/src/index.css)

---

## 1. Design Tokens (CSS Custom Properties)

All tokens are defined on `:root` and available globally.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#ffffff` | Primary background (white) |
| `--bg-alt` | `#fafafa` | Alternate background for zebra-striped sections |
| `--text` | `#0a0a0a` | Primary text / headings (near-black) |
| `--text-soft` | `#555555` | Body copy, descriptions, secondary text |
| `--text-mute` | `#999999` | Labels, meta text, muted captions |
| `--line` | `#e5e5e5` | Borders, dividers, table rules |
| `--line-dark` | `#d0d0d0` | Stronger borders (button outlines, selects) |
| `--red` | `#e02020` | Brand accent — CTAs, hover states, highlights |
| `--red-dark` | `#b81818` | Darker red variant (available but rarely used) |

### Dark surface palette (hardcoded, not tokenised)
- Contact section & footer background: `#0a0a0a`
- White text on dark: `#fff`
- Muted white text: `rgba(255,255,255, 0.65)`, `rgba(255,255,255, 0.45)`, `rgba(255,255,255, 0.4)`
- Dark border: `rgba(255,255,255, 0.1)`, `rgba(255,255,255, 0.25)`

---

## 2. Typography

| Property | Value |
|---|---|
| **Font Family** | `Arial, Helvetica, sans-serif` (system stack) |
| **Base weight** | `400` |
| **Base line-height** | `1.6` |
| **Font smoothing** | `-webkit-font-smoothing: antialiased` |
| **Monospace (table)** | `'Courier New', Courier, monospace` |

### Type Scale

| Element | Size | Weight | Tracking | Other |
|---|---|---|---|---|
| **Hero H1** | `clamp(2.4rem, 6vw, 5rem)` | `900` | `-0.03em` | `line-height: 1.02`, `max-width: 16ch` |
| **Section H2** | `clamp(1.8rem, 4vw, 3rem)` | `900` | `-0.025em` | `line-height: 1.05`, `max-width: 20ch` |
| **Page Hero Title** | `clamp(2.2rem, 5.5vw, 4.2rem)` | `900` | `-0.03em` | `line-height: 1.05`, `max-width: 18ch` |
| **Card H3** | `1.4rem` | `800` | `-0.01em` | — |
| **Card H4** | `1.2rem` | `800` | `-0.01em` | — |
| **Card H5** | `1.1rem` | `800` | `-0.01em` | — |
| **Lead paragraph** | `1.2rem` (hero), `1.05rem` (section) | `400` | — | `line-height: 1.6–1.65`, `max-width: 60ch`, colour `--text-soft` |
| **Body text** | `.9rem – .95rem` | `400` | — | `line-height: 1.6–1.65` |
| **Labels / eyebrows** | `.65rem – .75rem` | `400` | `.2em – .3em` | `text-transform: uppercase`, colour `--red` or `--text-mute` |
| **Tags** | `.62rem` | `400` | `.2em` | `text-transform: uppercase`, colour `--red` |
| **Nav links** | `.72rem` | `400` | `.18em` | `text-transform: uppercase` |

### Selection
```css
::selection {
  background: var(--red);
  color: #fff;
}
```

---

## 3. Buttons

### `.btn-primary` — Filled CTA
| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--text)` (near-black) | `var(--red)` |
| **Color** | `#fff` | `#fff` |
| **Padding** | `1rem 1.8rem` | — |
| **Font size** | `.75rem` | — |
| **Tracking** | `.2em` | — |
| **Text transform** | `uppercase` | — |
| **Border** | none | — |
| **Transition** | `background .25s ease` | — |
| **Arrow icon** | Translates `+5px` right on hover | — |

### `.btn-secondary` — Outlined CTA
| Property | Default | Hover |
|---|---|---|
| **Background** | transparent | transparent |
| **Border** | `1.5px solid var(--line-dark)` | `1.5px solid var(--red)` |
| **Color** | `var(--text)` | `var(--red)` |
| **Padding** | `1rem 1.8rem` | — |
| **Font size** | `.75rem` | — |
| **Tracking** | `.2em` | — |
| **Text transform** | `uppercase` | — |
| **Transition** | `all .25s ease` | — |

### `.nav-cta` — Header CTA
| Property | Default | Hover |
|---|---|---|
| **Border** | `1.5px solid var(--text)` | `1.5px solid var(--red)` |
| **Background** | transparent | `var(--red)` |
| **Color** | `var(--text)` | `#fff` |
| **Padding** | `.65rem 1.2rem` | — |

### `.contact-submit-btn` — Form Submit
Extends `.btn-primary` with `width: 100%`, `justify-content: center`, `cursor: pointer`, `border: none`.

### Dark surface overrides (`.services-cta-section`)
- `.btn-secondary` on dark → `color: #fff`, `border-color: rgba(255,255,255, 0.3)`
- Hover → `color: var(--red)`, `border-color: var(--red)`

---

## 4. Navigation

### Sticky Nav Bar
```
position: sticky; top: 0; z-index: 100
background: rgba(255, 255, 255, 0.96)
backdrop-filter: blur(10px)
border-bottom: 1px solid var(--line)
padding: 1rem 2rem
layout: flex, justify-content: space-between, align-items: center, gap: 2rem
```

### Logo
- `.logo-svg`: height `90px`, width `auto`, margin `-15px 0` (negative to reduce vertical padding)

### Nav Links
- `.nav-links`: flex row, gap `2rem`, font `.72rem`, tracking `.18em`, uppercase
- Link colour: `var(--text-soft)` → hover: `var(--red)`

### Hamburger (`.nav-hamburger`)
- Hidden on desktop, `display: flex` at `≤ 900px`
- 3 spans: `24px × 2px`, colour `var(--text)`
- Open state (`.nav-hamburger--open`): top/bottom bars rotate ±45°, middle bar fades out

### Mobile Slide-Out Panel (`≤ 900px`)
```
position: fixed; top:0; right:0; bottom:0; width: 260px
background: rgba(255,255,255, 0.98); backdrop-filter: blur(12px)
transform: translateX(100%) → 0 when .nav-links--open
z-index: 105; box-shadow: -4px 0 20px rgba(0,0,0, 0.08)
Links become full-width bordered buttons (1.5px solid #0a0a0a)
```

---

## 5. Layout System

### Container
```css
.container { max-width: 1200px; margin: 0 auto; }
```

### Section Block
```css
section.block { padding: 5rem 2rem; border-top: 1px solid var(--line); }
```

### Alternating section backgrounds
- White sections: default `--bg`
- Tinted sections (`#particle-size`, `#benefits`, `.about-features-section`, `.about-company-section`, `.services-process-section`): `var(--bg-alt)` = `#fafafa`
- Dark sections (`#contact`, `footer`, `.services-cta-section`): `#0a0a0a`

---

## 6. Component Styles

### Section Header Pattern
Used consistently across all sections:

| Element | Class | Style |
|---|---|---|
| **Label** | `.section-label` | `.72rem`, tracking `.3em`, uppercase, colour `--red`, flex with `::before` 40px red bar |
| **Heading** | `.section-h2` | Fluid type `clamp(1.8rem, 4vw, 3rem)`, weight `900`, max-width `20ch`. `.red` spans get `color: var(--red)` |
| **Lead** | `.section-lead` | `1.05rem`, `line-height: 1.65`, colour `--text-soft`, max-width `60ch` |

### Page Hero (About, Services, Contact)
- Class: `.page-hero`
- Padding: `8rem 2rem 5rem`
- Decorative `::before` pseudo: `600px` radial gradient `rgba(224, 32, 32, 0.12)` top-right
- Title: `.page-hero-title` — `clamp(2.2rem, 5.5vw, 4.2rem)`, weight `900`
- Removes `border-top` on the next `section.block`

---

### Tech Card (`.tech-card`)
Features / capabilities grid cards.

| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg)` | `var(--bg-alt)` |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Padding** | `2.5rem` | — |
| **Transform** | none | `translateY(-3px)` |
| **Number** (`.num`) | `.7rem`, tracking `.2em`, colour `--red` | — |

### Benefit Card (`.benefit-card`)
3-column grid cards with tag.

| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg)` | `var(--bg-alt)` |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Padding** | `2rem` | — |
| **Tag** (`.tag`) | `.62rem`, tracking `.2em`, uppercase, colour `--red` | — |

### Service Card (`.service-card`)
Services page cards with feature lists.

| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg-alt)` | — |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Padding** | `2.5rem` | — |
| **Transform** | none | `translateY(-5px)` |
| **Box shadow** | none | `0 12px 40px rgba(0,0,0, 0.06)` |
| **Number** (`.service-card-num`) | absolute top-right, `.7rem`, colour `--text-mute` | — |
| **Feature list** | border-top divider, `.8rem`, colour `--text-soft`, red `✓` prefix | — |

### About Feature Card (`.about-feature-card`)
| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg)` | — |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Transform** | none | `translateY(-4px)` |
| **Number** (`.about-feature-num`) | absolute bottom-right, `3rem`, colour `--line` | colour `rgba(224,32,32, 0.12)` |

### About Stat Card (`.about-stat-card`)
| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg-alt)` | — |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Transform** | none | `translateY(-3px)` |
| **Number** | `2.2rem`, weight `900` | — |
| **Label** | `.65rem`, tracking `.2em`, uppercase, `--text-mute` | — |

### About Benefit Row (`.about-benefit-row`)
Horizontal list with number + body + tag.
- Flex row, gap `2rem`, padding `1.8rem 0`, `border-bottom: 1px solid var(--line)`
- Hover: background `--bg-alt`, horizontal padding adds `1rem`
- Number (`--text-mute`) turns `--red` on hover
- Tag: `.62rem`, tracking `.2em`, uppercase, `--red`

### Contact Detail Card (`.contact-detail-card`)
| Property | Default | Hover |
|---|---|---|
| **Background** | `var(--bg-alt)` | — |
| **Border** | `1px solid var(--line)` | `1px solid var(--red)` |
| **Padding** | `1.8rem` | — |
| **Label** | `.65rem`, tracking `.25em`, uppercase, `--text-mute` | — |
| **Value** | weight `700`, `1rem` | — |

---

## 7. Icon Circle (`.icon-circle`)

Shared icon container across multiple card types.

```css
width: 40px; height: 40px;
display: flex; align-items: center; justify-content: center;
background: var(--bg);
border: 1px solid var(--line);
border-radius: 50%;
margin-bottom: 1rem;
color: var(--text-soft);
```

**Hover** (on parent card hover): `color: var(--red)`, `border-color: var(--red)`

Applied to: `.contact-detail-card`, `.about-feature-card`, `.service-card`, `.tech-card`, `.benefit-card`, `.process-step`

---

## 8. Process Steps (`.process-step`)

| Property | Value |
|---|---|
| **Grid** | 3 columns, no gap |
| **Padding** | `2.5rem 1.5rem 2rem 0` |
| **Number** (`.pn`) | `2.5rem`, weight `900`, colour `--text-mute`, `.red` spans coloured |
| **Title** (h5) | `1.1rem`, weight `800` |
| **Body** | `.88rem`, colour `--text-soft` |

### Services Process Timeline (`.services-process-timeline`)
4-column grid with a `::before` horizontal 2px line connecting steps.
- Step number (`.services-step-num`): `2rem`, weight `900`, background `--bg-alt` (masks the line)

---

## 9. Particle Size Table (`.ps-table`)

| Property | Value |
|---|---|
| **Font** | `'Courier New', Courier, monospace` |
| **Size** | `.85rem` |
| **Header** | 2px bottom border, `.7rem`, tracking `.15em`, uppercase, colour `#0056b3` |
| **Cells** | padding `.9rem 1rem`, bottom border `1px solid var(--line)` |
| **Row hover** | background `#fff`, text colour `--text` |
| **Highlight rows** | `.highlight td` → colour `--red`, weight `500` |
| **Visual dots** (`.ps-dot`) | `border-radius: 50%`, background `--text` → hover: `--red` with glow `rgba(200,16,46, 0.3)` |

---

## 10. Powder Showcase / Marquee

| Element | Style |
|---|---|
| **Section** | background `--bg-alt` |
| **Track** | `animation: marquee-scroll 25s linear infinite`, pauses on hover |
| **Item** | width `220px`, flex-column centred |
| **Hexagon** (`.marquee-hex`) | `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`, hover scale `1.05` |
| **Label** | `.65rem`, tracking `.15em`, uppercase, colour `--text-mute` |

---

## 11. Contact Section (Dark)

- Background: `#0a0a0a`, text: `#fff`
- Grid: `1.2fr 1fr`, gap `4rem`
- Sub-text: `rgba(255,255,255, 0.65)`
- Block labels: `rgba(255,255,255, 0.45)`
- Block values: weight `700`, `1.05rem`
- Address text: weight `400`, `.92rem`, `rgba(255,255,255, 0.6)`
- Link underline: `rgba(255,255,255, 0.25)` → hover: `var(--red)`

---

## 12. Form Controls

| Property | Value |
|---|---|
| **Padding** | `1rem 1.2rem` |
| **Border** | `1px solid var(--line)` |
| **Background** | `var(--bg-alt)` |
| **Font size** | `.95rem` |
| **Focus border** | `var(--red)` |
| **Focus shadow** | `0 0 0 3px rgba(224, 32, 32, 0.08)` |
| **Placeholder** | colour `--text-mute` |
| **Textarea min-height** | `120px`, `resize: vertical` |
| **Select** | custom chevron SVG, `appearance: none` |

### Labels
`.7rem`, tracking `.2em`, uppercase, colour `--text-mute`

---

## 13. Language Selector (`.lang-select`)

| Property | Value |
|---|---|
| **Background** | `rgba(255,255,255, 0.85)` |
| **Border** | `1.5px solid var(--line-dark)`, `border-radius: 4px` |
| **Padding** | `0.5rem 2rem 0.5rem 1rem` |
| **Font** | `.72rem`, weight `700`, tracking `.05em` |
| **Hover** | border & text → `var(--red)`, background → `#fff` |
| **Dropdown arrow** | `::after` pseudo on `.lang-select-wrapper` → `"▾"`, right `0.8rem` |

---

## 14. Footer

| Property | Value |
|---|---|
| **Background** | `#0a0a0a` |
| **Text colour** | `rgba(255,255,255, 0.8)` |
| **Border-top** | `1px solid rgba(255,255,255, 0.1)` |
| **Padding** | `2rem` |
| **Layout** | flex, `space-between`, wrapping |
| **Nav links** (`.f-nav`) | `.65rem`, tracking `.2em`, uppercase, `rgba(255,255,255, 0.5)` → hover: `--red` |
| **Footer text** | `.65rem`, tracking `.2em`, uppercase, `rgba(255,255,255, 0.4)` |

---

## 15. Reveal Animation

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.in {
  opacity: 1;
  transform: none;
}
```

Respects `prefers-reduced-motion: reduce` — animation is disabled entirely.

---

## 16. Responsive Breakpoints

### `≤ 900px` (Tablet)
| Change | Detail |
|---|---|
| Nav | Hamburger shown, CTA hidden, links become fixed slide-out panel (260px) |
| Hero | Padding reduced to `4rem 1.2rem 3rem` |
| Sections | Padding → `3.5rem 1.2rem` |
| Grids | All multi-column grids collapse to 1 column |
| PS table | `font-size: .78rem`, smaller cell padding |
| Stats row | 2 columns |
| Process row | Single column, horizontal borders instead of vertical |
| Page hero | `5rem 1.2rem 3rem`, smaller title |
| Footer | Stacked vertically, centred |

### `≤ 600px` (Phone)
| Change | Detail |
|---|---|
| Logo | Height → `64px` |
| Hero | Padding → `3rem 1rem 2.5rem`, title `clamp(2rem, 9vw, 3rem)` |
| Buttons | Stack vertically, stretch full-width, smaller padding |
| Sections | Padding → `3rem 1rem` |
| Section H2 | `clamp(1.6rem, 7vw, 2.2rem)` |
| Cards | Reduced padding |
| Stats row | Single column |
| Benefits row | Stacked vertically |
| Footer nav | Wrap + centre |

---

## 17. Interaction Patterns Summary

| Pattern | Trigger | Effect |
|---|---|---|
| **Card lift** | Hover on tech/service/about-stat cards | `translateY(-3px to -5px)` + border colour → `--red` |
| **Card tint** | Hover on tech/benefit cards | Background shifts to `--bg-alt` |
| **Card shadow** | Hover on service cards | `box-shadow: 0 12px 40px rgba(0,0,0, 0.06)` |
| **Icon accent** | Hover on parent card | Icon circle border & colour → `--red` |
| **Link underline** | Hover on contact links | Border-bottom colour → `--red` |
| **Button fill** | Hover on primary/nav-cta | Background → `--red` |
| **Arrow slide** | Hover on `.btn-primary` | Arrow icon translates `+5px` right |
| **Hex scale** | Hover on powder marquee item | `scale(1.05)` |
| **Marquee pause** | Hover on marquee track | `animation-play-state: paused` |
| **Row highlight** | Hover on table row / benefit row | Background/text colour change, dot glow |
| **Scroll reveal** | IntersectionObserver adds `.in` | Fade up from `24px`, `.8s ease` |

---

## 18. Colour Usage Map

```
┌─────────────────────────────────────────────────┐
│ LIGHT SURFACES                                  │
│ ┌──────────┐  ┌──────────┐  ┌──────────────┐   │
│ │ --bg     │  │ --bg-alt │  │ --line       │   │
│ │ #ffffff  │  │ #fafafa  │  │ #e5e5e5      │   │
│ │ Cards,   │  │ Tinted   │  │ Borders,     │   │
│ │ Forms    │  │ Sections │  │ Dividers     │   │
│ └──────────┘  └──────────┘  └──────────────┘   │
│                                                 │
│ TEXT                        ACCENT              │
│ ┌──────────┐ ┌──────────┐  ┌──────────────┐   │
│ │ --text   │ │--text-   │  │ --red        │   │
│ │ #0a0a0a  │ │ soft     │  │ #e02020      │   │
│ │ Headings │ │ #555555  │  │ CTAs, Hover, │   │
│ │ Primary  │ │ Body     │  │ Labels, Tags │   │
│ └──────────┘ └──────────┘  └──────────────┘   │
│                                                 │
│ DARK SURFACES (Contact & Footer)                │
│ ┌──────────────────────────────────────────┐    │
│ │ Background: #0a0a0a                      │    │
│ │ Text: #fff / rgba(255,255,255, 0.4–0.8) │    │
│ │ Borders: rgba(255,255,255, 0.1–0.25)    │    │
│ └──────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```
