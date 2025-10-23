import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const quien = [
    "ChatGPT",
    "Microsoft Edge",
    "El servidor de AWS",
    "GitHub Copilot",
    "Mi WiFi",
    "El antivirus",
    "El algoritmo de recomendación",
    "Windows Update",
  ];

  const accion = [
    "borró",
    "reinició",
    "corrompió",
    "actualizó sin permiso",
    "desinstaló",
    "rompió",
    "bloqueó",
    "se colgó y arrastró",
  ];

  const que = [
    "mi tarea final",
    "mi proyecto de programación",
    "mi portafolio web",
    "la base de datos del trabajo",
    "el código del examen",
    "mi presentación de clase",
    "mi repositorio en GitHub",
  ];

  const cuando = [
    "justo antes de entregarla",
    "mientras dormía",
    "durante la clase en vivo",
    "cuando le di a “guardar”",
    "mientras hacía deploy",
    "durante la actualización del sistema",
    "cuando el profe pidió compartir pantalla",
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const excusa = `${pick(quien)} ${pick(accion)} ${pick(que)} ${pick(cuando)}.`;

  const salida = document.querySelector("#excuse");
  if (!salida) {
    console.error("No encontré #excuse en el DOM");
    return;
  }
  salida.textContent = excusa;
});
