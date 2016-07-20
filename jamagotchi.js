var _ = require('lodash')
var Poop = require('./poop')

var Jamagotchi = function( name, icon ) {
  this.name = name;
  this.icon = icon;
  this.food = [];
  this.energy = 3;
  this.waste = [];
  this.alive = true;
  this.ill = false;
}

Jamagotchi.prototype = {
  eat: function( food ) {
    this.food.push( food )
  },
  
  hunger: function() {
    setTimeout( this.digest(), 1000 )
  },

  digest: function() {
      this.food.pop()
      this.poop()
  },

  poop: function() {
    var plop = new Poop()
    this.waste.push( plop )
  },

  dead: function() {
    if( this.energy <= 0 || 
        this.waste.length >= 5 ) {
      this.alive = false;
    }
  },

  sick: function() {
    if( this.waste.length >= 3 ) {
      this.ill = true;
    }
  },



}

module.exports = Jamagotchi;














