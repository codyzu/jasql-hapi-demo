import pack from '../package.json'
import * as config from './config'

export function register (server, options, next) {
  server.route({
    method: 'GET',
    path: '/cheese',
    config: config.getAll
  })

  server.route({
    method: 'GET',
    path: '/cheese/{name}',
    config: config.getByName
  })

  server.route({
    method: 'POST',
    path: '/cheese',
    config: config.post
  })

  next()
}

register.attributes = {
  name: 'cheese',
  version: pack.version,
  dependencies: ['models']
}
