window.onload = function () {
  let who = [
    "ChatGPT",
    "Microsoft Edge",
    "El servidor de AWS",
    "GitHub Copilot",
    "Mi WiFi",
    "El antivirus",
    "Windows Update",
  ];

  let accion = [
    "borró",
    "reinició",
    "corrompió",
    "actualizó sin permiso",
    "desinstaló",
    "bloqueó",
    "se colgó y arrastró",
  ];

  let what = [
    "mi tarea final",
    "mi proyecto de programación",
    "mi portafolio web",
    "la base de datos del trabajo",
    "el código del examen",
    "mi repositorio en GitHub",
  ];

  let when = [
    "justo antes de entregarla",
    "mientras dormía",
    "cuando le di a “guardar”",
    "mientras hacía deploy",
    "durante la actualización del sistema",
    "cuando el profe pidió compartir pantalla",
  ];

  let whoAleatorio = seleccionarAleatorio(who);
  let actionAleatorio = seleccionarAleatorio(action);
  let whatAleatorio = seleccionarAleatorio(what);
  let whenAleatorio = seleccionarAleatorio(when);

  let excusa = `${whoAleatorio} ${actionAleatorio} ${whatAleatorio} ${whenAleatorio}.`;
  document.getElementById("excuse").innerHTML = excusa;
};

function seleccionarAleatorio(lista) {
  let indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}
