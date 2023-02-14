function calculate() {
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");
    const step = document.getElementById('steps');
    var sequence = [number];
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
    console.log(steps)
    step.innerHTML = "There are "+ steps +" steps taken to arrive at 1 ";
    result.innerHTML = "The sequence is: " + sequence.join(" | ");
}