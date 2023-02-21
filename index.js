var mapArray = []

function InputEnter(){
    if (event.key === "Enter"){
        event.preventDefault();
        calculate();
    }
}

function calculate() {
    var number = document.getElementById("number").value;
    if (number === '') {
        alert("Input a number")
        return
    }
    if (number <= 0) {
        alert("Enter a positive Integer")
        return
    }
    const label = number
    var result = document.getElementById("result");
    const step = document.getElementById("steps");
    
    var sequence = [+number];
    let steps = 0;
    while (number != 1) {
        steps++
        if (number % 2 == 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
        sequence.push(number);
    }
    // console.log(steps)
    step.innerHTML = "There are "+ steps +" steps taken to arrive at 1 ";
    result.innerHTML = "The sequence is: " + sequence.join(" | ");

    let newObj = {steps, label, sequence}

    const exists = mapArray.some(obj => JSON.stringify(obj) === JSON.stringify(newObj))
    if(!exists){
        mapArray.push(newObj)
        plotMultiplyGrahp(mapArray)
    }
    // plotGraph(steps, label, sequence)
}

function plotMultiplyGrahp(objsArray){

    const canvasDiv = document.getElementById('canvasDiv');
    const resultSection = document.getElementById('result-section');
    const ctx = document.getElementById('myChart');
    let chart = Chart.getChart(ctx);
    if(chart) {
        chart.destroy()
    };

    const biggestSteps = findBiggestNumber(objsArray, 'steps');
    new Chart(ctx, {
        type: 'line',
        data:{
            labels: createArray(biggestSteps),
            datasets:  objsArray.map(item => {
            console.log(item)
            return {label: `path taken by ${item.label}`,
                data: item.sequence,
                borderWidth: 1}
                }),
            },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    canvasDiv.style.display = 'block';
    resultSection.style.display = 'flex';

}

// function plotGraph(labels, label, data){
//     const canvasDiv = document.getElementById('canvasDiv');
//     const resultSection = document.getElementById('result-section');
//     const ctx = document.getElementById('myChart');
//     let chart = Chart.getChart(ctx);
//     if(chart) {
//         chart.destroy()
//     };
//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: createArray(labels),
//             datasets: [{
//                 label: `path taken by ${label}`,
//                 data: data,
//                 borderWidth: 1,
//                 //   borderColor: 'rgba(152, 125, 197, 0.8)',
//             },
//             // {
//             //     label: `path taken by 7`,
//             //     data: [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1],
//             //     borderWidth: 1,
                
//             // }
//         ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
//     canvasDiv.style.display = 'block';
//     resultSection.style.display = 'flex';
// }

function reload(){
location.reload()
}

// Helper function
function findBiggestNumber(arr, prop) {
let biggestNum = Number.NEGATIVE_INFINITY;
for (let obj of arr) {
if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'number') {
if (obj[prop] > biggestNum) {
biggestNum = obj[prop];
}
}
}
return biggestNum;
}


// Helper Function 
function getLongestArray(arr) {
let longestArr = [];
for (let obj of arr) {
for (let key in obj) {
if (Array.isArray(obj[key])) {
if (obj[key].length > longestArr.length) {
  longestArr = obj[key];
}
}
}
}
return longestArr;
}

 
// Helper Function 
function createArray(number){
    
    const rangeArray = [];
    for (let i = 0; i <= number; i++) {
        rangeArray.push(i);
    }
    return rangeArray
}