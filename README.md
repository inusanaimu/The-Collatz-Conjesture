# The-Collatz-Conjesture Visualizer

Collatz Conjecture is a simple math problem that has been a subject of research for many years. The problem is easy to explain: choose any positive integer n and apply the following rule repeatedly:

if n is even, divide it by 2
if n is odd, multiply it by 3 and add 1
The conjecture is that no matter what number you start with, you will always end up at 1. Despite being easy to understand, the problem has remained unsolved for many years, and its solution is still unknown.

This project is an implementation of the Collatz Conjecture problem in JavaScript. It allows users to enter a positive integer and see the steps required to reach 1. Additionally, the program stores the previous ten sequences and displays them on a graph.

**Getting Started**
To use this web app, simply open the index.html file in your web browser. Alternatively, you can visit the live demo on [**https://collartz.netlify.app**](https://collartz.netlify.app/).

**Usage**
To use the program, enter a positive integer in the input box and press Enter. The program will display the steps required to reach 1, as well as the sequence of numbers generated along the way.

The program also stores the previous ten sequences and displays them on a graph. The x-axis represents the steps taken to reach 1, and the y-axis represents the numbers generated along the way. Each line on the graph represents a different sequence.

To clear the previous sequences, click the "Reset" button.

The app can also be used to compare the paths taken for multiple integers. Simply enter a new integer, and the graph will update to show the new path alongside the existing ones. The graph will only show the 10 most recently entered integers, and will remove older entries as new ones are added.


**Acknowledgements**
This project was created by Inusa Naimu.
This project was inspired by the [**Veritasium**](https://www.youtube.com/results?search_query=veritasium+collatz+conjecture) YouTube channel and its video on the Collatz Conjecture, and its uses the [**Chart.js**](https://www.chartjs.org/) library for graphing.
