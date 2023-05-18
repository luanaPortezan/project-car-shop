import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carListGetResponse, carListMongoResponse, 
  newCarMongoResponse, newCarPost, newCarPostResponse, 
  newCarUpdatedMongoResponse, newCarUpdatedPost } from './Mocks/car.mock';
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

  it('Searching a car by Id', async function () {
    sinon.stub(Model, 'findById').resolves(newCarMongoResponse);
    const service = new CarService();
    const result = await service.findByIdCar('6448542ef7475359162577f1');
    expect(result).to.be.deep.equal(newCarPostResponse);
  });

  it('Updating a car by Id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(newCarUpdatedMongoResponse);
    const service = new CarService();
    const result = await service.updateOneCar('6448542ef7475359162577f1', newCarUpdatedPost);
    expect(result).to.be.deep.equal(newCarUpdatedPost);
  });

  it('Remove a car by Id', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(newCarMongoResponse);

    const service = new CarService();
    const result = await service.removeOneCar('6448542ef7475359162577f1');

    expect(result).to.be.deep.equal(newCarPostResponse);
  });
});