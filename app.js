const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', AppRouter)

app.get('/', (req, res) =>
  res.send({ message: 'Server Running', status: 'OK' })
)

app.listen(PORT, () => console.log(`Server Listening On Port: ${PORT}`))
