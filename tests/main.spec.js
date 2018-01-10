const { expect } = require('chai');

const calc = require('../src/main.js');

describe('Calc', () => {

  // smoke tests
  describe('smoke tests', () => {


    it('should exist the Calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(calc.sub(2, 2)).to.be.equal(0);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 6 when `mult(3,2)`', () => {
      expect(calc.mult(3, 2)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it('should return `não é possível dividir por zero` when divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível dividir por zero');
    });
  });

});
