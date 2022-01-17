const startButton = document.getElementById("start");
const modal = document.getElementById("modal");

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const sec05 = document.getElementById("0.5s");
const sec1 = document.getElementById("1s");
const sec15 = document.getElementById("1.5s");

const output = document.getElementById("output");
var sum1 = 0, sum2 = 0;

function oneDigitNumber(n) {
    setInterval(function () {
        const rand = Math.ceil(Math.random() * 9);
        const arr = [];
        arr.push(rand);
       // console.log(arr);
        sum1 += rand;
        //console.log(rand);
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = arr;
        output.appendChild(newParagraph);
    }, 1000);
}

function twoDigitNumber(min, max, n) {
    min = Math.ceil(min);
    max = Math.floor(max);

    for (let i = 0; i < n; i++) {
        const rand = Math.ceil(Math.random() * (max - min)) + min;
        sum2 += rand;
        console.log(rand);
        const newPara = document.createElement("p");
        newPara.innerHTML = rand;
        output.appendChild(newPara);
    }
    console.log(sum2);

}

startButton.addEventListener("click", () => {
    modal.style.display = "none";

    if (easy.checked === true) {
        oneDigitNumber(5);
        //console.log(sum1);
    } else if (medium.checked === true) {
        oneDigitNumber(3);
        twoDigitNumber(10, 99, 2);
        // console.log(sum1 + sum2);
    } else {
        twoDigitNumber(10, 99, 5);
        //console.log(sum2);
    }

    if (sec05.checked === true) {
        console.log("sec05");
    } else if (sec1.checked === true) {
        console.log("sec1");
    } else {
        console.log("sec15");
    }
});