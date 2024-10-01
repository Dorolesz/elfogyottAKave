import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const coffeeAlert = document.getElementById('coffeeAlert');
const severitySlider = document.getElementById('severitySlider');

// Súlyossági szintek Bootstrap alert classokkal
const severityLevels = [
  { level: "alert-info", text: "Elfogyott a kávé, töltsd újra! (Információ)" },
  { level: "alert-secondary", text: "Elfogyott a kávé, ez már nem vicc! (Megjegyzés)" },
  { level: "alert-warning", text: "Kávé készlethiány közeleg! (Figyelmeztetés)" },
  { level: "alert-danger", text: "Súlyos kávéhiány! (Súlyos figyelmeztetés)" },
  { level: "alert-dark", text: "Kritikus kávékrízis, azonnali újratöltés szükséges! (!Világvége!)" }
];

// Csúszka értékének változtatásakor
severitySlider.addEventListener('input', function() {
  const value = severitySlider.value;
  coffeeAlert.className = `alert ${severityLevels[value].level}`; // Bootstrap class váltása
  coffeeAlert.textContent = severityLevels[value].text; // Szöveg frissítése
});