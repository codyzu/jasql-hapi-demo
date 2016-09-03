import {defaultsDeep} from 'lodash'

export default class Cheeses {
  constructor (jasql) {
    this.jasql = jasql
  }

  createCheese (cheese) {
    const cheeseDoc = defaultsDeep({_id: `cheese/${cheese.name}`}, cheese)
    return this.jasql.create(cheeseDoc)
      .then(() => cheeseDoc)
  }

  getCheese (name) {
    return this.jasql.read(`cheese/${name}`)
  }

  listCheeses () {
    return this.jasql.list()
  }
}
