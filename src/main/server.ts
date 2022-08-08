import express from 'express'

const app = express()
app.listen(5050, () => {
  console.log('The server is UP on port 5050!')
})
