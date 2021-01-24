const mu = require('./myUtil');
class Human {
    constructor(name, age = mu.getRandom(80, 90)) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(this.name, this.age);
    }
}
module.exports.Human = Human;