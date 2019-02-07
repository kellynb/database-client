let newThing = {

}

function askForInput(done){
    readline.question("What is the name?", function(answer) {
      done();
    });
}
function create(done){
    askForInput(done);
}

module.exports = create;