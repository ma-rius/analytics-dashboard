export class Domain {
  artificial_intelligence: boolean = false;
  e_mobility: boolean = false;
  blockchain: boolean = false;
  internet_of_things: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
