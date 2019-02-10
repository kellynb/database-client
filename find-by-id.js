const Stout = require('./models/BeerModel');

function findById(id, done){
    Stout.findById(id, (err, stouts) => {
        done(stouts);
    })
}


module.exports = findById;