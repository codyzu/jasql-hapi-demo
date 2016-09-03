import Cheese from './cheese'
import Jasql from 'jasql'
import pack from '../package.json'

export function register (server, options, next) {
  const jasql = new Jasql()

  jasql.initialize()
    .then(() => {
      const models = {
        cheese: new Cheese(jasql)
      }

      server.decorate('request', 'models', models)
      server.decorate('request', 'jasql', jasql)

      next()
    })
}

register.attributes = {
  name: 'models',
  version: pack.version
}
