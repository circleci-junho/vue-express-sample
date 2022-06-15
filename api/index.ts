import express, { Application, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const app: Application = express()
const port = 3000

const prisma = new PrismaClient()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})