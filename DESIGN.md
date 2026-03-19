# Design System: The Editorial Monograph

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Gallery"**
This design system moves away from the "template" aesthetic of standard portfolios to embrace the high-end feel of a physical art monograph or a premium architectural journal. It is built on the philosophy of **Intentional Asymmetry** and **Tonal Depth**. 

Instead of a rigid, centered grid, we lean into generous, "expensive" whitespace (using the `20` and `24` spacing tokens) to frame content. We break the visual monotony by overlapping `display-lg` typography with `surface-container` elements, creating a sense of physical layering. The goal is a digital experience that feels bespoke, quiet, and authoritative.

---

## 1.1 Production notes (Tailwind + GitHub Pages)
- **Entrypoint**: `index.html` (GitHub Pages default)
- **Styling**: Tailwind CSS is compiled locally into `assets/tailwind.css` (no Tailwind CDN in production)
- **Build**: `npm run build:css` (or `npm run watch:css` while editing)

## 2. Colors & Surface Philosophy
The palette utilizes a high-contrast foundation of `primary` (Deep Charcoal/Black) and `surface` (Crisp Off-White), punctuated by a sophisticated `secondary` (Soft Gold/Ochre) to guide the eye.

### The "No-Line" Rule
**Explicit Instruction:** Avoid borders for sectioning/containment. Structural boundaries should be defined primarily through background color shifts.  
**Allowed exception (current site):** subtle 1px *accent* rules (e.g. a left-edge rule in compact metadata tiles) are acceptable when used sparingly and at low opacity.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked premium papers.
*   **Base Layer:** `surface` (#f7f9fb)
*   **Subtle Recess:** `surface-container-low` (#f2f4f6) for large background sections.
*   **Elevated Content:** `surface-container-lowest` (#ffffff) for "cards" or floating modules to create a crisp, high-end lift.
*   **Functional Nesting:** Use `surface-container-high` (#e6e8ea) only for small interactive elements within a container, like search bars or toggle tracks.

### The "Glass & Gradient" Rule
To add "soul" to the portfolio:
*   **Glassmorphism:** For navigation bars or floating action buttons, use `surface` at 80% opacity with a `backdrop-filter: blur(20px)`.
*   **Signature Gradients:** For primary CTAs or hero decorative elements, use a linear gradient from `primary` (#000000) to `primary-container` (#131b2e) at a 135-degree angle. This prevents the black from feeling "flat" and adds a subtle cinematic depth.

---

## 3. Typography
The system relies on the tension between the intellectual `notoSerif` and the functional `manrope`.

*   **The Narrative (Serif):** `display-lg` through `headline-sm` use **Noto Serif**. Use these for personal statements, project titles, and "big ideas." To achieve the premium look, decrease letter-spacing for `display-lg` by -0.02em.
*   **The Utility (Sans-Serif):** `title-lg` through `label-sm` use **Manrope**. This is used for navigation, metadata, and body copy.
*   **Hierarchy Note:** Always pair a `display-md` serif heading with a `label-md` sans-serif eyebrow (all-caps, tracked out +0.1em) to establish an editorial rhythm.

---

## 4. Elevation & Depth
We eschew traditional drop shadows for **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container` section. The delta between `#ffffff` and `#eceef0` provides enough contrast to define shape without visual clutter.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a multi-layered blur: `box-shadow: 0 10px 40px rgba(25, 28, 30, 0.06)`. The shadow color must be a derivative of `on-surface` (#191c1e), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#c6c6cd) at 20% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary CTA (current site):** Background: `secondary-container` (#fcd400); Text: `on-secondary-container` (#6e5c00). This is the “Vibrant Accent” for high-conversion actions (e.g. “Contact me”).
*   **Neutral CTA:** Transparent background with subtle hover tint (use when gold would be too loud).
*   **Tertiary:** No background. Underline using `outline-variant` at 40% opacity.

### Cards & Project Previews
*   **Constraint:** No borders. No dividers.
*   **Structure:** Use `surface-container-lowest`. Padding should be generous (`8` or `2.75rem`). 
*   **Interaction:** On hover, shift the background to `surface-bright` and apply a 4% `on-surface` tint.

### Contact
*   **Preference (current site):** Use a single `mailto:` CTA button (no form fields) for clarity and low-friction contact.
*   **Floating email CTA:** A bottom-right button may appear only when the contact section is not visible, to keep “Contact me” within reach without adding clutter.

### Signature Component: The "Editorial Float"
A layout pattern where an image (with `xl` 0.75rem corners) is offset against a `surface-container-highest` background block, with `display-sm` text overlapping both layers.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace the Asymmetric:** Align content to a 12-column grid but leave columns 1-3 empty in the hero section to create "entry breathing room."
*   **Use Spacing as a Tool:** Use `24` (8.5rem) spacing between major sections to signal a change in narrative.
*   **Tint your Grays:** Ensure all neutral surfaces use the `surface` family to maintain the warm, sophisticated charcoal-and-cream undertone.

### Don’t:
*   **Don't use Dividers:** Never use a horizontal rule `<hr>` to separate content. Use a `3.5rem` (`10`) gap instead.
*   **Don't Over-Round:** Stick to `md` (0.375rem) for functional elements and `xl` (0.75rem) for large containers. Avoid `full` (pill shapes) except for small status chips.
*   **Don't Center Everything:** Center-aligned text is for poetry; left-aligned text is for professional portfolios. Keep body copy left-aligned for readability and a modern edge.