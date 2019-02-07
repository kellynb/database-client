## Setup
* Fork, Clone, npm install mongoose

## Intro
We want to build a console app that will allow a user to provide input and save it to a database. The user must also be able to retrieve information to view it.

We are going to use readline to accept information from the user so we need to be comfortable using this tool.

The user will be presented with a menu with a number representing the options. When the user enters the number and hits enter, your code needs to execute the appropriate task.

Decide what "thing" you want your app to represent. We will keep it simple and only input information for one "thing". products, students, vehicles..etc.

Replace all instances of "thing" with your choice.


## Database
* Make sure you have a database setup in mlab
* Use mongoose to connect to it


## Model
* Create a model folder and a model file for whatever "thing" you have choosen

## Find All
* Code in find-all.js
* Use the model.find() to retrieve all things from the database
* Loop the data array and console.log out each item in a user friendly manner, don't console.log the entire array
* Display the main menu again
* Bonus: only show 5 items at a time and have the user hit enter to page to the next 5 items.

## Create
* We want to create a new document in the database by asking the user for the input for it.
* Code in the create.js file.
* Add as many readline.questions as you need to get all the input for your thing
* Store the answers in the object newThing
* When all questions are answered, use your mongoose model to save the information to the database.
* After save, show the main menu again
* Bonus: add verification. Ask if the information looks good as a yes/no questions. If the answer is yes, save it. If the answer is no, ask for the input again.


