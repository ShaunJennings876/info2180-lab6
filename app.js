
function main(){

  window.onload = function (){
    fetch("superheroes.php")
  		.then(response => response.json())
  		.then(data => {
  			ul = document.createElement("ul");

        data.forEach( result => {
    		let li = document.createElement("li");
    		li.appendChild(document.createTextNode(result));
    		ul.appendChild(li);
	      });

        document.getElementById("#result").appendChild(ul);
  		})
  }

  document.getElementsByClassName('btn')[0].addEventListener("click", () function() {
	fetch(`superheroes.php?query=${searchValue.value}`)
		.then(response => response.json())
		.then(data => {
			if(Array.isArray(data)){

        ul = document.createElement("ul");

        data.forEach( result => {
    		let li = document.createElement("li");
    		li.appendChild(document.createTextNode(result));
    		ul.appendChild(li);
	      });

        document.getElementById("#result").appendChild(ul);

			}else if(typeof data == "object"){

          result.innerHTML = ""
          let header = document.createElement("div")
          let alias = document.createElement("h2")
          alias.appendChild(document.createTextNode(data.alias))
          let name = document.createElement("h3")
          name.appendChild(document.createTextNode(data.name))
          let bio = document.createElement("p")
          bio.appendChild(document.createTextNode(data.biography))
          header.appendChild(alias)
          header.appendChild(name)
          header.appendChild(bio)
          result.appendChild(header);

			}else{
				result.innerHTML = data;
			}
		})

  });


}



main();
