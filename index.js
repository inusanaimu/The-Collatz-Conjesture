            
            var mapArray = []
            let hasRun = false;
            let timeoutId
            
            function resetDefault(){
                if (!hasRun){
                    console.log('resetDefault')
                    initialIntro("clear")
                    mapArray=[];
                    hasRun = true;
                }
                
                
            }
            
          
            function InputEnter(){
            if (event.key === "Enter"){
                event.preventDefault();
                calculate();
            }
        }

		function calculate(arg = null) {
            var number;
            if(!arg){
                number = document.getElementById("number").value;
                if (number === '') {
                    alert("Input a number")
                    return
                }
                if (number <= 0) {
                    alert("Enter a positive Integer")
                    return
                }
            }else{
                number = arg;
                console.log(number);
            }
            
            const label = number
			var result = document.getElementById("result");
            const step = document.getElementById("steps");
            
			let sequence = [+number];
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
  
			step.innerHTML = "There are "+ steps +" steps taken to arrive at 1 ";
			result.innerHTML = "The sequence is: " + sequence.join(" | ");

            let newObj = {steps, label, sequence}

            const exists = mapArray.some(obj => JSON.stringify(obj) === JSON.stringify(newObj))
            if(!exists){
                mapArray.push(newObj)
                plotMultiplyGrahp(mapArray)
            }

            if (mapArray.length == 10){
                mapArray.shift()
            }
   
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
        


function reload(){
    location.reload()
}


function initialIntro(arg) {
    console.log("initialIntro")
    if(!arg){
         timeoutId = setTimeout(() => {
            console.log('run')
             const randomNumber = Math.floor(Math.random() * 100) + 1;
             calculate(randomNumber);
             initialIntro();
         }, 5000);
         timeoutId();
        }

        clearTimeout(timeoutId)

    }


window.onload = (() =>{
    initialIntro();
    console.log('loaded')
})


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