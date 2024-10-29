
//Declaration of variables
// const generateAdvice = document.getElementById('Genearte-advice');
const advice = document.getElementById('advice');

//function to generate advice
// generateAdvice.addEventListener("click", fetchAdvice);

//Asynchronous function to fetch advice
async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();

        // console.log(data);
        advice.innerText = data.slip.advice;
        
    } catch (error) {
        console.error("Error fetching advice:", error);
        advice.innerText = "Oops! Something went wrong.";
    }
};

fetchAdvice();



//Array of cars

const cars = ['bmw', 'toyota', 'ford']
cars[3] = 'lexus'
console.log(cars)





