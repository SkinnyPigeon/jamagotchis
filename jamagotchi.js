var _ = require('lodash')

var Jamagotchi = function( name, icon ) {
  this.name = name;
  this.icon = icon;
  this.food = [];
  this.hunger = 3;
}

Jamagotchi.prototype = {
  eat: function( food ) {
    this.food.push( food )
  },

  digest: function() {
    var time = setInterval( eatFood, 1000 )
    var eatFood = function() {
      this.food.pop()
    }
  },
}

module.exports = Jamagotchi;