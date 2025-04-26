//This imports the message components from the messageComponents.js file
import { omens, divinationElements, vaguePredictions } from './messageComponents.js';

// This is a function that provides a prediction
const soothsayer = () => {
    const omen = omens[Math.floor(Math.random() * omens.length)];
    const divination = divinationElements[Math.floor(Math.random() * divinationElements.length)];
    const prediction = vaguePredictions[Math.floor(Math.random() * vaguePredictions.length)];
    return `${omen} and ${divination}. ${prediction}`;
};

// Call the soothsayer function to start the program
console.log(soothsayer());