let heads = 0, tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
const soundFx = document.querySelector("#coinflipsfx");
const videoBg = document.querySelector("#videoBg");
const imgBg = document.querySelector("#imgBg");
const toggleBtn = document.querySelector("#toggle-button");

function flip(){
	let i = Math.floor(Math.random() * 2);
	coin.style.animation = "none";
	soundFx.play();
	if(i){
		setTimeout(function() {
		coin.style.animation = "spin-heads 0.8s forwards";
		}, 1);
		heads++;
	}
	else{
		setTimeout(function() {
		coin.style.animation = "spin-tails 0.8s forwards";
		}, 1);
		tails++;
	}
	setTimeout(updateScore, 1000);
	disableBtn();
}

flipBtn.addEventListener("click", flip);

function updateScore(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableBtn(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 1200);
}

function reset(){
	if(heads || tails){
		coin.style.animation = "spin .8s forwards";
	}
    heads = 0;
    tails = 0;
    updateScore();
}

resetBtn.addEventListener("click", reset);

function toggleBg(){
	if(videoBg.style.opacity == '1') {
        videoBg.style.opacity = '0';
        imgBg.style.opacity = '1';
    } 
	else{
        videoBg.style.opacity = '1';
        imgBg.style.opacity = '0';
    }
}

toggleBtn.addEventListener("click", toggleBg);