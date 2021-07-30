import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket implements Payload {
    name:string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items:Payload[]):number {
        let totalPayloadMass:number = 0;
        let i:number = 0
        for(i; i<items.length; i++){
            totalPayloadMass += items[i].massKg;
        }
        return totalPayloadMass
    }
    currentMassKg():number{
        return(this.sumMass(this.astronauts)) + (this.sumMass(this.cargoItems));
    }
    canAdd(item: Payload): boolean{
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }      
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
        } else {
          return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
          } else {
            return false;
          }
      }   
    }

 