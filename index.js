const mongoose = require('mongoose');
const create = require("./create");
const findAll = require("./find-all");
const findById = require("./find-by-id");
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


global.readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

printMenu();
function printMenu(){
  console.log("1. Create a new thing");
  console.log("2. Find all things");
  console.log("3. Find a thing by id");
  console.log("4. Find a thing by");
  console.log("5. Exit");
  getMenuInput();
}


function getMenuInput(){
  readline.question(">>", function(answer) {
    if(answer === "1"){
      createThing();
    }
    if(answer === "2"){
      findAllThings();
    }
    if(answer === "3"){
      findThingById();
    }
    if(answer === "4"){
      createThing();
    }
    if(answer === "5"){
      readline.close();
      process.stdin.destroy();
    }
  });
}

function createThing(){

}
function findAllThings(){

}
function findThingById(){

}