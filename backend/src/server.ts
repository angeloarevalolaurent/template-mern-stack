import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.use(express.json())
// npm i morgan
// npm i --save-dev @types/morgan

export default app
