import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'hahaha',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 8081,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('running on port 8081')
  })
