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

let moleIDArray = [];


function randInt(min, max) {
    return Math.trunc(Math.random() * max) + min;
}


showMole();

async function showMole() {
    let numberOfMoles = randInt(1, 3);
    count = 0;
    while (count < numberOfMoles) {
        let moleNo = randInt(1,9);
        let moleID = "mole" + moleNo;
        console.log(moleID);
        document.getElementById(moleID).style.visibility = "visible";
        count++;
        moleIDArray.push(moleID)
    }
    setTimeout(hideMole, 2500);
    console.log(moleID + " finihsed");
}

function hideMole() {
    moleIDArray.forEach((item, index) => {
        document.getElementById(item).style.visibility = "hidden";
    });
    moleIDArray = [];
    setTimeout(showMole, 1000);
}

function increaseScore() {
    let score = document.getElementById("score").innerText;
    score++;
    document.getElementById("score").innerText = score;
}