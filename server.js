const app = require('./app')
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3333;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on the port: ${PORT}...`))
  }).catch(e => {
    console.log(e.message);
    process.exit(1)
  })


// mongoose.connect(MONGO_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
//   app.listen(PORT, () => console.log(`Server running on the port: ${PORT}...`))
// }).catch(e => {
//   console.log(e.message);
//   process.exit(1)
// })

