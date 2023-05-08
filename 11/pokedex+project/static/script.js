document.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#submit-task").disabled = true;

    document.querySelector("#entry-task").onkeyup = function () {

        if (document.querySelector("#entry-task").value.trim().length > 0){
            document.querySelector("#submit-task").disabled = false;
        } else {
            document.querySelector("#submit-task").disabled = true;
        }

    }

    document.querySelector("#form-tasks").onsubmit = function () {

        const request = new XMLHttpRequest();

        request.onload = function (){

            try {
                const data = JSON.parse(this.responseText)
            } catch (error) {
                alert("Pokemon not found!")
            }

            const data = JSON.parse(this.responseText)
            console.log(data);

            document.querySelector(".name").innerHTML = (data.name);

            document.querySelector(".id").innerHTML = (data.id);

            document.querySelector(".hp").innerHTML = "HP: " + (data.stats[0].base_stat);

            document.querySelector(".attack").innerHTML = "Attack: " + (data.stats[1].base_stat);

            document.querySelector(".defense").innerHTML = "Defense: " + (data.stats[2].base_stat);

            document.querySelector(".speed").innerHTML = "Speed: " + (data.stats[5].base_stat);

            document.querySelector(".type1").innerHTML = (data.types[0].type.name);


            document.querySelector(".ability1").innerHTML = (data.abilities[0].ability.name);





            const myImg = document.querySelector("#sprites")
            myImg.src =(data.sprites.front_default);
            
        }

        request.onprogress = function (){
            const myImg = document.querySelector("#load")
            myImg.src = pokemon.png
        }
        
        request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + document.querySelector("#entry-task").value.toLowerCase());
        request.send();

        document.querySelector("#entry-task").value = "";

        document.querySelector("#submit-task").disabled = true;

        return false;

    }


})
  