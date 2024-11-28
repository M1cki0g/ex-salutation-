function saluer() {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  let age = document.getElementById("age").value;
  let profession = document.getElementById("profession").value;
  let msg = document.getElementById("msg");

  if (prenom == "" || nom == "" || age == "" || profession == "") {
    msg.textContent = "Tous les champs doivent etre remplis";
  } else {
    msg.textContent =
      "Bonjour " +
      prenom +
      " " +
      nom +
      "! Vous avez " +
      age +
      " ans. Vous etes " +
      profession;
  }

  if (isNaN(age) || age < 18) {
    msg.textContent = "L'age doit etre un nombre entier superieur ou egal a 18";
  }
}
