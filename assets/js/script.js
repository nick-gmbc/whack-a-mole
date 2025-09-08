document.addEventListener("DOMContentLoaded", function () {
    count = 1
    while (count < 10) {
        let image = document.getElementById("mole"+count);
        console.log(image);
        // Add the click event listener
        image.addEventListener("click", function(event) {
            increaseScore();
        });
        count++;
    }
})

let moleID = "";
function randInt(min, max) {
    return Math.trunc(Math.random() * max) + min;
}


showMole();

async function showMole() {
    let moleNo = randInt(1,9);
    moleID = "mole" + moleNo;
    console.log(moleID);
    document.getElementById(moleID).style.visibility = "visible";
    setTimeout(hideMole, 1500);
    console.log(moleID + " finihsed");
}

function hideMole() {
    document.getElementById(moleID).style.visibility = "hidden";
    setTimeout(showMole, 1000);
}

function increaseScore() {
    let score = document.getElementById("score").innerText;
    score++;
    document.getElementById("score").innerText = score;
}