const steps = document.querySelectorAll(".card");
// Ambil semua tombol next yang ada di dalam kartu
const nextButtons = document.querySelectorAll(".next-btn");

let current = 0;

// Pasang event listener ke SETIAP tombol next
nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Validasi: Pastikan masih ada halaman berikutnya
        if (current + 1 < steps.length) {
            // Sembunyikan kartu saat ini
            steps[current].classList.remove("active");
            
            // Naikkan index ke halaman berikutnya
            current++;
            
            // Tampilkan kartu berikutnya
            steps[current].classList.add("active");
        }
    });
});
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

const text =
"happy anniversary 1thn sayanggkuu🤍🤍!! ga kerasa yaa, kita bisa bertahan lama di hubungan ini, semoga seterusnya kita bisa di kasi waktu dan kesempatan lebih lama lagi untuk tetap bersama yyaa!!makasih buatt kamu yang udaa selalu sabar ngadepin sikap akuu, yang kadang dewasa dan terkadang juga childish.makasih buat kita berduaa yang udah berjuang dan lewati semua hari-hari tanpa ada hal yang membosankan.aku harap perasaan dan sikap kamu ke aku nggaa pernah berkurang dan berubah yyaa.harapan aku juga buat kedepannya semoga hubungan kita baik baik aja ya? yaa i know hubungan gak selalu baik, jadi kalo ada masalah kita harus selesain bareng bareng ya sayang? i'm so lucky to have u in my live. kamu dunia aku, bahagia aku, semesta aku. jangan pernah berubah ya? tetep jadi kamu yg aku kenal, semoga kedepannya kita lebih dewasa buat ngejalanin relationship ini. aku sayang kamu, aku bakal berusaha pertahanin hubungan kita, dan berusaha buat kamu bahagia.kitaa udaa lewatinn semuaa masalah yang ada dihubungan kita, senang maupun sedih selama 1 tahun.aku banyak banyak berterima kasih karna ketemu cowo kaya kamu, aku bener bener beruntung.adanya kamu buat aku, bikin aku berubah jdi yang lebih baik. aku ngerasa disayang sama kamu.thank you for loving me, i love you more than anything.maaf dan terimakasih yaa sayanggkuu, love u foreverr🥺🤍🤍.";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typing,50);
    }
}

typing();

for(let i=0;i<150;i++){
}

const music = document.getElementById("music");

let musicStarted = false;

music.play()
.then(() => console.log("Berhasil"))
.catch(err => console.log("Gagal:", err));

document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
        if (!musicStarted) {
            try {
                await music.play();
                musicStarted = true;
            } catch (err) {
                console.log(err);
            }
        }
    });
});
