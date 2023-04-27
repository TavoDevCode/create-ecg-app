import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import httpContext from 'express-http-context'
import morgan from 'morgan'
import path from 'path'
import favicon from 'serve-favicon'

// router
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(morgan('dev'))
app.use(httpContext.middleware)

app.use(router)

export { app }
