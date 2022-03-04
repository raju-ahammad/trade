import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'

import { ServerModule } from './server.module'

async function bootstrap() {
  const app = await NestFactory.create(ServerModule)

  app.use(cookieParser())
  app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
  }))
  await app.listen(process.env.PORT ||3000)
}
bootstrap()
