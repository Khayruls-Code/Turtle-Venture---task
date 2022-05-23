const express = require("express")
const passport = require("passport")
const session = require('express-session')
const connectWithDatabase = require("./config/database")

const app = express()
app.use(express.json())

//import station route
const station = require('./routes/stationRoutes')

require('dotenv').config()

//database connection
connectWithDatabase()

require('./auth')

app.use(session({
  secret: 'keyboard cat',
}))
app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401)
}

app.get('/', (req, res) => {
  res.send("<a href='/auth/google'>Authenticate with Google</a>")
})

//getting user info
app.get('/auth/google',
  passport.authenticate('google', { scope: ["email", "profile"] })
)

//redirected user
app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
  })
)

//authentication failure
app.get('/auth/failure', (req, res) => {
  res.send('Authentication failed')
})


//protected
app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`
  <h1>Hello ${req.user.displayName}, you are logged in</h1>
  <a href="/logout">Log Out</a>
  `)
})

//logout
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('Goog Bye')
})


// maintain radio station

app.use('/api/v1', station)





app.listen(5000, () => {
  console.log("listening port no: 5000")
})