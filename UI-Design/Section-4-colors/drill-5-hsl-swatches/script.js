// 🎨 Base accent color — blue hue
const baseHue = 210;

// Define ranges for lightness and saturation
const lightnessValues = [25, 40, 55, 70, 85];
const saturationValues = [40, 60, 80, 100];

// Swatch container
const grid = document.getElementById("swatch-grid");

for (let s of saturationValues) {
  for (let l of lightnessValues) {
    const hsl = `hsl(${baseHue}, ${s}%, ${l}%)`;

    // Create swatch element
    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = hsl;

    // Compute approximate OKLCH (optional)
    const oklch = approximateOKLCH(baseHue, s, l);

    // Label element
    const label = document.createElement("div");
    label.className = "swatch-label";
    label.innerHTML = `${hsl}<br><small>${oklch}</small>`;

    swatch.appendChild(label);
    grid.appendChild(swatch);
  }
}

// 🔹 Helper to estimate OKLCH from HSL (simplified approximation)
function approximateOKLCH(h, s, l) {
  const chroma = (s / 100) * 0.37;
  const light = l / 100;
  return `oklch(${light.toFixed(2)} ${chroma.toFixed(2)} ${h}°)`;
}
