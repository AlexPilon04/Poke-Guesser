const PokemonCount = 1025;
var current = 0;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}}
var guesser;

window.onload = async function() {
    guesser = new Guesser();
    displayRandom();
}

async function displayRandom() {

    //gets random number from 1-PokemonCount
    let x = Math.floor((Math.random() * PokemonCount) + 1);
    
    current = x;
    guesser.updateCurrent(current);

    RemoveChildren("name-box");
    RemoveNewPokemonButton();
    
    document.getElementById("pokemon-img").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + current.toString() + ".png";
    document.getElementById("pokemon-img").classList.add("hidden");

    let url = "https://pokeapi.co/api/v2/pokemon/" + current.toString();

    let res = await fetch(url);
    let pokemon = await res.json();

    storePokemon(pokemon);
    RemoveChildren("pokemon-types");

    let types = pokedex[current]["types"];
    for (let i = 0; i < types.length; i++) {
        createMysteryType();
    }
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

function RemoveNewPokemonButton() {
    let guessbar = document.getElementById("guessbar")
    guessbar.childNodes.forEach((child) => {
        if (child.name == "NewP") {
           guessbar.removeChild(child);
        }
    });
}

function reveal() {
    guesser.reveal();
}

function createMysteryType() {
    let typesDiv = document.getElementById("pokemon-types");
    let type = document.createElement("span");
    type.innerText = "?????";
    type.classList.add("type-box");        
    type.classList.add("mystery");
    typesDiv.append(type);
}




