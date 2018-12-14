export class Category {
  // Each Category instance will have two properties
  id: number
  name = ''

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
