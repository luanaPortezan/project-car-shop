import CategoryTypes from '../../../../src/Middlewares/CategoryTypes';

const modelNameOne = 'Honda Cb 600f Hornet';
const modelNameTwo = 'Honda Cb';

export const newMotorCyclesPost = {
  model: modelNameOne,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street' as CategoryTypes,
  engineCapacity: 600,
};

export const newMotorCyclesUpdatedPost = {
  model: modelNameOne,
  year: 2010,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street' as CategoryTypes,
  engineCapacity: 600,
  id: '6348513f34c397abcad040b2',
};

export const newMotorCyclesMongoUpdatedResponse = {
  model: modelNameOne,
  year: 2010,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street' as CategoryTypes,
  engineCapacity: 600,
  id: '6348513f34c397abcad040b2',
  __v: 0,
};

export const newMotorCyclesMongoResponse = {
  model: modelNameOne,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street' as CategoryTypes,
  engineCapacity: 600,
  id: '6348513f34c397abcad040b2',
  __v: 0,
};

export const newMotorCyclesPostResponse = {
  id: '6348513f34c397abcad040b2',
  model: modelNameOne,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street' as CategoryTypes,
  engineCapacity: 600,
};

export const MotorCyclesListMongoResponse = [
  {
    model: modelNameOne,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street' as CategoryTypes,
    engineCapacity: 600,
    id: '6348513f34c397abcad040b2',
    __v: 0,
  },
  {
    model: modelNameTwo,
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 20.000,
    category: 'Street' as CategoryTypes,
    engineCapacity: 600,
    id: '6348513f34c397abcad040h4',
    __v: 0,
  },
];

export const MotorCyclesListGetResponse = [
  {
    model: modelNameOne,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street' as CategoryTypes,
    engineCapacity: 600,
    id: '6348513f34c397abcad040b2',
  },
  {
    model: modelNameTwo,
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 20.000,
    category: 'Street' as CategoryTypes,
    engineCapacity: 600,
    id: '6348513f34c397abcad040h4',
  },
];