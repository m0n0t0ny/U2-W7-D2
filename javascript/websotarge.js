//  localStorage mantiene i dati fino a pulizia manuale
//  sessionStorage  perde i dati a chiusura finestra

// .setltem(key, value) -> salva l'elemento nello storage
// .getltem(key) -> cerca un elemento già salvato con una chiave specifica (ritorna null se non trovata)
// .remove Item(key) -> rimuove una singala chiave dallo storage e conseguente valore
// .clear() -> cancella tutti dati dallo storage per quello specifico dominio
// i valori tornati dagli storage sono SEMPRE in formato stringa!

// localStorage.setItem("liveLecture", true);
// const isLive = localStorage.getItem("liveLecture");
// console.log(isLive === "true" ? true : false);
// localStorage.removeItem("petName");
// localStorage.clear();

// dichiaro la costante per riconoscere errori velocemente
// const LIVE_LECTURE_KEY = "liveLecture";
// salvo un elemnto nello storage
// localStorage.setItem(LIVE_LECTURE_KEY, true);
// recupero un valore da localStorage
// const isLive = localStorage.getItem(LIVE_LECTURE_KEY);
// restituisco un output di controllo per bugtesting
// console.log(isLive === "true" ? true : false);
// elimino il valore da localStorage
// localStorage.removeItem(LIVE_LECTURE_KEY);
// elimino tutto il contenuto di localStorage per il dominio corrente
// const removeKey = function () {
//   console.log(localStorage.getitem(LIVE_LECTURE_KEY));
//   localStorage.removeItem(LIVE_LECTURE_KEY);
//   console.log(localStorage.getItem(LIVE_LECTURE_KEY));
// };

//  numbers
// localStorage.setItem("numberItem", 5890);
// console.log(parseInt(localStorage.getItem("numberItem")));

// localStorage.setItem("array Item", [54, 0, 10]) "54, 0, 10" non molto gestibile
// localStorage.setItem("arrayItem", JSON. e, 101)); / f 34,0, 10") "
// console. log(Array . isArray( JSON . parse( localStorage. getltem( "arrayltem" ) ) ) ) ;

// localStorage.clear();

const usernameInput = document.getElementById("username");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");

const savedUsername = localStorage.getItem("savedUsername");
const greetUsername = document.getElementById("greetUsername");

window.addEventListener("DOMContentLoaded", () => {
  if (savedUsername) {
    usernameInput.value = savedUsername;
    greetUsername.textContent = savedUsername;
  }
});

saveButton.addEventListener("click", function () {
  const username = usernameInput.value;

  localStorage.setItem("savedUsername", username);

  greetUsername.textContent = username;
  usernameInput.value = "";
});

clearButton.addEventListener("click", function () {
  localStorage.removeItem("savedUsername");

  usernameInput.value = "";
  greetUsername.textContent = "user";
});
