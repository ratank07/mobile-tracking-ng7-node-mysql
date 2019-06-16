const express = require('express');
const bodyparser = require('body-parser')
const app =  express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
//const allowedorigin = process.env.allowedorigin.split(',');
/**
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        
        return callback(null, true);
    }
}));
 */
const valFunctions = require('./validator/validate')
 // app routes
 // create application/json parser
 const jsonparser = bodyparser.json();

 //create application/x-www-form-urlencodedd parser
 const urlencodedParser =  bodyparser.urlencoded({extended:false})

 app.post('/signup', bodyparser.json(), function (req, res) {
    console.log("request reciedd on signup path")
     if(valFunctions.checkInputDataNULL(req,res)) return false;
     if(valFunctions.checkInputDataQuality(req,res)) return false;
   // if(valFunctions.checkJWTToken(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;

     var dbFunctions = require('./models/connector');
     dbFunctions.createUser(req,res);
});
 app.use('/', (req, res) => res.send("Welcome to GPS mobile tracker App user!"));

app.listen(3000, () => console.log('elish enterprize server is ready on localhost: 3000'));