import boom from 'boom'
import {defaultsDeep, omit} from 'lodash'

export function fetchCheese (request, reply) {
  const name = request.params.name
  console.log('FETCH:', name)
  request.jasql.read(`cheese/${name}`)
  request.models.cheese.getCheese(name)
  .then((org) => {
    reply([org])
  })
  .catch((err) => reply(boom.wrap(err, err.status)))
}

export function fetchAllCheeses (request, reply) {
  console.log('FETCH ALL')
  request.models.cheese.listCheeses()
  .then((cheese) => {
    reply(cheese)
  })
  .catch((err) => reply(boom.wrap(err, err.status)))
}

export function createCheese (request, reply) {
  console.log('CREATING')
  request.models.cheese.createCheese(request.payload)
  .then((cheese) => {
    reply([cheese])
  })
  .catch((err) => reply(boom.wrap(err, err.status)))
}

export function prepareCheeses (request, reply) {
  console.log('PREPARING')
  reply(request.pre.cheese.map((cheese) => defaultsDeep({url: `${request.server.info.uri}/${cheese._id}`}, omit(cheese, ['_id']))))
}

export function firstCheese (request, reply) {
  console.log('FIRST ORG')
  reply(request.pre.cheese[0])
}

export function replyOk (request, reply) {
  console.log('OK')
  reply(request.pre.cheese).code(200)
}

export function replyCreated (request, reply) {
  console.log('CREATED')
  reply(request.pre.cheese).code(201)
}
