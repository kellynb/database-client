const Stout = require('./models/BeerModel');

function create(theThing,done){
    const newStout = new Stout(theThing);
    newStout.save((err,stouts) => {
        if (err) return console.error(err);
        done(stouts);
    })
}

module.exports = create;