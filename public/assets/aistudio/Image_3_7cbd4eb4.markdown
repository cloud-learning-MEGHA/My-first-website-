---
name: Cyber Threat & Cloud Architecture
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#f9f5ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#d8d7ff'
  on-tertiary-container: '#4a4cd7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a disciplined, defense-grade posture tailored for cybersecurity analysts, infrastructure architects, and cloud security engineers. The visual identity reflects absolute precision, telemetry awareness, and modern systems engineering. 

The aesthetic is anchored in **Technical Glassmorphism** layered over deep void tones. Visual layers convey spatial depth through translucent dark panels, subtle 1px circuit-crisp borders, and restrained neon luminescence. Surfaces evoke high-end terminal dashboards and hardened operational consoles without descending into retro-arcade tropes. 

Interactions are rapid and decisive. Motion mimics active network response: immediate token changes, sharp luminescence shifts, and controlled edge reflections.

## Colors

The palette operates strictly within high-contrast dark space:

- **Base Canvas (`#0A0E17`) & Layered Neutral (`#0D1117`):** Non-reflective obsidian backdrops that absorb ambient noise and eliminate glare.
- **Electric Cyan (`#00F2FE`):** Primary signal color. Designates system focal points, high-priority routes, primary actions, and critical status links.
- **Neon Emerald (`#10B981`):** Telemetry status indicator. Marks active infrastructure health, validated cryptographic verifications, low-latency metrics, and production readiness.
- **Subtle Violet/Indigo (`#6366F1`):** Ambient accent used for deep architectural boundaries, passive highlights, and tertiary contextual tags.

Surfaces use derived alpha channels over `#0D1117`:
- **Surface Muted:** `rgba(13, 17, 23, 0.65)` with `backdrop-filter: blur(12px)`
- **Surface Elevated:** `rgba(16, 24, 39, 0.75)` with `backdrop-filter: blur(16px)`
- **Ghost Outlines:** `rgba(0, 242, 254, 0.15)` for default resting borders; transitions to `rgba(0, 242, 254, 0.40)` on active states.

## Typography

Typography balances clean executive legibility with dense technical utility:

- **Primary Structure (Geist):** Handles high-level conceptual scanning, system architecture briefs, project overviews, and structural hierarchy. Rendered with tight negative tracking on headlines to maintain high geometric tension.
- **Terminal & Telemetry Layer (JetBrains Mono):** Applies to all metadata points, telemetry status logs, security CVEs, infrastructure paths, code snippets, and interface chip markers. Never mix Geist into operational data streams.

## Layout & Spacing

The layout follows a rigid 12-column fluid grid system pinned to a max-width of 1280px on desktop environments to maintain scan efficiency across dense data arrays.

- **Desktop (>= 1024px):** 12 columns, 1.5rem gutters, 3rem margins. Complex telemetry cards and architecture modules span 4, 6, or 8 columns.
- **Tablet (768px - 1023px):** 8 columns, 1rem gutters, 2rem margins. Multi-column metric displays consolidate into balanced dual-column stacks.
- **Mobile (< 768px):** 4 columns, 1rem gutters, 1.25rem margins. All cards collapse into a strict single-column stream.

Internal component rhythm follows a base-4 spatial module: `space-xs` (4px) for micro tag padding, `space-sm` (8px) for icon/label pairings, `space-md` (16px) for interior card sections, and `space-xl` (40px) for separating logical architectural segments.

## Elevation & Depth

Spatial elevation relies on translucent planes, selective edge illumination, and chromatic back-glows:

- **Level 0 (Canvas Base):** Solid `#0A0E17`. Zero elevation. Houses background architectural grid lines rendered at 4% white opacity.
- **Level 1 (Default Glass Panels):** `rgba(13, 17, 23, 0.70)` with `backdrop-filter: blur(12px)` and a uniform `1px solid rgba(0, 242, 254, 0.12)`. Casts no drop shadow at rest.
- **Level 2 (Hover & Focus State):** Surface lightens to `rgba(16, 24, 39, 0.85)`. Border transitions to `rgba(0, 242, 254, 0.35)`. Projects a directional glow: `0 8px 32px -4px rgba(0, 242, 254, 0.12), 0 0 1px 1px rgba(0, 242, 254, 0.25)`.
- **Level 3 (Modals & Command Palettes):** `rgba(10, 14, 23, 0.95)` with `backdrop-filter: blur(24px)`, framed by `1px solid rgba(99, 102, 241, 0.30)`, with an ambient floor drop shadow: `0 24px 64px -12px rgba(0, 0, 0, 0.75), 0 0 24px 0 rgba(99, 102, 241, 0.15)`.

## Shapes

The design system utilizes **Soft (Level 1)** curvature tokens across all components.

- **Micro elements & inputs:** 4px (`0.25rem`) border radius. Maintains a sharp, engineered tool appearance.
- **Containers, cards, and modal frames:** 8px (`0.5rem`) border radius (`rounded-lg`). Prevents organic softness while avoiding harsh 90-degree points that disrupt glass border refraction.
- **Terminal views and data tables:** Kept strictly at 4px (`0.25rem`) to align with monospaced grid alignment.

## Components

### Buttons
- **Primary Action:** Solid background using `#00F2FE` with `#0A0E17` bold typography (`Geist`, weight 600). Hover triggers an intense outer bloom (`0 0 16px rgba(0, 242, 254, 0.45)`) and slight brightness elevation.
- **Secondary / Cyber Wire:** Transparent fill with `1px solid rgba(0, 242, 254, 0.25)` and `#00F2FE` text. On hover: fill transitions to `rgba(0, 242, 254, 0.08)`, border accelerates to `rgba(0, 242, 254, 0.6)`.
- **Subtle / Ghost:** Transparent fill with neutral high-contrast text (`#E2E8F0`). Hover activates `rgba(255, 255, 255, 0.05)`.

### Chips & Technical Badges
- Constructed strictly using `JetBrains Mono` (`label-md`).
- **Status Valid / Secure:** Fill `rgba(16, 185, 129, 0.10)`, text `#10B981`, border `1px solid rgba(16, 185, 129, 0.25)`. Prefix with a pulsing 6px radial dot indicator.
- **Tech Stack / Protocol Tag:** Fill `rgba(99, 102, 241, 0.08)`, text `#A5B4FC`, border `1px solid rgba(99, 102, 241, 0.20)`. Padding: `2px 8px`.

### Cards & Project Showcases
- Surface: Glassmorphic Level 1 specifications with 16px internal padding.
- Top bar contains a mini status header: architecture type, target environment (e.g., `AWS::us-east-1`, `K8s::Cluster`), and a subtle latency/integrity indicator.
- Dynamic hover elevates card border to Cyan glow with smooth 200ms transition.

### Input Fields & Interactive Terminals
- Input frames use `#0D1117` at 80% opacity, bordered with `rgba(255, 255, 255, 0.10)`. Text utilizes `JetBrains Mono` for precise character recognition.
- Active focus removes default OS outline, substituting `1px solid #00F2FE` alongside a localized inset aura (`box-shadow: inset 0 0 8px rgba(0, 242, 254, 0.15)`).

### Checkboxes & Toggle Radios
- Square 16px boxes with 2px corners.
- Unchecked: `1px solid rgba(255, 255, 255, 0.20)`, background `rgba(13, 17, 23, 0.80)`.
- Checked: Electric Cyan background `#00F2FE` featuring an obsidian checkmark icon and a high-frequency cyan micro-glow.

### Terminal & Metric Stream Displays
- Dedicated UI blocks dedicated to infrastructure logs, system metrics, and architecture schemas.
- Features an ultra-dark header (`#070A0F`), simulated terminal window controls (three muted dots: red, yellow, emerald), monospaced text hierarchy, and a perpetual blinking cyan cursor (`#00F2FE`).