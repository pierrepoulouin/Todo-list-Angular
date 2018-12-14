export class Todo {
  // In this Todo class definition, we specify that each Todo instance will have four properties
  id: number
  title = ''
  complete = false
  category: number

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
