import express from 'express'
import {json} from 'body-parser'


import {currentUserRouter } from './routes/current-user'
import {signInRouter} from './routes/signin'
import {signOutRouter} from './routes/signout'
import {signUpRouter} from './routes/signup'
import {errorHandler} from './middleware/error-handler'

const app = express();
app.use(json());
app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)
app.use(signUpRouter)
app.use(errorHandler)

// app.get('/api/users/currentuser',(req,res)=>{
//   res.send('Hi there')
// })
app.get('/api',(req,res)=>{
  res.send('Hi there!')
})

app.listen(3000, ()=>{
  console.log('Listening on port 3000')
})