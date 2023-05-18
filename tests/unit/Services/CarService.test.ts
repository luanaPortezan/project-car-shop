import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carListGetResponse, carListMongoResponse, 
  newCarMongoResponse, newCarPost, newCarPostResponse, 
  newCarUpdatedMongoResponse, newCarUpdatedPost } from './Mocks/CarMock';
import CarService from '../../../src/Services/CarService';

describe('Test CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Registering new car', async function () {
    sinon.stub(Model, 'create')
      .resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service
      .insertOneCar(newCarPost);
    expect(result).to.be.deep
      .equal(newCarPostResponse);
  });

  it('Searching all cars', async function () {
    sinon.stub(Model, 'find')
      .resolves(carListMongoResponse);
    const service = new CarService();
    const result = await service.findAll();
    expect(result).to.be.deep
      .equal(carListGetResponse);
  });

  it('Searching a car by id', async function () {
    sinon.stub(Model, 'findById')
      .resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service
      .findById('6448542ef7475359162577f1');
    expect(result).to.be.deep
      .equal(newCarPostResponse);
  });

  it('Updating a car by id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate')
      .resolves(newCarUpdatedMongoResponse);
    const service = new CarService();
    const result = await service
      .updateOne(
        '6448542ef7475359162577f1',
        newCarUpdatedPost,
      );
    expect(result).to.be.deep
      .equal(newCarUpdatedPost);
  });

  it('Remove a car by id', async function () {
    sinon.stub(Model, 'findByIdAndDelete')
      .resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service
      .removeOne('6448542ef7475359162577f1');
    expect(result).to.be.deep
      .equal(newCarPostResponse);
  });
});