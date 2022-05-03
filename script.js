// Recuperer la val d'un input 
// document.getElementById('res').value

function getValue() {
	let rec = document.getElementById("rec").value;
	if (rec == 4) {
		alert("Bonne réponse!")
	} else {
		alert("Mauvaise réponse! Réessayez")
	}

}