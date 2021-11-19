import Vehicle from "./Vehicle.js";

//this includes the vehicle class as a module
const VehicleModule = require("./Vehicle.js")

class Sedan extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100
        this.scheduleService = false
    }

    loadPassenger(passengers){
        if (this.Passenger < this.maxPassenger){
            console.log('This is more seats to fill in this Whio!!!');
            return availableRoom == true;
        }
        else {
            console.log("Ain't no room in this whip")        
        }
    }

    scheduleServices(mileage) {
        if (this.mileage >= 30000){
            console.log("This Vehicle nees to be looked at!")
            return this.scheduleService == true;
        }
        else {
            console.log("Vehicle Systems are All Good!")
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("Engine has Started!!!")
            return this.started == true;
        }
        else {
            console.log("Engine is not ON!")
            return this.started == false;
        }
    }
} 


class Truck extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassenger = 4;
        this.passenger = 0;
        this.numberOfWheels = 8;
        this.maximumSpeed = 180;
        this.fuel = 100;
        this.scheduleService = false;
        this.towHitch = true;
    }
    loadPassenger(passengers){
        if (this.Passenger < this.maxPassenger){
            console.log('This is more seats to fill in this Whio!!!');
            return availableRoom == true;
        }
        else {
            console.log("Ain't no room in this whip")        
        }
    }

    scheduleServices(mileage) {
        if (this.mileage >= 30000){
            console.log("This Vehicle nees to be looked at!")
            return this.scheduleService == true;
        }
        else {
            console.log("Vehicle Systems are All Good!")
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("Engine has Started!!!")
            return this.started == true;
        }
        else {
            console.log("Engine is not ON!")
            return this.started == false;
        }
    }

    tow() {
        if(this.towHitch === true) {
            console.log("This Vehicle has towing enabled!");
        }
        else {
            console.log("This Vehicle does not have towing capabilities");
        }

    }
}



//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let mercury = new Sedan("Mercury", "A28", "2007", "Purple", "32200")
console.log(mercury)