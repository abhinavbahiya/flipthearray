'use strict';

const {
  flipTheArray,
  flip
} = require('./../flipTheArray');
const {
  request,
  response
} = require('./request').default;
const mocha = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Test cases to flip the array', () => {
  describe('Iteration with n = 3', () => {
    it('Iteration for rotation 2', () => {
      const flipResponse = flip(request.one.arr, request.one.n, request.one.k);
      expect(flipResponse).to.deep.equal(response.one);
    });
  });

  describe('Iteration with n = 4', () => {
    it('Iteration for rotation 13', () => {
      const flipResponse = flip(request.two.arr, request.two.n, request.two.k);
      expect(flipResponse).to.deep.equal(response.two);
    });
  });
});
