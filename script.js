let d = new Date()
// let birthDateInput = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
// let birthDateInput = new Date();
// let ageExpectancyInput = parseInt(document.querySelector("input[name=age-expectancy]").value);
const birthDate = document.querySelector("input[name=birth-date]");
const ageExpectancy = document.querySelector("input[name=age-expectancy]");
// let ageExpectancyDate;

const containerYearly = document.querySelector("#container-yearly");
const containerMonthly = document.querySelector("#container-monthly");
const containerWeekly = document.querySelector("#container-weekly");
const radios = document.querySelectorAll('input[name=grid-type]');

birthDate.addEventListener('change', function() {
    input = birthDate.value;
    birthDateInput = new Date(input);
    // console.log(birthDateInput); //e.g. 2015-11-13
    // console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
    // ageExpectancyDate = birthDateInput.getDate() + "-" + (birthDateInput.getMonth()+1) + "-" + parseInt(birthDateInput.getFullYear() + parseInt(ageExpectancyInput));
    // document.querySelector('#ageExpectancyDate').innerHTML = ageExpectancyDate;
    drawBoxes();
    return birthDateInput;
});

function drawBoxes() { 
    birthDateInput = new Date(birthDate.value);

    containerYearly.innerHTML = '';
    containerYearly.style.display = 'none';
    containerMonthly.innerHTML = '';
    containerMonthly.style.display = 'none';
    containerWeekly.innerHTML = '';
    containerWeekly.style.display = 'none';
    // ageExpectancyInput = this.value;
    ageExpectancyInput = parseInt(document.querySelector("input[name=age-expectancy]").value);
    // console.log(ageExpectancyInput); 
    ageExpectancyDate = birthDateInput.getDate() + "-" + (birthDateInput.getMonth() + 1) + "-" + parseInt(birthDateInput.getFullYear() + parseInt(ageExpectancyInput));
    // let ageExpectancyDateObj = new Date((birthDateInput.getFullYear() + parseInt(ageExpectancyInput)), (birthDateInput.getMonth()), birthDateInput.getDate());
    
    // document.querySelector('#ageExpectancyDate').innerHTML = ageExpectancyDate;
    // document.querySelector('#ageExpeBirthDiffrence').innerHTML = (ageExpectancyDateObj.getDate()-birthDateInput.getDate()) + "-" + (ageExpectancyDateObj.getMonth()-birthDateInput.getMonth()) + "-" + (ageExpectancyDateObj.getFullYear() - birthDateInput.getFullYear());

    timeGone = d.getFullYear() - birthDateInput.getFullYear()
    if (document.getElementById("yearly").checked){
        makeRowsRed(timeGone/10, 10, containerYearly)
        makeRows(((ageExpectancyInput-timeGone)/10), 10, containerYearly);
        // #TODO:
        // change the minimum of age expectancy input to timegone
    } else if (document.getElementById("monthly").checked) {
        timeGoneMonths = timeGone * 12;
        makeRowsRed((timeGoneMonths/24), 24, containerMonthly);
        let ageExpectancyInputMonths = ageExpectancyInput * 12
        makeRows(((ageExpectancyInputMonths-timeGoneMonths)/24), 24, containerMonthly);
    } else if (document.getElementById("weekly").checked) {
        timeGoneWeeks = timeGone * 52.17857;
        makeRowsRed((timeGoneWeeks/52), 52, containerWeekly);
        let ageExpectancyInputWeeks = Math.floor(ageExpectancyInput * 52.17857)
        makeRows((ageExpectancyInputWeeks-timeGoneWeeks)/52, 52, containerWeekly);
    }
}
drawBoxes();

['change','keyup'].forEach( evt => ageExpectancy.addEventListener(evt, drawBoxes, false));
birthDate.addEventListener('change', drawBoxes)

for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].onclick = function () { 
            drawBoxes();
        // console.log(this.value);
    }
}

function makeRows(rows, cols, cont) {
    cont.style.setProperty('--grid-rows', rows);
    cont.style.setProperty('--grid-cols', cols);
    cont.style.setProperty('display', 'grid');
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        if (cont.id == 'container-yearly') {
            cont.appendChild(cell).className = "grid-item-yearly";
        }else{
            cont.appendChild(cell).className = "grid-item";
        }
    };
};
function makeRowsRed(rows, cols, cont) {
    cont.style.setProperty('--grid-rows', rows);
    cont.style.setProperty('--grid-cols', cols);
    cont.style.setProperty('display', 'grid');
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        if (cont.id == 'container-yearly') {
            cont.appendChild(cell).className = "grid-item-red-yearly";
        }else{
            cont.appendChild(cell).className = "grid-item-red";
        }
    };
};


// function whichRadioSelected() { 
//     for (var i = 0, length = radios.length; i < length; i++) {
//         radios[i].onclick = function () { 
//             console.log(this.value);
//         }
//     }
// }

