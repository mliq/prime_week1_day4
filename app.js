// Global Variables

var playerArray = [];
var monsterTable = document.getElementById("monsters");
var i = 0;

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

// Monster attack() function rolls a 20-sided die and adds the strength
Monster.prototype.attack = function() {
    // Roll a 20-sided die
    var diceRoll = Math.floor(Math.random() * 20) + 1;
    // Add the monster's strength bonus and return it
    return diceRoll + this.strength;
};

// Adds the monster to the table view
Monster.prototype.addToTable = function() {
    // Temporarily pack monster attributes in an array so that we can loop through them instead of assigning them one at a time
    var statsArray = [this.name, this.strength, this.dexterity, this.constitution, this.wisdom, this.intelligence, this.charisma];
    // Create a new row at the bottom of the table
    var newRow = monsterTable.insertRow(-1);
    // Loop through the array, creating a new table cell element and adding the text of each item in the array to it in order
    for (i=0; i<statsArray.length; i++) {
        var newCell = newRow.insertCell(i);
        newCell.innerHTML = statsArray[i];
    }
};

// Override the Monster's attack() function
Player.prototype.attack = function() {
    // Roll a 20-sided die
    var diceRoll = Math.floor(Math.random() * 20) + 1;
    // Add the player's dexterity bonus and return it
    return diceRoll + this.dexterity;
};

// Called when we press the submit button
function addMonster(){
	var name = document.getElementById("name").value;
	var strength = document.getElementById("strength").value;
	var dexterity = document.getElementById("dexterity").value;
	var constitution = document.getElementById("constitution").value;
	var wisdom = document.getElementById("wisdom").value;
	var intelligence = document.getElementById("intelligence").value;
	var charisma = document.getElementById("charisma").value;
	var playerClass = document.getElementById("class").value;
	var newPlayer = new Player (name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass);
	playerArray.push(newPlayer);
    newPlayer.addToTable();
}