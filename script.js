//Declaring Arrays

let players = ["Watt", "Heyward", "Fields", "Fitzpatrick", "Pickens"];

console.log(players);

//Accessing Arrays

let DE = players[0], WR = players[4], QB = players[2]

console.log(DE, WR, QB);

//Using Array Properties

console.log(players.length);

//Array Methods

players.push("Porter Jr.");

console.log(players);

players.pop();

console.log(players);

players.sort();

console.log(players);

//Iterating Through Arrays

const iterator = players.values();
for (let i of iterator) {
    console.log(i);
}

//Array Destructing

let [Quarterback, Safety, ...Roster] = players;

console.log(Quarterback, Safety);
console.log(Roster);