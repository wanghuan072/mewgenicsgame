# Mewgenics Guide — Design System (ui-ux-pro-max)

## 1. Pattern
- **Landing:** Hero-centric with clear H1, subtitle, dual CTA, search as secondary.
- **Sections:** Quick Access (stat cards) → Feature Spotlight → Trending → Guides → FAQ.
- **CTA:** Primary = Breeding Calculator; Secondary = Browse Database.

## 2. Color (游戏主题 — 暖褐 / sepia / 白字发光)
| Role       | Hex       | Usage |
|-----------|-----------|--------|
| Primary   | #c9a227   | Links, accent, stat numbers (warm gold) |
| CTA       | #b8860b   | Primary button |
| Background| #1e1b18   | Page bg (warm dark) |
| Bg elevated | #2c2825 | Cards, sections |
| Text      | #e8e4dc   | Primary text (cream) |
| Text muted| #a89f94   | Secondary text |
| Border    | #5c5349   | Borders |
| Glow      | #fff      | Title glow (white halo, 贴近游戏标题图) |

- **Gradient Hero:** 暖褐到深褐 (#2c2620 → #1e1b18 → #181510).
- **Effects:** H1 白字发光 (text-shadow); 主按钮暖金色.
- **Hero 布局:** 左右分栏，左侧文案，右侧放图 (/hero-mewgenics.png).

## 3. Typography (Gaming — Russo One + Chakra Petch)
- **Heading:** Russo One (display/headings).
- **Body:** Chakra Petch (300, 400, 500, 600, 700).
- **Mood:** gaming, bold, action.
- **Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Russo+One&display=swap');
```

## 4. Effects
- Hero: gradient overlay, H1 glow (text-shadow), button glow (box-shadow).
- Cards: hover border/background transition 200ms.
- Stat numbers: subtle glow.
- All clickable: cursor-pointer, transition 150–300ms.

## 5. Avoid
- Emoji as icons (use SVG).
- Missing focus states.
- No hover feedback on interactive elements.

## 6. Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
