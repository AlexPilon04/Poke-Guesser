
const PokemonCount = 1025;
var current = 0;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}}

window.onload = async function() {
    var input = document.getElementById("guessbox")
    input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        guess();
    }
});
    displayRandom();
}

async function displayRandom() {
    let x = Math.floor((Math.random() * 1025) + 1);
    current = x;
    document.getElementById("pokemon-img").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + current.toString() + ".png"
    document.getElementById("pokemon-img").classList.add("hidden");

    let url = "https://pokeapi.co/api/v2/pokemon/" + current.toString();

    let res = await fetch(url);
    let pokemon = await res.json();

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    pokedex[current] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType}

    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    // let num = document.createElement("span");
    //     num.innerText = current.toString();
    //     num.classList.add("type-box");
    //     num.classList.add("mystery"); //adds background color and font color
    //     typesDiv.append(num);

    let types = pokedex[current]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = "?????";
        type.classList.add("type-box");
        type.classList.add("mystery"); //adds background color and font color
        typesDiv.append(type);
    }

    console.log(pokedex);
}

function guess() {
    let g = document.getElementById("guessbox").value;
    if (pokedex[current]["name"] == g) {
        reveal();
    }

    document.getElementById("guessbox").value = "";
}

function reveal() {
    document.getElementById("pokemon-img").classList.remove("hidden");

        let typesDiv = document.getElementById("pokemon-types");

        while (typesDiv.firstChild) {
            typesDiv.firstChild.remove();
        }
    
        let types = pokedex[current]["types"];
        for (let i = 0; i < types.length; i++) {
            let type = document.createElement("span");
            type.innerText = types[i]["type"]["name"].toUpperCase();
            type.classList.add("type-box");
            type.classList.add(types[i]["type"]["name"]); //adds background color and font color
            typesDiv.append(type);
        }

        setTimeout(displayRandom, 1000);

       // document.getElementById("guessbox").value = "";
}