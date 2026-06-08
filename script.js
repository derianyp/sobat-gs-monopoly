let currentPlayer = 0;

const players = [
    {
        name:"Pemain 1",
        money:200000,
        position:0
    },
    {
        name:"Pemain 2",
        money:200000,
        position:0
    }
];

const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const currentPlayerDiv = document.getElementById("currentPlayer");
const logDiv = document.getElementById("log");

rollBtn.addEventListener("click", rollDice);

function rollDice(){

    let dice = Math.floor(Math.random()*6)+1;

    diceResult.innerHTML = "Dadu : " + dice;

    let player = players[currentPlayer];

    player.position += dice;

    if(player.position >= 28){
        player.position -= 28;
        player.money += 15000;

        logDiv.innerHTML =
        player.name +
        " melewati START dan mendapat Rp15.000";
    }else{
        logDiv.innerHTML =
        player.name +
        " maju " +
        dice +
        " langkah";
    }

    currentPlayer++;

    if(currentPlayer >= players.length){
        currentPlayer = 0;
    }

    currentPlayerDiv.innerHTML =
    "Giliran : " +
    players[currentPlayer].name;
}
