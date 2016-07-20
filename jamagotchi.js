var _ = require('lodash')

var Jamagotchi = function( name, icon ) {
  this.name = name;
  this.icon = icon;
  this.food = [];
  this.energy = 3;
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
  },

}

module.exports = Jamagotchi;