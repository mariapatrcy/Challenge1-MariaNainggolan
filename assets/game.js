const batu_human = document.getElementById('batu_play');
const kertas_human = document.getElementById('kertas_play');
const gunting_human = document.getElementById('gunting_play');
const batu_compi = document.getElementById('batu_comp');
const kertas_compi = document.getElementById('kertas_comp');
const gunting_compi = document.getElementById('gunting_comp');
const winBox = document.getElementById('resultbox');
const details = document.getElementById('h1');
const reset = document.getElementById('reset');
const button = document.querySelector('button');
const addElement1 = [...document.getElementsByClassName("dissap")];



//Computer Random Choices
function comChoices() {
    var choices = ['Batu', 'Gunting', 'Kertas'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}
//Change the color in the winbox
function resultObject() {
    winBox.classList.add('winBox'),
        details.setAttribute("style", "font-size:36px; color:white; padding-top:30px;");

}
function resultDraw() {
    winBox.classList.add('drawBox');

    details.setAttribute("style", "font-size:36px; color:white; padding-top:30px;");

}

//Text Win or Lose or Draw BOX
function win() {
    console.log("Player 1 Win");
    resultObject();
    details.innerText = "Player 1 WIN";

}

function lose() {
    console.log("COM WIN");
    resultObject();

    details.innerText = "COM WIN"
}

function draw() {
    console.log("Draw");
    resultDraw();

    details.innerText = "Draw"
}


// Game ---- gameCompare
function gamePlay(humanUser) {

    const computerUser = comChoices();
    console.log("Human User -> " + humanUser);
    console.log("Computer User -> " + computerUser);

    switch (humanUser + computerUser) {
        case "KertasBatu":
        case "GuntingKertas":
        case "BatuGunting":
        
            win();

            break;
        case "BatuKertas":
        case "KertasGunting":
        case "GuntingBatu":
        
            lose();
            break;
        case "BatuBatu":
        case "KertasKertas":
        case "GuntingGunting":
        
            draw();

    }
    switch (computerUser) {
        case "Batu":
            batu_compi.classList.add('chosen');

            break;
        case "Gunting":
            gunting_compi.classList.add('chosen');
            break;
        case "Kertas":
            kertas_compi.classList.add('chosen');

    }
}

//Human Choice
function play() {
    batu_human.addEventListener("click", function () {
        this.classList.add('chosen');
        gamePlay("Batu");

        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;")
        })

    })

    kertas_human.addEventListener('click', function () {
        this.classList.add('chosen');
        gamePlay("Kertas");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;")
        })
    })

    gunting_human.addEventListener('click', function () {
        this.classList.add('chosen');
        gamePlay("Gunting");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;");
        })
    })
}

play();


// Reset the game after playing
reset.addEventListener('click', function () {
    // window.location.reload();

    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('chosen')
    });
    addElement1.forEach(addElement3 => {
        addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")

    })
    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    details.removeAttribute("style", "color: ''; font-size:'' ")

    details.style.marginTop = null
    details.style.fontSize = null
    details.innerText = "VS"
    button.disabled = false;
})


