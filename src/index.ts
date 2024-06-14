import express from 'express'
import cors from 'cors'
require('dotenv').config();
const cookieParser = require('cookie-parser')
import { initializeFirebaseApp } from './db'
import { router } from './routes' 

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use(cors({
  credentials: true,
}))
app.use('/app', router)

const start = async () => {
  try {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server started', process.env.PORT)
    })

    return app
  } catch (error) {
    console.error('Error starting server', error)
  }
}

initializeFirebaseApp()
start()