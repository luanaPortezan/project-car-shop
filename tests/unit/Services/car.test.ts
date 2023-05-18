import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carListGetResponse, carListMongoResponse, 
  newCarMongoResponse, newCarPost, newCarPostResponse } from './Mocks/car.mock';
import CarService from '../../../src/Services/Car.service';

describe('Car Service Test', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Registering new car', async function () {
    sinon.stub(Model, 'create').resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service.insertOneNewCar(newCarPost);
    expect(result).to.be.deep.equal(newCarPostResponse);
  });

  it('Searching all cars', async function () {
    sinon.stub(Model, 'find').resolves(carListMongoResponse);
    const service = new CarService();
    const result = await service.findAllCar();
    expect(result).to.be.deep.equal(carListGetResponse);
  });

  it('Searching a car by id', async function () {
    sinon.stub(Model, 'findById').resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service.findByIdCar('6448542ef7475359162577f1');
    expect(result).to.be.deep.equal(newCarPostResponse);
  });
});