const emoji = [
    "🐱‍👤",
    "🐱‍👤",
    "🐱‍👓",
    "🐱‍👓",
    "🐲",
    "🐲",
    "🐸",
    "🐸",
    "🐱‍💻",
    "🐱‍💻",
    "🥺",
    "🥺",
    "👻",
    "👻",
    "🦍",
    "🦍",
];
let open_cards = [];

let shuffle_emoji = emoji.sort(() => (Math.random() > 0.5 ? 2 : -1));

let click_checking = false

for(let i = 0; i < emoji.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = handClick;
    box.innerHTML = shuffle_emoji[i];
    document.querySelector(".game").appendChild(box);
}

function handClick(){
    if(click_checking || this.classList.contains("box_match") || open_cards.includes(this)){
        return;
    }
    if(open_cards.length < 2){
        this.classList.add("box_open");
        open_cards.push(this);
    }
    if(open_cards.length === 2){
        click_checking = true;
        setTimeout(checkMath, 500);
    }
}

function checkMath(){
    if(open_cards[0] && open_cards[1]){
        if(open_cards[0].innerHTML === open_cards[1].innerHTML){
            open_cards[0].classList.add("box_match");
            open_cards[1].classList.add("box_match");
        }
        else{
            open_cards[0].classList.remove("box_open");
            open_cards[1].classList.remove("box_open");
        }
    }

    open_cards = [];
    click_checking = false;

    if(document.querySelectorAll(".box_match").length == emoji.length){
        alert("Voce ganhou");
    }
}