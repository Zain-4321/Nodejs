// EXPRESS JS
// Express js ek npm pakage
// yeh ek framework hai
// manage everything from recieving the request and giving the response
const { log } = require('console')
const express = require('express')
const app = express()
// Milddleware 
// Routes kay pehle laghta hai middleware
app.use(function(req,re,next){
    console.log("middleware chalao")
     next();  //iska multub request ko agay forward karo
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

// // routing karahe hain
 app.get('/profile', function (req, res) {
       return next(new Error("Something Went Wrong"))
})
  

 app.listen(3000)

// express js kay pass apni ek error handling hai
function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }