//variables
      const listaTweets=document.getElementById("lista-tweets");

      const boton=document.getElementById("boton");

//listeners
   eventListener();
          function eventListener() {
  	
               boton.addEventListener("click", agregarTweet);

               listaTweets.addEventListener("click", borrarTweet);
  
           };


//funciones
	function agregarTweet(e) {
		                    e.preventDefault();
	                            let tweet=document.getElementById("tweet").value;
	                            let botonBorrar=document.createElement("a");
	                                botonBorrar.classList="borrar-tweet";
	                                botonBorrar.style.color = 'red';
	                                botonBorrar.innerText=" X";
	 

	                        const li=document.createElement("li");
	                              li.innerText=tweet;
	                              li.appendChild(botonBorrar);
	                              listaTweets.appendChild(li);
	};

	function borrarTweet(e){
		e.preventDefault();

		if(e.target.className==="borrar-tweet"){
		           e.target.parentNode.remove();
	                       }
	};

