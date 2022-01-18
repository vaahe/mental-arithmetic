const startButton = document.getElementById("start");
const startAgain = document.getElementById("start-again");

const modal = document.getElementById("modal");
const output = document.getElementById("output");
const input = document.getElementById("input");
const summary = document.getElementById("summary");
const submitButton = document.getElementById("submit");

const sec05 = document.getElementById("sec05");
const sec1 = document.getElementById("sec1");
const sec15 = document.getElementById("sec15");
let seconds = document.querySelector('input[name="seconds"]');

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");

let sum1 = 0, sum2 = 0;


const generateNumber = (x = 0, y = 0) => {
    let count = 0;
    let xCount = 0;
    let yCount = 0;
    let rand;

    const interval = setInterval(() => {
        if (xCount < x) {
            rand = Math.floor(Math.random() * 9) + 1;
            xCount++;
            sum1 += rand;
        } else if (yCount < y) {
            rand = Math.floor(Math.random() * 90) + 10;
            yCount++;
            sum2 += rand;
        }

        output.innerHTML = rand;
        count++;
        if (count === x + y + 1) {
            output.innerHTML = "";
            summary.style.visibility = "visible";
            clearInterval(interval);
        }
    }, seconds);
}


startButton.addEventListener("click", () => {
    modal.style.display = "none";

    if (sec05.checked === true) {
        seconds = +sec05.value;
    } else if (sec1.checked === true) {
        seconds = +sec1.value;
    } else {
        seconds = +sec15.value;
    }

    if (easy.checked === true) {
        generateNumber(5, 0);
    } else if (medium.checked === true) {
        generateNumber(3, 2);
    } else {
        generateNumber(0, 5);
    }
});


submitButton.addEventListener("click", () => {
    const submittedValue = +input.value;
    if (submittedValue === (sum1 + sum2)) {
        alert("Right");
        startAgain.click();
    } else {
        alert("Wrong");
    }
    input.value = "";
});


startAgain.addEventListener("click", () => {
    summary.style.visibility = "hidden";
    modal.style.display = "block";
    sum1 = 0;
    sum2 = 0;
})


input.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitButton.click();
    }
});
