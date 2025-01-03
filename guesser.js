class Guesser {
    current;
    inputElement;

    constructor() {
        this.inputElement = document.getElementById("guessbox");
        this.initializeListeners()
    }

    updateCurrent(num) {
        this.current = num;
    }

    initializeListeners() {
        this.inputElement.addEventListener("keydown", (event) => this.handleKeyDown(event))
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            this.guess();
        }
    }

    reveal() {
        if (!document.getElementById("pokemon-img").classList.contains("hidden")) {
    
        } else {
            let mainType = pokedex[current]["types"];
            let name = document.createElement("span");
            name.innerText = pokedex[current]["name"];
            name.classList.add("name-tag");
            name.classList.add(mainType[0]["type"]["name"]);
            document.getElementById("name-box").append(name);
    
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
                type.classList.add(types[i]["type"]["name"]);
                typesDiv.append(type);
            }
    
            var newP = document.createElement("button");
            newP.innerText = "new Pokemon";
            newP.name = "NewP";
            newP.onclick = displayRandom;
            document.getElementById("guessbar").append(newP);
        }
    }

    guess() {
        let g = document.getElementById("guessbox").value;
        if (pokedex[current]["name"] == g) {
            this.reveal();
        }
        document.getElementById("guessbox").value = "";
    }
}