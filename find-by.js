const Stout = require('./models/BeerModel');

function findBy(theValue, done){
    let key = theValue.category;
    let value = theValue.value;
    if(key !== 'name') {
      value = parseInt(value);
    }
    Stout.find({[key]:value}, (err,stouts) => {
        if (err) return console.error(err);
        done(stouts);
    })
    
}


module.exports = findBy;