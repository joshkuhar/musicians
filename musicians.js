var Musician = function(sounds) {
    this.sounds = sounds;
};

Musician.prototype.solo = function(length) {
    var solo = "";
    for (var i=0; i<length; i++) {
        solo += this.sounds[i % this.sounds.length] + " ";
    }
    console.log(solo);
};

var Guitarist = function() {
    Musician.call(this, ['Twang', 'Thrumb', 'Bling']);
    this.strings = 6;
};
Guitarist.prototype = Object.create(Musician.prototype);
Guitarist.prototype.constructor = Guitarist;

Guitarist.prototype.tune = function() {
    console.log('Be with you in a moment');
    console.log('Twoning sproing splang');
};

var Bassist = function() {
    Musician.call(this, ['Boink', 'Bow', 'Boom']);
    this.strings = 4;
};
Bassist.prototype = Object.create(Musician.prototype);
Bassist.prototype.constructor = Bassist;
You have your basic objects here, but one more step is needed to allow you to require this file and use them. Node modules follow a specification called CommonJS. To follow the specification you need to put anything which you want to access through an imported module into an object called exports. So let's try it out with our three musician objects. Add the following code to the bottom of musicians.js:

exports.Musician = Musician;
exports.Guitarist = Guitarist;
exports.Bassist = Bassist;
Here you say that the three objects should be exported from the file. Now create a new file in the musicians directory called spinal_tap.js, and add the following code:

var musicians = require('./musicians.js');

var nigel = new musicians.Guitarist();
nigel.tune();
nigel.solo(8);

var derek = new musicians.Bassist();
derek.solo(4);

exports.Musician = Musician;
exports.Guitarist = Guitarist;
exports.Bassist = Bassist;