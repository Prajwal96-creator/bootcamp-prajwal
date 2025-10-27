const weightRange = document.getElementById("weightRange");
const sampleText = document.getElementById("sample-text");
const currentWeight = document.getElementById("currentWeight");

// Update font weight dynamically
weightRange.addEventListener("input", (e) => {
  const weight = e.target.value;
  sampleText.style.fontWeight = weight;
  currentWeight.textContent = weight;
});
