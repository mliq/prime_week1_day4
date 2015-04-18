// Monster Constructor
function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

// Follow this link for more information
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance

// Player Constructor
function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
    // Call Monster() and pass in the stats
    Monster.call(this, name, strength, dexterity, constitution, wisdom, intelligence, charisma);
    // Set the player class
    this.playerClass = playerClass;
}

// Make the Player(name...) constructor also create a monster object? This is the inheritance part
Player.prototype = Object.create(Monster.prototype);
// Set the player's constructor to specifically be Player(name...)
Player.prototype.constructor = Player;

var player1 = new Player ("Rom", 5, 6, "nice", "excellent", "excellent", 10, "warrior");
console.log(player1);
console.log(player1 instanceof Monster);
//this works 
var monsterArray = [];

function clickHandler (player) {
	makePlayer();
	//monsterArray.push(player);
	//document.getElementById("addMonster").addEventListener("click", clickHandler);
}

function makePlayer(){
	var name = document.getElementById("name").value;
	console.log(name);
}
