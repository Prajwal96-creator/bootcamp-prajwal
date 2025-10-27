# Icon Fonts vs SVG — Observations

##  Icon Fonts (Material Symbols)
**Pros:**
- Easy to include via single webfont link.
- CSS control (size, color) like text.
- Can align with text easily.

**Cons:**
- Accessibility limited — icons are “characters,” not semantic.
- Can blur on high-DPI screens.
- Can’t customize stroke/fill per icon.
- Requires full font download (even if only 3 icons used).

---

##  Inline SVG (Heroicons)
**Pros:**
- Fully accessible (role, aria-label).
- Pixel-perfect rendering (no blur).
- Fill and stroke easily controlled in CSS.
- Only loads used icons — better performance.

**Cons:**
- Slightly more verbose markup.
- Requires inline or external SVG management.

---

 **Conclusion:**
Use **SVGs** for most modern UIs (more control, accessibility, performance).  
Use **icon fonts** when prototyping quickly or for legacy systems.
