import { expect } from 'chai';

import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 6 when `mult(3,2)`', () => {
      expect(mult(3, 2)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `não é possível dividir por zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível dividir por zero');
    });
  });

});
