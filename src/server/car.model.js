var mongoose = require('mongoose');

var carsSchema = mongoose.Schema({
    id: Number,
    name: String,
    size: String
});

carsSchema.methods.vroom = function () {
    var greeting = this.name
        ? "Vroom name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

var Car = mongoose.model('Car', carsSchema);

module.exports = Car;