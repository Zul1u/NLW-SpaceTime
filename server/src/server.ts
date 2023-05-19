import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true,
})

app
  .listen({
    port: 8081,
  })
  .then(() => {
    console.log('running on port 8081')
  })
