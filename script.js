const startBtn = document.getElementById("startBtn");
const rollBtn = document.getElementById("rollBtn");

const currentPlayerDiv = document.getElementById("currentPlayer");
const diceResult = document.getElementById("diceResult");
const playersDiv = document.getElementById("players");
const logDiv = document.getElementById("log");

const token1 = document.getElementById("player1");
const token2 = document.getElementById("player2");
const token3 = document.getElementById("player3");
const token4 = document.getElementById("player4");

let players = [];
let currentPlayer = 0;

const positions = [

    {x:40,y:770},   // 1 START
    {x:110,y:770},
    {x:180,y:770},
    {x:250,y:770},
    {x:320,y:770},
    {x:390,y:770},
    {x:460,y:770},
    {x:530,y:770},

    {x:620,y:770},
    {x:720,y:700},
    {x:720,y:620},
    {x:720,y:540},
    {x:720,y:460},
    {x:720,y:380},
    {x:720,y:300},

    {x:720,y:210},

    {x:620,y:90},
    {x:530,y:90},
    {x:450,y:90},
    {x:370,y:90},
    {x:290,y:90},
    {x:210,y:90},
    {x:130,y:90},

    {x:40,y:90},
    {x:40,y:180},
    {x:40,y:270},
    {x:40,y:360},
    {x:40,y:450}
];

startBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);

function startGame(){

    const totalPlayers =
        parseInt(
            document.getElementById("playerCount").value
        );

    players = [];

    for(let i=1;i<=totalPlayers;i++){

        players.push({
            name:"Pemain " + i,
            money:200000,
            position:0
        });

    }

    currentPlayer = 0;

    updatePlayers();
    updateTokens();

    currentPlayerDiv.innerHTML =
        "Giliran: " + players[0].name;

    logDiv.innerHTML =
        "Permainan dimulai. Modal awal Rp200.000";

    rollBtn.disabled = false;
}

function rollDice(){

    let dice =
        Math.floor(Math.random()*6)+1;

    diceResult.innerHTML =
        "🎲 " + dice;

    let player =
        players[currentPlayer];

    player.position += dice;

    if(player.position >= 28){

        player.position -= 28;

        player.money += 15000;

        logDiv.innerHTML =
            player.name +
            " melewati START dan mendapat Rp15.000";
    }
    else{

        logDiv.innerHTML =
            player.name +
            " maju " +
            dice +
            " langkah";
    }

    updatePlayers();
    updateTokens();

    currentPlayer++;

    if(currentPlayer >= players.length){
        currentPlayer = 0;
    }

    currentPlayerDiv.innerHTML =
        "Giliran: " +
        players[currentPlayer].name;
}

function updatePlayers(){

    let html = "";

    players.forEach(player=>{

        html += `
        <div>
            ${player.name}
            :
            Rp${player.money.toLocaleString("id-ID")}
        </div>
        `;

    });

    playersDiv.innerHTML = html;
}

function updateTokens(){

    token1.style.display = "none";
    token2.style.display = "none";
    token3.style.display = "none";
    token4.style.display = "none";

    const tokenList =
        [token1,token2,token3,token4];

    players.forEach((player,index)=>{

    const token =
        tokenList[index];

    token.style.display = "block";

    token.style.left =
        (positions[player.position].x + (index * 12))
        + "px";

    token.style.top =
        (positions[player.position].y + (index * 12))
        + "px";

});
}
