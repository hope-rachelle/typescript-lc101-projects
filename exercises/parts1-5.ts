// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation';


let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
//let milesToMars: number =  kilometersToMars * milesPerKilometer;
//let hoursToMars: number =  milesToMars / speedMph;
//let daysToMars: number =  hoursToMars / 24;

// Code an output statement here (use a template literal):

// Part 3: Create a Function ("getDaysToLocation")
//moved to part 4

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.


// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
        getDaysToLocation(kilometersAway:number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        return hoursToLocation / 24;
    }
        printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
console.log(` ${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}.`)
console.log(`${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}.`)

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`${spaceShuttle.name} will arrive at the moon in ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days.`);
console.log(`${spaceShuttle.name} will arrive in ${spaceShuttle.getDaysToLocation(kilometersToMars)} days.`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars)));
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon)));
// Paste in the code from step 6 here:
