module Home { // Home sweet module "Home"

    export class Door {

        private chair: Chair = new Chair("1");

        constructor(public name: string) {
            if(name == "front" || name == "back") {
                console.log("door " + name + " is opened")
            } else {
                console.error("someone tried to illegally enter the house!");
            }
        }


    }

    class Chair {
        constructor(public id:String) {}
    }

}


var door = new Home.Door("front");
//var chair = new Home.Chair(); // is not accessible because it was not exported out of the module



