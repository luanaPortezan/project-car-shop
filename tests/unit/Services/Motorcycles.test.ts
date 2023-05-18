import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  MotorCyclesListGetResponse,
  MotorCyclesListMongoResponse,
  newMotorCyclesMongoResponse, 
  newMotorCyclesMongoUpdatedResponse, 
  newMotorCyclesPost,
  newMotorCyclesPostResponse, 
  newMotorCyclesUpdatedPost,
} from './Mocks/MotorcyclesMock';

describe('Test MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Registering new motorcycle', async function () {
    sinon.stub(Model, 'create')
      .resolves(newMotorCyclesMongoResponse);
    const service = new MotorcycleService();
    const result = await service
      .insertOneMotorcycle(newMotorCyclesPost);
    expect(result).to.be.deep
      .equal(newMotorCyclesPostResponse);
  });

  it('Searching all motorcycle', async function () {
    sinon.stub(Model, 'find')
      .resolves(MotorCyclesListMongoResponse);
    const service = new MotorcycleService();
    const result = await service.findAll();
    expect(result).to.be.deep
      .equal(MotorCyclesListGetResponse);
  });

  it('Searching a motorcycle by id', async function () {
    sinon.stub(Model, 'findById')
      .resolves(newMotorCyclesMongoResponse);
    const service = new MotorcycleService();
    const result = await service
      .findById('6348513f34c397abcad040b2');
    expect(result).to.be.deep
      .equal(newMotorCyclesPostResponse);
  });

  it('Updating a motorcycle by id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate')
      .resolves(newMotorCyclesMongoUpdatedResponse);
    const service = new MotorcycleService();
    const result = await service.updateOne(
      '6348513f34c397abcad040b2',
      newMotorCyclesUpdatedPost,
    );
    expect(result).to.be.deep
      .equal(newMotorCyclesUpdatedPost);
  });

  it('Remove a motorcycle by id', async function () {
    sinon.stub(Model, 'findByIdAndDelete')
      .resolves(newMotorCyclesMongoResponse);
    const service = new MotorcycleService();
    const result = await service
      .removeOne('6348513f34c397abcad040b2');
    expect(result).to.be.deep
      .equal(newMotorCyclesPostResponse);
  });
});