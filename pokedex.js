
const PokemonCount = 1025;
var hintStage = 0;
var current = 0;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}}

window.onload = async function() {
    
    //when enter key is pressed guess()
    var input = document.getElementById("guessbox")
    input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        guess();
    }
    });

    //display a random pokemon
    displayRandom();
}

async function displayRandom() {
    //pick a random pokemon
    let x = Math.floor((Math.random() * 1025) + 1);
    current = x;

    //remove name tag if has name
    let name = document.getElementById("name-box");

    while (name.firstChild) {
        name.firstChild.remove();
    }

    //make give up button on reset
    let boutton = document.getElementById("button-box");

    while (boutton.firstChild) {
        boutton.firstChild.remove();
    }

    //fetch pokemon and display image
    document.getElementById("pokemon-img").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + current.toString() + ".png"
    document.getElementById("pokemon-img").classList.add("hidden");

    let url = "https://pokeapi.co/api/v2/pokemon/" + current.toString();

    let res = await fetch(url);
    let pokemon = await res.json();


    //store pokemon in dict
    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    pokedex[current] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType}

    //remove previous types and add mystery types
    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

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

function guess() {
    //if guess is correct reveal()
    let g = document.getElementById("guessbox").value;
    if (pokedex[current]["name"] == g) {
        reveal();
    }

    //reset guessbox
    document.getElementById("guessbox").value = "";
}

function reveal() {
    if (!document.getElementById("pokemon-img").classList.contains("hidden")) {

    } else {
        //reveal name
        let mainType = pokedex[current]["types"];
        let name = document.createElement("span");
        name.innerText = pokedex[current]["name"];
        name.classList.add("name-tag");
        name.classList.add(mainType[0]["type"]["name"]);
        document.getElementById("name-box").append(name);

        //undarken sprite
        document.getElementById("pokemon-img").classList.remove("hidden");

        //add correct types
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

        //Whenever pokemon is revealed, make custom new pokemon button appear
        var newP = document.createElement("button");
        //newP.classList.add("guessbar");
        newP.innerText = "new Pokemon";
        newP.onclick = displayRandom;
        document.getElementById("button-box").append(newP);
    }

    //setTimeout(displayRandom, 1000);
}

function BinBanModeEngage() {
    toDel = document.getElementById("guessbar");
    toDel.remove();

    let title = document.getElementById("header");
    title.innerText = "Hoo's dat Pohkeeman";

    let BinBar = document.getElementById("bar");
    BinBar.classList.add("BinBar")

    for (let i = 0; i < 10; i++) {
        var boutton =  document.createElement("button");
        let name = "gen" + i.toString();
        boutton.classList.add(name);
        boutton.classList.add("gameIcon");
        let fun = "binGuessing" + name;
        boutton.onclick = eval(fun);
        let BinBar = document.getElementById("bar");
        BinBar.append(boutton);
    }

    let BinB = document.getElementById("BinBanButton");
    BinB.remove();
}

function binGuessinggen1() {
    if (1 <= current && current <= 151) {
        reveal();
    }
}

function binGuessinggen2() {
    if (151 < current && current < 252) {
        reveal();
    }
}

function binGuessinggen3() {
    if (251 < current && current < 387) {
        reveal();
    }
}

function binGuessinggen4() {
    if (386 < current && current < 494) {
        reveal();
    }
}

function binGuessinggen5() {
    if (493 < current && current < 650) {
        reveal();
    }
}

function binGuessinggen6() {
    if (649 < current && current < 722) {
        reveal();
    }
}

function binGuessinggen7() {
    if (721 < current && current < 810) {
        reveal();
    }
}

function binGuessinggen8() {
    if (809 < current && current < 899) {
        reveal();
    }
}

function binGuessinggen9() {
    if (905 < current && current < 1026) {
        reveal();
    }
}

function binGuessinggen0() {
    if (898 < current && current < 906) {
        reveal();
    }
}


