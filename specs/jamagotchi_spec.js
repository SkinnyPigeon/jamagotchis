var assert = require('chai').assert
var Jamagotchi = require('../jamagotchi')

describe( "The Jamagotchi", function() {
  beforeEach( function() {
    jeff = new Jamagotchi( "Jeff", "👻" )
    jeff.eat( "cake")
  })

  it( "Should have a name", function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( "Should have an icon", function() {
    assert.equal( "👻", jeff.icon )
  })

  it( "Should be able to eat", function() {
    assert.deepEqual( ["cake"], jeff.food )
  })

  it( "Should empty it's tummy after a second", function() {
      console.log( jeff.food )    
    jeff.digest()
    // var hello = function( done ) {
    //   var result = "" 
    //   if( jeff.food != [] ) {
    //     result = "Failed"
    //   }
    // // assert.deepEqual( [], jeff.food )  
    // done( result )
    // }

    setTimeout( function( done ) {
      var result = "" 
      if( jeff.food != [] ) {
        result = "Failed"
      }
    // assert.deepEqual( [], jeff.food )  
    done( result )
    }, 2000 )
  })

})