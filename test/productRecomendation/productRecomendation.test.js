'use strict';

const {
  bankProductRecomendation
} = require('./../productRecomendation');
const {
  request,
  response
} = require('./request').default;
const mocha = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Test cases to get the most suitable product', () => {
  describe('Iteration 1', () => {
    it('Iteration, Classic Plus age > 18, income > 45000 & student = no', () => {
      const recomended = bankProductRecomendation(request.one.age, request.one.student, request.one.income);
      expect(recomended).to.deep.equal(response.one);
    });
  });
});
