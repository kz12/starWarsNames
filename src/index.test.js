import {expect} from 'chai';
import starWars from './index';

describe('startwars-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);
      
      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        })
      }
    });
    
    it('should contain `Kai Zhong`', function() {
      expect(starWars.all).to.include('Kai Zhong');
    });
  });
  
  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
    
    it('should return an array of random items if passed a number', function() {
      var randomItems = starWars.random(5);
      expect(randomItems).to.have.length(5);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  })
});