# Week 1 day 4 - Function Prototyping
##Assignment Overview

In this assignment you will create your own Git repository, and learn about Objects and Function Prototypes. To do this you will be creating a very simple application for the recording of statistics for players and monsters in the game Dungeon and Dragons, and storing those in an array. 

**Instructions:**

  - Create a brand new repository under your GitHub account. Give it a descriptive name such as "Week1-Day4", and a description such as "Week 1 day 4 - Function Prototyping".
  - 
  - Create a new HTML file named `index.html`.
  - Inside of the HTML file, create a simple HTML document. Add the following to the document:
    - A title, description and author metadata.
    - A label with `Name:` as the text.
    - A textbox that has an id of `name`. 
    - Create six more label/textboxes for Strength, Dexterity, Constitution, Wisdom, Intelligence and Charisma. Be sure to give the text boxes unique IDs as well.
    - A third label with `Player Class (Optional)`.
    - A textbox with the id `class`.
    - A button with the text `Add Player/Monster to Records`.
    - Finally, add a table with eight columns, with the headers `Name`, `Strength`, `Dexterity`, `Constitution`, `Wisdom`, `Intelligence`, `Charisma` and `Player Class (Optional)`.
  - Create a new CSS file named `styles.css`.
    - Add a reference to this file in `index.html`.
    - Add any styles you want to make this app look nicer. Look at W3 School's [CSS Tables](http://www.w3schools.com/css/css_table.asp). 
  - Create a new JavaScript file named `app.js`.
    - Add a reference to this file in `index.html`.
    - Create an object called `Monster` that has the properties `name`, `strength`, `dexterity`, `constitution`, `wisdom`, `intelligence`, and `charisma`.
    - Create an object called `Player` that inherits from `Monster`, and has the additional property `playerClass`.
    - 

  
####Be sure to commit your changes to your development branch frequently!