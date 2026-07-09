const emoji = ["🌸", "💐","🩵", "💙", "❤️", ""];

function buatBunga(){
    const item = document.createElement("div");
    item.classList.add("fall");

    item.innerHTML = emoji[Math.floor(Math.random()*emoji.length)];

    item.style.left = Math.random()*100 + "vw";
    item.style.animationDuration = (3 + Math.random()*4) + "s";

    document.body.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },7000);
}

setInterval(buatBunga,300);