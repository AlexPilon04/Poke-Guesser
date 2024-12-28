const PokemonCount = 1025;
var current = 0;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}}
var guesser;

window.onload = async function() {
    console.log("log")
    guesser = new Guesser();
    displayRandom();
}

async function displayRandom() {
    let x = Math.floor((Math.random() * 1025) + 1);
    //console.log(x);
    current = x;
    guesser.updateCurrent(current);

    RemoveChildren("name-box");
    RemoveChildren("button-box")

    document.getElementById("pokemon-img").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + current.toString() + ".png"
    document.getElementById("pokemon-img").classList.add("hidden");

    let url = "https://pokeapi.co/api/v2/pokemon/" + current.toString();

    let res = await fetch(url);
    let pokemon = await res.json();

    storePokemon(pokemon);

    RemoveChildren("pokemon-types");

    let types = pokedex[current]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = "?????";
        type.classList.add("type-box");
        type.classList.add("mystery");
        typesDiv.append(type);
    }

    console.log(pokedex);
}

function storePokemon(pokemon) {
    let pokemonName = pokemon["name"]; 
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    pokedex[current] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType}
}

function RemoveChildren(nodeName) {
    let node = document.getElementById(nodeName);
    while (node.firstChild) {
       node.firstChild.remove();
    }
}

function reveal() {
    guesser.reveal();
}




