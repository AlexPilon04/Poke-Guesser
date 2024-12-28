class EasyMode {
    gen1 = [1,151];
    gen2 = [152,251];
    gen3 = [252,386];
    gen4 = [387,493];
    gen5 = [494,649];
    gen6 = [650,721];
    gen7 = [722,808];
    gen8 = [809,898];
    gen9 = [906,1025];
    gen0 = [899,905];
    generations = [this.gen1, this.gen2, this.gen3, this.gen4, this.gen5, this.gen6, this.gen7, this.gen8, this.gen9, this.gen0]
    current;

    constructor(current) {
        this.current = current;
    }

    BinBanModeEngage() {
        toDel = document.getElementById("guessbar");
        toDel.remove();
    
        // let title = document.getElementById("header");
        // title.innerText = "Hoo's dat Pohkeeman";
    
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

    // should take an array [first number of gen, last number of gen]
    guess(array) {
        if (array[0] <= current && current <= array[1]) {
            reveal();
        }
    }
    
    
}
