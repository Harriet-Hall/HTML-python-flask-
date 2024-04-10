const COUNT_LIMIT = 1000000000;
let countLeft 
let countPassed = 0
let timerInterval = null;



function startCount(countLeft) {

    countInterval = setInterval(() => {
        countPassed += 1;
        countLeft = COUNT_LIMIT - countPassed;
        formattedCountLeft = '$ ' + `${countLeft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` + ' reward for his capture, mashed or alive.'
        document.getElementById("base-timer-label").innerHTML = formattedCountLeft
        window.localStorage.setItem("countLeft", countLeft.toString());
        window.localStorage.setItem("countPassed", countPassed);
    }, 1000)

};


window.onload = function () {
    let numLeft = window.localStorage.getItem("countLeft")
    let numPassed = window.localStorage.getItem("countPassed");

    if (numPassed !== null && numLeft !== null) {
        countPassed = parseInt(numPassed); 
        countLeft = parseInt(numLeft);

    } else {
        countLeft = COUNT_LIMIT
        window.localStorage.setItem("countLeft", countLeft.toString());
    }
startCount(countLeft)
}