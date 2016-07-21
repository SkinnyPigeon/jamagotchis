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
  this.damage = 0;
  this.health = 100;
  this.special = 3;
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
    if( this.health <= 0 || 
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

  punch: function( opponent ) {
      if( this.energy > 0 ){
      this.damage = 5;
      opponent.health -= this.damage;
      this.damage = 0;
      this.energy -= 1;
    }
  },

  super: function( opponent ) {
    if( this.health >= 50 && this.special > 0 && this.energy === 3 ) {
      this.damage = 15;
      opponent.health -= this.damage;
      this.damage = 0;
      this.special -= 1;
      this.energy -= 3;
    }
  },

  rest: function() {
    if( this.energy <= 2 ) {
      this.energy += 1
    }
  }





}

module.exports = Tamamoji;














