import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World!'
})

app
  .listen({
    port: 8081,
  })
  .then(() => {
    console.log('running on port 8081')
  })
