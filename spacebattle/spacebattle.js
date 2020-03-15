// hull** is the same as hitpoints. If hull reaches `0` or less, the ship is    
    // destroyed
// firepower** is the amount of damage done to the **hull** of the target
// accuracy** is the chance between 0 and 1

class USship {
    constructor(hull = 20, firepower = 5, accuracy = .7){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    //insert remaining hull
}
function fire(){
    if (Math.random() <= this.accuracy){
        console.log(`You hit the Aliens and 5pts damamge to their hull!`)
        aliens[0].hull -=
    }
}

console.log(USship); //change to const ship = new USship


class Alien{
    constructor(hull = 3, firepower = 2, accuracy = .6){
        //generate btw 3 and 6
        // this.firepower = ((Math.random() * (6 - 3) +3));
        this.hull=hull;

        //generates a num btw 2 and 4
        this.firepower = ((Math.random() * (4 - 2) +2));
        //generats a num btw .6 and .8
        this.accuracy = ((Math.random() * (8 - 6) +6) /10);
    }
}


const alien1 = new Alien();
const alien2 = new Alien();
const alien3 = new Alien();
const alien4 = new Alien();
const alien5 = new Alien();
const alien6 = new Alien();

 let aliens = [alien1, alien2, alien3, alien4, alien5, alien6]