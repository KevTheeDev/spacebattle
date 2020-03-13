// // ************** SPACESHIP GAME ****************************



// class US {
//     // console.log('\n', '********** US SHIP ***************') 

//     constructor(hull = 20, firepower =5, accuracy = .7) {
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//     }
//     remaining (){
//         console.log(`The US now has ${this.hull} left over`)
//     }
//     attack(){
//         let attack = parseFloat(Math.random().toFixed(1));
//         if (attack <= this.accuracy) {
//             console.log(`Your accuracy was: ${attack}, You hit the enemy alien ship! There was damage done to it.`);
//             aliens[0].hull -= ship.firepower;
//             aliens[0].remaining();

//             console.log(`The US did damage to the alien's ship`)
//             aliens.hull -= ship.firepower;
//         } else {
//             console.log(`Your accuracy was: ${attack},  You Missed', '\n'`)
//         }
//     }
// }
// const ship = new US();





// // class alienShip() {
// //     console.log('\n', '********** ALIEN SHIP ***************')

// //     //* (max - min + 1) + min) ---> to make math.random return a number btw only a few numbers
// //     let alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;

// //     //if statement to check for accuracy and attack
// //     if (alienHull > 3 || alienHull < 6) {
// //         console.log(`Your accuracy was ${alienHull}. You hit the US ship`);
// //     } else {
// //         console.log('You missed. Haha', '\n')
// //     }
// // }
// // alienShip();


// class Alien {
//     constructor (hull = 3, firepower = 2, accuracy = .6) {

//         // between 3 - 6
//         this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;

//     constructor (hull = 20, firepower = 2, accuracy = .6) {
//         this.hull = hull;

//         // between 2-4
//         this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;

//         // between .6 & .8
//         this.accuracy = Math.floor(Math.random() * (0.6 - 0.8 + 1)) + 0.8;
//     }
//     remaining (){
//         console.log(`Alien ship now has ${this.hull} hull left over`)
//     }
// }

// const alien1 = new Alien();
// const alien2 = new Alien();
// const alien3 = new Alien();
// const alien4 = new Alien();
// const alien5 = new Alien();
// const alien6 = new Alien();
// // console.log(alien.hull);
// let aliens = [alien1, alien2]


// // check the outcome of funciton USship
// //let.. check...= .call(); wouldn't work because USship doesn't have any parameters to use ship
// // let checkUsAttack = USship.call(ship); 
// // console.log(checkUsAttack); //gave undefines




// //  this function attacks and reduces or increases the number in the USHull; use a class in this
// // use function accuracy()
// //     if (Math.random > .6 || Math.random < .8) {
// //         console.log('you have been hit')
// //     }
// //     console.log('number of points taken from ${USHull}')



// // Math.random <= 0.8
// // this function attacks and reduces or increases the number in the alienHull;
// //     call function accuracy() in order to calculate
// //     if any points should be taken away from alienHull;
// //     if () {
// //         subtract points from alienHull;
// //     }
// //     if (Math.random)
// //         console.log('number of points taken from ${alienHull}')
// // function accuracy() {
// //     // use Math.random()
// //     // maybe an
// //     // if () {
// //     //     make the conditions of Math.random to be between 1 and 0.1
// //     //     console.log('Accuracy is ${Math.random}')
// //     }
// // }
// // function accuracy(.7);
// // console.log($ { Math.random() })






// // class Alien {
// //      constructor() {
// // this.hull =  6; // add random math method between 3 - 6; 
// // this.firepower = 3; // add random math method between 2 - 4;
// // this.accuracy =  0.7; // add a random math method betweeb 0.6 - 0.8 
// //     }

// // }



// // class usShip {
// //     constructor() {
// //         this.hull = 20;
// //     }
// // }
// // const alien1 = new Alien();
// // const alien2 = new Alien();
// // const alien3 = new Alien();
// // const alien4 = new Alien();
// // const alien5 = new Alien();
// // const alien6 = new Alien();
// // const player1 = new usShip();
// // console.log(player1.hull)
// // console.log(alien1.hull)


// // let player1Score = 0;


// // const startGame() {
// // conditional here
// // first player accuracy <= 0.8 // IF FALSE   =======>  it is alien1 turn  and if it destroys player1 then update hull -1 
// // destroy alien1  // how to delete class 
// // update player1score = 1; 
// // continue with the game
// // update player1score = 6
// // user wins! 
// //}







// // // let beggining = prompt("Your mission is to defend earth from an alien attack type yes to continue or no to let earth perish");{
// // //     if (beggining === "yes") {
// // //         prompt("type attack to attack")
// // //         let attack= f
// // //     }
// // //     if (beggining === "no"){
// // //         alert('Game Over earth is destroyed')
// // //     }
// // //     else (prompt("invalid input please type yes or no"))
// // }