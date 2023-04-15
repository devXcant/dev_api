const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')

// const morgan = require('morgan')

//route files
const bootcamps = require('./routes/bootcamps')

//load env file
dotenv.config({path: '../config/config.env'});

const app = express();


// if(process.env.NODE_ENV === 'development'{
//   app.use(morgab(''))
// })




app.use(logger)
//mount routes
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT  || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode port on ${PORT}`))