import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const router = express.Router()
const PORT = process.env.PORT

app.use(express.json())

router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

