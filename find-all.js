const Stout = require('./models/BeerModel');

function findAll(done){
    Stout.find((err,stouts) => {
        if (err) return console.error(err);
        done(stouts);
    })
    
}


module.exports = findAll;