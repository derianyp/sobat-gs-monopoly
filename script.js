// =====================================
// SOBAT GS V2
// DATABASE & VARIABLE
// =====================================

const startBtn = document.getElementById("startBtn");
const rollBtn = document.getElementById("rollBtn");

const currentPlayerDiv =
document.getElementById("currentPlayer");

const diceResult =
document.getElementById("diceResult");

const playersDiv =
document.getElementById("players");

const logDiv =
document.getElementById("log");

const currentTileDiv =
document.getElementById("currentTile");

const modal =
document.getElementById("modal");

const modalTitle =
document.getElementById("modalTitle");

const modalBody =
document.getElementById("modalBody");

const modalButtons =
document.getElementById("modalButtons");

const tokenList = [
document.getElementById("player1"),
document.getElementById("player2"),
document.getElementById("player3"),
document.getElementById("player4")
];

let players = [];
let currentPlayer = 0;

// =====================================
// PETAK
// =====================================

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
"Galaxy Play Station",

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

// =====================================
// DATA ASET
// =====================================

const properties = {

"Warung Babeh":{
price:20000,
rent:5000,
upgrade1:5000,
rent1:10000,
upgrade2:10000,
rent2:20000,
owner:null,
level:0
},

"Tambal Ban":{
price:25000,
rent:6000,
upgrade1:5000,
rent1:11000,
upgrade2:10000,
rent2:21000,
owner:null,
level:0
},

"Angkringan Balwas":{
price:30000,
rent:7000,
upgrade1:5000,
rent1:12000,
upgrade2:10000,
rent2:22000,
owner:null,
level:0
},

"PDAM":{
price:35000,
rent:8000,
upgrade1:5000,
rent1:13000,
upgrade2:10000,
rent2:23000,
owner:null,
level:0
},

"Warjok":{
price:40000,
rent:10000,
upgrade1:10000,
rent1:20000,
upgrade2:15000,
rent2:35000,
owner:null,
level:0
},

"Laundry":{
price:45000,
rent:11000,
upgrade1:10000,
rent1:21000,
upgrade2:15000,
rent2:36000,
owner:null,
level:0
},

"Toko HP":{
price:50000,
rent:12000,
upgrade1:10000,
rent1:22000,
upgrade2:15000,
rent2:37000,
owner:null,
level:0
},

"Bengkel":{
price:55000,
rent:13000,
upgrade1:10000,
rent1:23000,
upgrade2:15000,
rent2:38000,
owner:null,
level:0
},

"Cafe":{
price:60000,
rent:15000,
upgrade1:15000,
rent1:30000,
upgrade2:20000,
rent2:50000,
owner:null,
level:0
},

"Galaxy Play Station":{
price:65000,
rent:16000,
upgrade1:15000,
rent1:31000,
upgrade2:20000,
rent2:51000,
owner:null,
level:0
},

"Mbah Arel":{
price:70000,
rent:18000,
upgrade1:15000,
rent1:33000,
upgrade2:20000,
rent2:53000,
owner:null,
level:0
},

"Toko Bangunan":{
price:75000,
rent:18000,
upgrade1:15000,
rent1:33000,
upgrade2:20000,
rent2:53000,
owner:null,
level:0
},

"Kos-Kosan":{
price:80000,
rent:20000,
upgrade1:20000,
rent1:40000,
upgrade2:25000,
rent2:65000,
owner:null,
level:0
},

"Indomaret":{
price:85000,
rent:22000,
upgrade1:20000,
rent1:42000,
upgrade2:25000,
rent2:67000,
owner:null,
level:0
},

"Alfamart":{
price:90000,
rent:23000,
upgrade1:20000,
rent1:43000,
upgrade2:25000,
rent2:68000,
owner:null,
level:0
},

"Ruko":{
price:100000,
rent:25000,
upgrade1:20000,
rent1:45000,
upgrade2:25000,
rent2:70000,
owner:null,
level:0
}

};

// =====================================
// EVENT KAMPUNG
// =====================================

const eventCards = [

{ text:"Dapat THR", amount:20000 },
{ text:"Ditraktir Mie Ayam", amount:10000 },
{ text:"Dapat Angpao", amount:15000 },
{ text:"Dagangan Lagi Ramai", amount:25000 },
{ text:"Menang Lomba 17 Agustus", amount:20000 },
{ text:"Dapat Banyak Orderan", amount:10000 },
{ text:"Dikasih Saudara", amount:15000 },
{ text:"HP Lama Laku Dijual", amount:20000 },
{ text:"Ayam Menang Kontes", amount:10000 },
{ text:"Dapat Bantuan Sembako", amount:15000 },

{ text:"Kena Tilang Polisi", amount:-20000 },
{ text:"Motor Mogok", amount:-15000 },
{ text:"Kehabisan Uang", amount:-10000 },
{ text:"Rumah Kemalingan", amount:-30000 },
{ text:"Hujan Deras Banjir", amount:-20000 },
{ text:"Sakit Masuk Angin", amount:-10000 },
{ text:"HP Jatuh Rusak", amount:-25000 },
{ text:"Kucing Sembunyikan Duit", amount:-10000 },
{ text:"Saldo Habis Buat Jajan", amount:-10000 },
{ text:"Teman Lupa Bayar Hutang", amount:-15000 }

];
// =====================================
// START GAME
// =====================================

startBtn.addEventListener(
    "click",
    startGame
);

rollBtn.addEventListener(
    "click",
    rollDice
);

function startGame(){

    const totalPlayers =
    parseInt(
        document.getElementById(
            "playerCount"
        ).value
    );

    players = [];

    for(
        let i = 1;
        i <= totalPlayers;
        i++
    ){

        players.push({

            id:i,

            name:"Pemain " + i,

            money:200000,

            position:0,

            jail:false,

            boss:false,

            bankrupt:false

        });

    }

    currentPlayer = 0;

    updatePlayers();

    updateTokens();

    currentPlayerDiv.innerHTML =
    "Giliran : " +
    players[0].name;

    currentTileDiv.innerHTML =
    "START";

    log(
        "Permainan dimulai.<br>" +
        "Modal awal Rp200.000"
    );

    rollBtn.disabled = false;

}

// =====================================
// DADU
// =====================================

function rollDice(){

    const player =
    players[currentPlayer];

    if(player.bankrupt){

        nextTurn();
        return;

    }

    const dice =
    Math.floor(
        Math.random()*6
    ) + 1;

    diceResult.innerHTML =
    "🎲 " + dice;

    player.position += dice;

    if(player.position >= 28){

        player.position -= 28;

        player.money += 15000;

        log(
            player.name +
            " melewati START dan mendapat Rp15.000"
        );

    }

    updateTokens();

    processTile(player);

    updatePlayers();

}

// =====================================
// GILIRAN BERIKUTNYA
// =====================================

function nextTurn(){

    currentPlayer++;

    if(
        currentPlayer >=
        players.length
    ){

        currentPlayer = 0;

    }

    currentPlayerDiv.innerHTML =
    "Giliran : " +
    players[currentPlayer].name;

}

// =====================================
// UPDATE DAFTAR PEMAIN
// =====================================

function updatePlayers(){

    let html = "";

    players.forEach(player=>{

        let status = "Normal";

        if(player.jail){
            status = "Penjara";
        }

        if(player.boss){
            status = "Bos Muda";
        }

        if(player.bankrupt){
            status = "Bangkrut";
        }

        html += `

        <div class="player-card">

            <strong>
                ${player.name}
            </strong>

            <div class="player-money">
                Rp${player.money.toLocaleString("id-ID")}
            </div>

            <div class="player-status">
                ${status}
            </div>

        </div>

        `;

    });

    playersDiv.innerHTML =
    html;

}

// =====================================
// LOG
// =====================================

function log(text){

    logDiv.innerHTML = text;

}

// =====================================
// MODAL
// =====================================

function showModal(
    title,
    body,
    buttons=[]
){

    modal.classList.remove(
        "hidden"
    );

    modalTitle.innerHTML =
    title;

    modalBody.innerHTML =
    body;

    modalButtons.innerHTML =
    "";

    buttons.forEach(btn=>{

        const button =
        document.createElement(
            "button"
        );

        button.innerHTML =
        btn.text;

        button.onclick =
        ()=>{

            hideModal();

            if(btn.action){

                btn.action();

            }

        };

        modalButtons.appendChild(
            button
        );

    });

}

function hideModal(){

    modal.classList.add(
        "hidden"
    );

}

// =====================================
// KOORDINAT PAPAN
// =====================================

function getBoardPositions(){

    const board =
    document.getElementById(
        "board"
    );

    const w =
    board.clientWidth;

    const h =
    board.clientHeight;

    return [

        // START
        {x:w*0.03,y:h*0.90},

        {x:w*0.13,y:h*0.90},
        {x:w*0.22,y:h*0.90},
        {x:w*0.32,y:h*0.90},
        {x:w*0.42,y:h*0.90},
        {x:w*0.52,y:h*0.90},
        {x:w*0.62,y:h*0.90},
        {x:w*0.72,y:h*0.90},

        {x:w*0.90,y:h*0.82},
        {x:w*0.90,y:h*0.72},
        {x:w*0.90,y:h*0.62},
        {x:w*0.90,y:h*0.52},
        {x:w*0.90,y:h*0.42},
        {x:w*0.90,y:h*0.32},

        {x:w*0.90,y:h*0.14},

        {x:w*0.72,y:h*0.04},
        {x:w*0.62,y:h*0.04},
        {x:w*0.52,y:h*0.04},
        {x:w*0.42,y:h*0.04},
        {x:w*0.32,y:h*0.04},
        {x:w*0.22,y:h*0.04},
        {x:w*0.12,y:h*0.04},

        {x:w*0.03,y:h*0.12},
        {x:w*0.03,y:h*0.24},
        {x:w*0.03,y:h*0.36},
        {x:w*0.03,y:h*0.48},
        {x:w*0.03,y:h*0.60},
        {x:w*0.03,y:h*0.72}

    ];

}

// =====================================
// UPDATE TOKEN
// =====================================

function updateTokens(){

    const positions =
    getBoardPositions();

    tokenList.forEach(token=>{

        token.style.display =
        "none";

    });

    players.forEach(
    (player,index)=>{

        const token =
        tokenList[index];

        token.style.display =
        "block";

        token.style.left =
        (
            positions[
                player.position
            ].x
            +
            (index*10)
        ) + "px";

        token.style.top =
        (
            positions[
                player.position
            ].y
            +
            (index*10)
        ) + "px";

    });

}

window.addEventListener(
    "resize",
    updateTokens
);
// =====================================
// PROSES PETAK
// =====================================

function processTile(player){

    const tile =
    boardTiles[player.position];

    currentTileDiv.innerHTML =
    tile;

    // START
    if(tile === "START"){

        player.money += 25000;

        log(
            player.name +
            " berhenti tepat di START<br>" +
            "Bonus Rp25.000"
        );

        updatePlayers();

        nextTurn();

        return;
    }

    // EVENT KAMPUNG
    if(tile === "Event Kampung"){

        const card =
        eventCards[
            Math.floor(
                Math.random() *
                eventCards.length
            )
        ];

        player.money +=
        card.amount;

        showModal(

            "🎉 EVENT KAMPUNG",

            `
            ${card.text}
            <br><br>
            ${card.amount >= 0 ? "+" : ""}
            Rp${Math.abs(card.amount).toLocaleString("id-ID")}
            `,

            [
                {
                    text:"OK",
                    action:()=>{

                        checkBankrupt(
                            player
                        );

                        updatePlayers();

                        nextTurn();

                    }
                }
            ]

        );

        return;
    }

    // MENANG EP EP-AN
    if(
        tile ===
        "Menang EP EP-an"
    ){

        player.money += 10000;

        log(
            player.name +
            " menang EP EP-an<br>" +
            "+ Rp10.000"
        );

        updatePlayers();

        nextTurn();

        return;
    }

    // KAS KAMPUNG
    if(
        tile ===
        "Kas Kampung"
    ){

        player.money -= 5000;

        log(
            player.name +
            " bayar Kas Kampung<br>" +
            "- Rp5.000"
        );

        checkBankrupt(player);

        updatePlayers();

        nextTurn();

        return;
    }

    // SPBU
    if(
        tile ===
        "SPBU Mejasem"
    ){

        player.money -= 10000;

        log(
            player.name +
            " isi bensin<br>" +
            "- Rp10.000"
        );

        checkBankrupt(player);

        updatePlayers();

        nextTurn();

        return;
    }

    // RUMAH MAS RIAN
    if(
        tile ===
        "Rumah Mas Rian"
    ){

        player.money += 10000;

        log(
            player.name +
            " mampir Rumah Mas Rian<br>" +
            "+ Rp10.000"
        );

        updatePlayers();

        nextTurn();

        return;
    }

    // RSUD
    if(
        tile ===
        "RSUD Kardinah"
    ){

        player.money -= 10000;

        log(
            player.name +
            " berobat ke RSUD<br>" +
            "- Rp10.000"
        );

        checkBankrupt(player);

        updatePlayers();

        nextTurn();

        return;
    }

    // PENJARA
    if(
        tile ===
        "Penjara"
    ){

        showModal(

            "🚔 PENJARA",

            `
            Bayar Rp25.000
            untuk keluar?
            `,

            [
                {
                    text:"Bayar",

                    action:()=>{

                        player.money -=
                        25000;

                        updatePlayers();

                        nextTurn();

                    }
                },

                {
                    text:"Tetap Dipenjara",

                    action:()=>{

                        player.jail =
                        true;

                        updatePlayers();

                        nextTurn();

                    }
                }

            ]

        );

        return;
    }

    // BOS MUDA
    if(
        tile ===
        "Bos Muda"
    ){

        player.boss = true;

        showModal(

            "👑 BOS MUDA",

            `
            Anda sedang menjadi
            Bos Muda
            `,

            [
                {
                    text:"OK",

                    action:()=>{

                        nextTurn();

                    }
                }
            ]

        );

        return;
    }

    // CEK ASET
    if(
        properties[tile]
    ){

        handleProperty(
            player,
            tile
        );

        return;
    }

    nextTurn();

}

// =====================================
// BELI ASET
// =====================================

function handleProperty(
    player,
    propertyName
){

    const property =
    properties[
        propertyName
    ];

    // BELUM ADA PEMILIK

    if(
        property.owner === null
    ){

        showModal(

            propertyName,

            `
            Harga :
            Rp${property.price.toLocaleString("id-ID")}
            <br><br>

            Sewa :
            Rp${property.rent.toLocaleString("id-ID")}
            `,

            [

                {
                    text:"Beli",

                    action:()=>{

                        if(
                            player.money >=
                            property.price
                        ){

                            player.money -=
                            property.price;

                            property.owner =
                            player.id;

                            log(
                                player.name +
                                " membeli " +
                                propertyName
                            );

                            updatePlayers();

                        }

                        nextTurn();

                    }
                },

                {
                    text:"Lewati",

                    action:()=>{

                        nextTurn();

                    }
                }

            ]

        );

        return;
    }

    // MILIK SENDIRI

    if(
        property.owner ===
        player.id
    ){

        upgradeProperty(
            player,
            propertyName
        );

        return;
    }

    // BAYAR SEWA

    payRent(
        player,
        propertyName
    );

}

// =====================================
// HITUNG SEWA
// =====================================

function getRent(
    property
){

    if(
        property.level === 0
    ){

        return property.rent;

    }

    if(
        property.level === 1
    ){

        return property.rent1;

    }

    return property.rent2;

}
// =====================================
// UPGRADE ASET
// =====================================

function upgradeProperty(
    player,
    propertyName
){

    const property =
    properties[propertyName];

    // SUDAH MAX

    if(property.level >= 2){

        showModal(

            propertyName,

            `
            Level sudah maksimal
            (Level 2)
            `,

            [
                {
                    text:"OK",
                    action:()=>{
                        nextTurn();
                    }
                }
            ]

        );

        return;
    }

    const cost =
    property.level === 0
    ? property.upgrade1
    : property.upgrade2;

    const nextLevel =
    property.level + 1;

    showModal(

        propertyName,

        `
        Upgrade ke Level ${nextLevel}
        <br><br>

        Biaya :
        Rp${cost.toLocaleString("id-ID")}
        `,

        [

            {
                text:"Upgrade",

                action:()=>{

                    if(
                        player.money >= cost
                    ){

                        player.money -= cost;

                        property.level++;

                        log(
                            player.name +
                            " upgrade " +
                            propertyName +
                            " ke Level " +
                            property.level
                        );

                        updatePlayers();

                    }

                    nextTurn();

                }
            },

            {
                text:"Lewati",

                action:()=>{
                    nextTurn();
                }
            }

        ]

    );

}

// =====================================
// BAYAR SEWA
// =====================================

function payRent(
    player,
    propertyName
){

    const property =
    properties[propertyName];

    const rent =
    getRent(property);

    const owner =
    players.find(

        p =>
        p.id ===
        property.owner

    );

    player.money -= rent;

    if(owner){

        owner.money += rent;

    }

    log(

        player.name +
        " membayar sewa Rp" +
        rent.toLocaleString("id-ID") +
        "<br>" +
        "kepada " +
        owner.name

    );

    checkBankrupt(player);

    updatePlayers();

    checkWinner();

    nextTurn();

}

// =====================================
// CEK BANGKRUT
// =====================================

function checkBankrupt(
    player
){

    if(player.money >= 0){

        return;

    }

    player.bankrupt = true;

    log(

        player.name +
        " bangkrut!"

    );

    // HAPUS KEPEMILIKAN

    Object.keys(properties)
    .forEach(name=>{

        if(
            properties[name]
            .owner ===
            player.id
        ){

            properties[name]
            .owner = null;

            properties[name]
            .level = 0;

        }

    });

}

// =====================================
// CEK PEMENANG
// =====================================

function checkWinner(){

    const activePlayers =

    players.filter(

        p =>
        !p.bankrupt

    );

    if(
        activePlayers.length !== 1
    ){

        return;

    }

    rollBtn.disabled =
    true;

    showModal(

        "🏆 PEMENANG",

        `
        Selamat!
        <br><br>

        ${activePlayers[0].name}
        memenangkan permainan
        Sobat GS
        `,

        [
            {
                text:"OK"
            }
        ]

    );

}

// =====================================
// INFO ASET
// =====================================

function getPlayerAssets(
    playerId
){

    let total = 0;

    Object.keys(properties)
    .forEach(name=>{

        if(
            properties[name]
            .owner ===
            playerId
        ){

            total++;

        }

    });

    return total;

}

// =====================================
// UPDATE PLAYER VERSI LANJUT
// =====================================

const oldUpdatePlayers =
updatePlayers;

updatePlayers = function(){

    let html = "";

    players.forEach(player=>{

        let status =
        "Normal";

        if(player.jail){
            status = "Penjara";
        }

        if(player.boss){
            status = "Bos Muda";
        }

        if(player.bankrupt){
            status = "Bangkrut";
        }

        html += `

        <div class="player-card">

            <strong>
                ${player.name}
            </strong>

            <div class="player-money">
                Rp${player.money.toLocaleString("id-ID")}
            </div>

            <div>
                Aset :
                ${getPlayerAssets(
                    player.id
                )}
            </div>

            <div class="player-status">
                ${status}
            </div>

        </div>

        `;

    });

    playersDiv.innerHTML =
    html;

};

// =====================================
// INIT
// =====================================

console.log(
    "SOBAT GS V2 Loaded"
);
