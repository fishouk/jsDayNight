function htmlBodyClassToggleNight(){	
	var htmlElementBody = document.getElementsByTagName("BODY")[0];
	htmlElementBody.classList.toggle("night");	
	if (typeof(Storage) != "undefined") {
    // Store
    	localStorage.setItem("lastHtmlBodyClass", "htmlElementBodyClass");
	} else {
    	alert("Извините, Ваш браузер не поддерживает Web Storage!");
	}
}
function storageHtmlBodyClass(){
	if (typeof(Storage) != "undefined") {
		var htmlElementBody = document.getElementsByTagName("BODY")[0];
	  	var htmlElementBodyClass = htmlElementBody.getAttribute("class");
	  	if (htmlElementBodyClass === "night"){
	  	var lastHtmlBodyClass = localStorage.getItem("lastHtmlBodyClass");
	  	htmlElementBody.setAttribute("class", "lastHtmlBodyClass");
	  	}
  	} else {
    	alert("Извините, Ваш браузер не поддерживает Web Storage!");
	}
}