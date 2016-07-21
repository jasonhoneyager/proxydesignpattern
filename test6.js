"use strict"

function GetVehicle(){
    this.getVehicle = function(driver){
        if (driver === "hillbilly"){
            console.log("Beat-up Pickup Truck");
        }
        else if (driver === "stoner hippie"){
            console.log("VW Bus");
        }
        else if (driver === "obnoxious millenial"){
            console.log("Kia Soul");
        }
        else if (driver === "6yo with rich parents"){
            console.log("Pow Pow Power Wheels");
        }
        else if (driver === "me in 2018"){
            console.log("Tesla Model III");
        }
        else{
            console.log("Riding the Bus");
        }
    };
}

function VehicleProxy(){
    var findvehicle = new GetVehicle();
    var drivers = [];

    return{
        getVehicle: function(driver){
            if (!drivers[driver]){
                drivers[driver] = findvehicle.getVehicle(driver);
            }
            return findvehicle[driver];
        }
    };
};


var vehicleprox = new VehicleProxy();

vehicleprox.getVehicle("6yo with rich parents");
vehicleprox.getVehicle("Luis");
vehicleprox.getVehicle("stoner hippie");
vehicleprox.getVehicle("hillbilly");
vehicleprox.getVehicle("obnoxious millenial");
vehicleprox.getVehicle("Smelly Hobo");
vehicleprox.getVehicle("stoner hippie");
vehicleprox.getVehicle("hillbilly");
vehicleprox.getVehicle("Schoolbound Kids");
vehicleprox.getVehicle("me in 2018");
vehicleprox.getVehicle();
