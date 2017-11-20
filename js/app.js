var textArea =  document.getElementById("insert-comentary");
var boton = document.getElementById("save");
var comentarios = document.getElementById("comentarios");
var contador = document.getElementById("contador");
/*var respuesta = document.getElementById("conteiner");*/

window.addEventListener("load",function(event){
	boton.addEventListener("click", function(event){	
		/*var p = document.createElement("p")
		p.textContent = textArea.value;
		respuesta.appendChild(p);*/
		if(textArea.value){ 
			var conteiner = document.createElement("div"); 	/*crear div*/
			conteiner.id = "conteiner"; //asignando  un  atributo con id 
			var contenido = document.createTextNode(textArea.value); //creando un campo de texto
			conteiner.appendChild(contenido); //colocando dentro del div el texto 
			comentarios.appendChild(conteiner); //dentro de la section se le asigna otro hijo llamado conteiner
			textArea.value = ""; /*lo ponga en blanco cunado envie su valor anterior*/
		

	
		}
		else{ /*texto vacio*/
			 /*probando*/
			event.preventDefault(); /*cancela el evento*/
			alert("noooo");
			boton.style.background = "#1da1f2;"
			boton.style.color = "color: red;"
		}

	});

/*	textArea.value.addEventListener("focus", function(event){
			boton.style.backgroundColor = "#1da1f2;"
	});*/
/*
	var totalCaracteres = 140;
	var caracteresArea = textArea.value;
	for (var caracteresArea = 0; caracteresArea < totalCaracteres.length; i++) {
	 var restar = totalCaracteres - caracteresArea;
	}
*/
});