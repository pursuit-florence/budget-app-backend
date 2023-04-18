//here we are writing server file 

require ('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT  4333
app.listen(PORT,()=>{
  resizeBy.send(`Server running on port ${PORT}`)
})


