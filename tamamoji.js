var _ = require('lodash')
var Poop = require('./poop')

var Tamamoji = function( name, icon ) {
  this.name = name;
  this.icon = icon;
  this.food = [];
  this.energy = 3;
  this.waste = [];
  this.alive = true;
  this.ill = false;
  this.happy = false;
  this.hungry = true;
}

Tamamoji.prototype = {
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

  setMood: function() {
    if( this.food.length >= 1 && 
        this.food.length <= 4 ) {
      this.happy = true
    }
  },

  setHunger: function() {
    if( this.food.length === 0) {
      this.hungry = true
    }
  },



}

module.exports = Tamamoji;














