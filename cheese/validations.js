import joi from 'joi'

export const name = joi.string().max(10).required().default('Camembert')
export const origin = joi.object({
  country: joi.string().required().default('USA'),
  region: joi.string().required().default('Normandy')
}).required()

export const newCheese = joi.object({
  name,
  origin
}).unknown()

export const cheese = newCheese.concat(joi.object({
  url: joi.string().uri().default('http://server.com/cheese/Camembert')
}))

export const cheeseList = joi.array().items(cheese)
