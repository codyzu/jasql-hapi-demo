import * as handlers from './handlers'
import * as validations from './validations'

export const getAll = {
  tags: ['api'],
  response: {
    schema: validations.cheeseList
  },
  pre: [
    {method: handlers.fetchAllCheeses, assign: 'cheese'},
    {method: handlers.prepareCheeses, assign: 'cheese'}
  ],
  handler: handlers.replyOk
}

export const getByName = {
  tags: ['api'],
  validate: {
    params: {
      name: validations.name
    }
  },
  response: {schema: validations.cheese},
  pre: [
    {method: handlers.fetchCheese, assign: 'cheese'},
    {method: handlers.prepareCheeses, assign: 'cheese'},
    {method: handlers.firstCheese, assign: 'cheese'}
  ],
  handler: handlers.replyOk
}

export const post = {
  tags: ['api'],
  validate: {
    payload: validations.newCheese,
    options: {
      stripUnknown: true
    }
  },
  response: {schema: validations.cheese},
  pre: [
    {method: handlers.createCheese, assign: 'cheese'},
    {method: handlers.prepareCheeses, assign: 'cheese'},
    {method: handlers.firstCheese, assign: 'cheese'}
  ],
  handler: handlers.replyCreated
}