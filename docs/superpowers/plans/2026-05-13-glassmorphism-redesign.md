# Glassmorphism Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current flat dark UI with a glassmorphism style — semi-transparent cards with backdrop blur layered over the existing animated star background, across both `/` and `/results`.

**Architecture:** Pure CSS changes across 11 files. A new set of CSS custom properties in `index.css` provides the glass tokens used by all components. Each component CSS file is updated independently, referencing those tokens. No JSX, no JS, no routing changes.

**Tech Stack:** Plain CSS, React 18 (CRA), CSS custom properties, `backdrop-filter`

**Spec:** `docs/superpowers/specs/2026-05-13-visual-redesign-glass-design.md`

---

### Task 1: CSS Variables & Background

**Files:**
- Modify: `src/index.css`

Update the CSS custom properties and body background to match the darker gradient that shows off the star animation best. Add glass utility tokens used by all components.

- [ ] **Step 1: Update `src/index.css`**

Replace the entire `:root` block and body rule with:

```css
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

:root {
    --bgColor: #0d1117;
    --bgColor2: #1a2233;
    --accentColor: #ffffff;
    --font: 'Karla', sans-serif;
    --delay: .3s;

    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-bg-strong: rgba(255, 255, 255, 0.12);
    --glass-border: rgba(255, 255, 255, 0.15);
    --glass-blur: blur(10px);
    --glass-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);

    --text-primary: #ffffff;
    --text-secondary: #e2e8f0;
    --text-muted: #94a3b8;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: var(--font);
    background: radial-gradient(ellipse at bottom, var(--bgColor) 0%, var(--bgColor2) 100%);
    opacity: 0;
    animation: 1s ease-out var(--delay) 1 transitionAnimation;
    animation-fill-mode: forwards;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3000`. Background should be slightly darker/deeper blue. Star animation still visible. No layout breakage.

---

### Task 2: Language Selector

**Files:**
- Modify: `src/App.css`

The language selector currently uses only `.language-selector` and `.language-selector button.selected`. Replace with pill-style buttons that match the glass aesthetic.

- [ ] **Step 1: Replace language selector rules in `src/App.css`**

Find and replace the existing `.language-selector` and `.language-selector button.selected` rules:

```css
.language-selector {
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
    gap: 6px;
}

.language-selector button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: var(--text-muted);
    padding: 4px 12px;
    font-size: 11px;
    font-family: var(--font);
    cursor: pointer;
}

.language-selector button.selected {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: var(--text-primary);
}
```

- [ ] **Step 2: Verify in browser**

Language selector pills visible top-right. Active language has subtle highlight. Clicking still switches language.

---

### Task 3: Profile Picture

**Files:**
- Modify: `src/components/ProfilePicture/ProfilePicture.css`

Add a glass-style border and shadow to the avatar so it integrates with the new aesthetic.

- [ ] **Step 1: Update `src/components/ProfilePicture/ProfilePicture.css`**

```css
.profilePicture, .profilePicture img {
    position: relative;
    width: 196px;
    height: 196px;
    display: block;
    margin: 35px auto 20px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
    -webkit-tap-highlight-color: transparent;
}
```

- [ ] **Step 2: Verify in browser**

Profile picture has a subtle white rim and shadow. Looks lifted from the background.

---

### Task 4: Username & Title Typography

**Files:**
- Modify: `src/components/UserName/UserName.css`
- Modify: `src/components/Title/Title.css`

The current title uses a gradient text clip trick. Replace with clean typography. UserName becomes bold white; Title becomes muted uppercase label.

- [ ] **Step 1: Update `src/components/UserName/UserName.css`**

```css
.userName {
    color: var(--text-primary);
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 1.2;
    display: block;
    font-family: var(--font);
    width: 100%;
    text-align: center;
    text-decoration: none;
}
```

- [ ] **Step 2: Update `src/components/Title/Title.css`**

The `background-clip: text` trick makes text invisible unless the gradient shows through. Reset it and use a plain color.

```css
.title {
    margin-top: 6px;
    padding-bottom: 4px;
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    display: block;
    font-family: var(--font);
    width: 100%;
    text-align: center;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: var(--text-muted);
}
```

- [ ] **Step 3: Verify in browser**

Name appears large and white. Role/title appears smaller, uppercase, muted gray below it.

---

### Task 5: Subtitle Pill

**Files:**
- Modify: `src/components/Subtitle/Subtitle.css`

The rotating tech-stack tag should appear as a small pill. The current file uses the same gradient-text clip trick — reset it and add pill styling.

- [ ] **Step 1: Update `src/components/Subtitle/Subtitle.css`**

`Subtitle.jsx` renders a plain `<div className="subtitle">` with no outer wrapper in `App.js`. Use `display: block; width: fit-content; margin: 0 auto` to center the pill.

```css
.subtitle {
    display: block;
    width: fit-content;
    margin: 0 auto 8px;
    padding: 5px 14px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: var(--font);
    text-align: center;
    overflow: visible;
    background-clip: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: var(--text-secondary);
}
```

- [ ] **Step 2: Verify in browser**

Rotating tech tag appears as a centered small pill. Text visible (not invisible). Pill has subtle glass border.

---

### Task 6: Bio Card

**Files:**
- Modify: `src/components/Bio/Bio.css`

The bio section wraps the description text and the embedded Vimeo video. Give `.bio-box` a full glass card treatment.

- [ ] **Step 1: Update `src/components/Bio/Bio.css`**

```css
.bio-box {
    max-width: 600px;
    width: auto;
    display: block;
    margin: 10px auto;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    padding: 14px 16px;
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: var(--glass-shadow);
}

.bio {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.6;
    font-family: var(--font);
    text-align: justify;
    text-decoration: none;
}
```

- [ ] **Step 2: Verify in browser**

Bio section has a frosted glass card. Text is light gray on the semi-transparent background. Vimeo embed still visible inside the card.

---

### Task 7: Description Hyperlinks (empty section)

**Files:**
- Modify: `src/components/DescriptionHyperlinks/DescriptionHyperlinks.css`

`content_1` is now empty so this component renders nothing visible. Update styles to be consistent and ensure no ghost spacing appears.

- [ ] **Step 1: Update `src/components/DescriptionHyperlinks/DescriptionHyperlinks.css`**

```css
.bio-box {
    max-width: 600px;
    width: auto;
    display: block;
    margin: 0 auto;
}

.bio {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.6;
    font-family: var(--font);
    text-align: justify;
    text-decoration: none;
}
```

- [ ] **Step 2: Verify in browser**

No visible spacing gap between bio section and link buttons.

---

### Task 8: Link Buttons

**Files:**
- Modify: `src/components/HiperLink/HyperLink.css`

Each link is an `<a>` with class `.link`, inside `.links`. Apply glass style. On hover: slightly brighter. Note: `Result.jsx` imports this file too — the "Volver" back button will inherit these styles, which is intentional.

- [ ] **Step 1: Update `src/components/HiperLink/HyperLink.css`**

```css
.links {
    max-width: 675px;
    width: auto;
    display: block;
    margin: 10px auto;
}

.link {
    position: relative;
    background: var(--glass-bg-strong);
    border: 1px solid var(--glass-border);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-radius: 12px;
    box-shadow: var(--glass-shadow);
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    display: block;
    margin: 0 10px 8px;
    padding: 13px 16px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.2s ease, border-color 0.2s ease;
}

@media (hover: hover) {
    .link:hover {
        background: rgba(255, 255, 255, 0.18);
        border-color: rgba(255, 255, 255, 0.3);
        color: var(--text-primary);
    }
}

.link:active {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.3);
    color: var(--text-primary);
}
```

- [ ] **Step 2: Verify in browser**

All links appear as glass pills. Hover brightens them. "Volver" button on `/results` also has glass style. All links still navigate correctly.

---

### Task 9: Accordion (Results page)

**Files:**
- Modify: `src/components/Accordion.css`

Accordions in `/results` need glass treatment: closed state is subtler, open/expanded state is more opaque, content area has a darker inset background.

- [ ] **Step 1: Update `src/components/Accordion.css`**

```css
.result-title {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    padding: 12px 14px;
    line-height: 1.25;
    font-family: var(--font);
    text-align: left;
    text-decoration: none;
    cursor: pointer;
}

.result {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin: 0;
    padding: 10px 14px;
    line-height: 1.6;
    font-family: var(--font);
    text-align: justify;
    text-decoration: none;
    cursor: auto;
}

.accordion {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 12px;
    margin: 0 10px 8px;
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.accordion.expanded {
    background: rgba(255, 255, 255, 0.10);
    border-color: rgba(255, 255, 255, 0.20);
}

.accordion-content {
    padding: 10px 14px;
    background: rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.accordion-content a {
    text-decoration: underline;
    color: var(--text-muted);
    cursor: pointer;
}

.accordion.expanded .accordion-content a {
    cursor: auto;
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:3000/results`. Accordion items appear as glass cards. Clicking a card expands it with the darker content area. Clicking again collapses it.

---

### Task 10: Result Page Container

**Files:**
- Modify: `src/components/Result/Result.css`

The `.result-box` wraps all accordions. No card treatment needed (it's a layout wrapper). Update text colors and fix the `.result-main-title` gradient-text clip.

- [ ] **Step 1: Update `src/components/Result/Result.css`**

```css
.result-box {
    max-width: 675px;
    width: auto;
    display: block;
    margin: 10px auto;
}

.result {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.6;
    font-family: var(--font);
    text-align: justify;
    text-decoration: none;
}

.result-main-title {
    margin-top: 6px;
    padding-bottom: 4px;
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    display: block;
    font-family: var(--font);
    width: 100%;
    text-align: center;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: var(--text-muted);
}
```

- [ ] **Step 2: Verify in browser**

`/results` page: title/role visible and muted. Accordions readable. No invisible text.

---

### Task 11: Final Cross-Page Check

No file changes — visual QA pass.

- [ ] **Step 1: Check home page**

Open `http://localhost:3000`:
- Profile picture has glass border
- Name bold and white, role muted uppercase below
- Rotating tech tag appears as pill
- Bio is a glass card
- All link buttons are glass pills
- Language selector pills top-right work

- [ ] **Step 2: Check results page**

Navigate to `http://localhost:3000/results`:
- Star background visible
- Accordion cards have glass style (closed: subtle, open: more opaque)
- Expanded accordion has darker content area
- All text readable
- "Volver" back button has glass style and navigates back

- [ ] **Step 3: Check language switch**

Toggle ES ↔ EN. Verify text changes in both pages. Verify Vimeo video still embeds in Bio.

- [ ] **Step 4: Confirm no solid white/opaque backgrounds remain**

Using DevTools, inspect `.link`, `.bio-box`, `.accordion` — all should have `rgba` backgrounds, not solid colors.
