// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("pats-column").classList.toggle("opaque");	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.toggle("showTrophy");
	document.getElementById("rams-column").classList.toggle("showTrophy");
}

function showTrophy(el){
	el.src = "images/lombardi_trophy.png";
	document.getElementById("rams-blue").src =("images/lombardi_trophy.png");
	document.getElementById("pats-silver").src =("images/lombardi_trophy.png");
}