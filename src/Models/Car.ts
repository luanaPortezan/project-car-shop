import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Abstract from './Abstract';

class Car extends Abstract<ICar> {
  constructor() {
    const schema = new Schema <ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'Car');
  }
}

export default Car;