import config from './config'
import glue from 'glue'

glue.compose(config, {relativeTo: __dirname}, (err, server) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply.redirect('/documentation')
  })

  server.start((err) => {
    if (err) {
      throw err
    }

    console.log(`Server running. Swagger UI at: ${server.info.uri}/documentation`)
  })
})
