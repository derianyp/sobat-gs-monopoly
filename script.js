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

const tokenList = [
    token1,
    token2,
    token3,
    token4
];

const boardTiles = [
    "START",
    "Warung Babeh",
    "Tambal Ban",
    "Event Kampung",
    "Angkringan Balwas",
    "PDAM",
    "Menang EP EP-an",
    "Kas Kampung",

    "Warjok",
    "Laundry",
    "Event Kampung",
    "Toko HP",
    "Bengkel",
    "SPBU Mejasem",
    "Bos Muda",

    "Cafe",
    "Galaxy Playstation",
    "Event Kampung",
    "Mbah Arel",
    "Toko Bangunan",

    "Rumah Mas Rian",
    "Penjara",
    "RSUD Kardinah",
    "Kos-Kosan",

    "Event Kampung",
    "Indomaret",
    "Alfamart",
    "Ruko"
];

startBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);

function startGame(){

    const totalPlayers =
        parseInt(
            document.getElementById("playerCount").value
        );

    players = [];

    for(let i = 1; i <= totalPlayers; i++){

        players.push({
            name: "Pemain " + i,
            money: 200000,
            position: 0
        });

    }

    currentPlayer = 0;

    updatePlayers();
    updateTokens();

    currentPlayerDiv.innerHTML =
        "Giliran: " + players[0].name;

    logDiv.innerHTML =
        "Permainan dimulai.<br>" +
        "Modal awal Rp200.000";

    rollBtn.disabled = false;
}

function rollDice(){

    const dice =
        Math.floor(Math.random() * 6) + 1;

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

    processTile(player);

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

function processTile(player){

    const tile =
        boardTiles[player.position];

    switch(tile){

        case "Kas Kampung":
            player.money -= 5000;
            logDiv.innerHTML =
                player.name +
                " masuk Kas Kampung.<br>" +
                "Bayar Rp5.000";
            break;

        case "Menang EP EP-an":
            player.money += 10000;
            logDiv.innerHTML =
                player.name +
                " menang EP EP-an.<br>" +
                "Dapat Rp10.000";
            break;

        case "Rumah Mas Rian":
            player.money += 10000;
            logDiv.innerHTML =
                player.name +
                " mampir Rumah Mas Rian.<br>" +
                "Dapat Rp10.000";
            break;

        case "SPBU Mejasem":
            player.money -= 10000;
            logDiv.innerHTML =
                player.name +
                " isi bensin di SPBU.<br>" +
                "Bayar Rp10.000";
            break;

        case "RSUD Kardinah":
            player.money -= 10000;
            logDiv.innerHTML =
                player.name +
                " berobat ke RSUD.<br>" +
                "Bayar Rp10.000";
            break;

        case "Event Kampung":
            logDiv.innerHTML =
                player.name +
                " mengambil kartu Event Kampung";
            break;

        case "Penjara":
            logDiv.innerHTML =
                player.name +
                " masuk Penjara";
            break;

        case "Bos Muda":
            logDiv.innerHTML =
                player.name +
                " sedang menjadi Bos Muda";
            break;

        default:
            logDiv.innerHTML =
                player.name +
                " berhenti di " +
                tile;
    }
}

function updatePlayers(){

    let html = "";

    players.forEach(player => {

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

function getBoardPositions(){

    const board =
        document.getElementById("board");

    const w =
        board.clientWidth;

    const h =
        board.clientHeight;

    return [

        // bawah
        {x:w*0.03,y:h*0.90},
        {x:w*0.13,y:h*0.90},
        {x:w*0.22,y:h*0.90},
        {x:w*0.32,y:h*0.90},
        {x:w*0.42,y:h*0.90},
        {x:w*0.52,y:h*0.90},
        {x:w*0.62,y:h*0.90},
        {x:w*0.72,y:h*0.90},

        // kanan
        {x:w*0.90,y:h*0.82},
        {x:w*0.90,y:h*0.72},
        {x:w*0.90,y:h*0.62},
        {x:w*0.90,y:h*0.52},
        {x:w*0.90,y:h*0.42},
        {x:w*0.90,y:h*0.32},

        // bos muda
        {x:w*0.90,y:h*0.14},

        // atas
        {x:w*0.72,y:h*0.04},
        {x:w*0.62,y:h*0.04},
        {x:w*0.52,y:h*0.04},
        {x:w*0.42,y:h*0.04},
        {x:w*0.32,y:h*0.04},
        {x:w*0.22,y:h*0.04},
        {x:w*0.12,y:h*0.04},

        // kiri
        {x:w*0.03,y:h*0.12},
        {x:w*0.03,y:h*0.24},
        {x:w*0.03,y:h*0.36},
        {x:w*0.03,y:h*0.48},
        {x:w*0.03,y:h*0.60},
        {x:w*0.03,y:h*0.72}
    ];

}

function updateTokens(){

    const positions =
        getBoardPositions();

    tokenList.forEach(token => {
        token.style.display = "none";
    });

    players.forEach((player,index)=>{

        const token =
            tokenList[index];

        token.style.display =
            "block";

        token.style.left =
            (positions[player.position].x + (index * 10))
            + "px";

        token.style.top =
            (positions[player.position].y + (index * 10))
            + "px";

    });
}

window.addEventListener(
    "resize",
    updateTokens
);
