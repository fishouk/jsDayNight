function htmlBodyClassToggleNight(){	
	var htmlElementBody = document.getElementsByTagName("BODY")[0];	
	htmlElementBody.classList.toggle("night");	
	var htmlElementBodyClass = htmlElementBody.getAttribute("class");
	if (typeof(Storage) != "undefined") {
    // Store
    	localStorage.setItem("lastHtmlBodyClass", htmlElementBodyClass);
	} else {
    	alert("Извините, Ваш браузер не поддерживает Web Storage!");
	}
}
function storageHtmlBodyClass(){
		var htmlElementBody = document.getElementsByTagName("BODY")[0];
	  	var lastHtmlBodyClass = localStorage.getItem("lastHtmlBodyClass");
	   	if (lastHtmlBodyClass === "day night"){	  	
	  		htmlElementBody.setAttribute("class", lastHtmlBodyClass);
	  	}
  	
}