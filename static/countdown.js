const COUNT_LIMIT = 1000000000;
let countPassed = 0;
let countLeft = COUNT_LIMIT;

let timerInterval = null;



 function startCount() {

    countInterval = setInterval(() => {

       
        countPassed = countPassed += 1;
        countLeft = COUNT_LIMIT - countPassed;


        formattedCountLeft = '$ '+`${countLeft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` + ' reward for his capture, mashed or alive.'
        document.getElementById("base-timer-label").innerHTML = formattedCountLeft

       

    },1000)

};

let currentCount = startCount()
    window.localStorage(countPassed) 