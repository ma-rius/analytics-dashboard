import {Domain} from './domain';

export class Selection {
  domains: Domain = new Domain();
  datepicker_value: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
