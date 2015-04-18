
function Monster (name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}
function Player (name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
	this.playerClass = playerClass;
}
var monsterArray = [];

function clickHandler (player) {
	monsterArray.push(player);
	document.getElementById("addMonster").addEventListerner("click", clickHandler);
}
