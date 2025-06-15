import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import postRoutes from './src/routes/postRoutes.js'
import { pool } from './config/config.js'

const app = express()
const PORT = process.env.PORT ?? 5000
// Verifica la conexión a la base de datos
app.use(
  cors({
    origin: 'http://localhost:5173', // <--- Permite específicamente tu origen de React
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // <--- Métodos HTTP que permites
    allowedHeaders: ['Content-Type', 'Authorization'] // <--- Cabeceras permitidas
  })
)
app.use(express.json())

app.use(postRoutes)

app.listen(PORT, () => {
  console.log(`Servidor esta funcionando en el puerto http://localhost:${PORT}`)
})
