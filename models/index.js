import Jasql from 'jasql'
import pack from '../package.json'

export function register (server, options, next) {
  const jasql = new Jasql()

  jasql.initialize()
    .then(() => {
      server.decorate('request', 'jasql', jasql)
      next()
    })
}

register.attributes = {
  name: 'models',
  version: pack.version
}
