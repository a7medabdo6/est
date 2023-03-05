

// profile => 
// English Name: AMR ABDELGAWAD ALI ABDELGAWAD
// Arabic Name: عمرو عبدالجواد على عبدالجواد
// Gender: Male
// Date of Birth: 20 / 2 / 2005
// National ID Number: 30502200100239
// Passport Number: A23087438
// Email Address: amrabdo33877@gmail.com
// Nationality: Egypt
// Mobile Number:
// Landline
// Country & City:
// Address:
// Address 2
// National ID Copy: image 
// Passport Number:
// Passport Copy:
// --------------------------------------
// Parent Information
// Parent Name:​
// Email:
// Relationship:
// --------------------------------------------
// School Information
// School Name:
// Grade:
// Year of Graduation:
// -------------------------------------------

// My Results

// Test Type: EST I []
// date : 17th Jun. 2022 []
// Subjects : [{a,b}]
// Score : [{a,b}]




// [2:55 PM, 8/11/2022] Alaa Abdelmotlep: const jwt = require("jsonwebtoken");




// [2:57 PM, 8/11/2022] Alaa Abdelmotlep: if (req.body.fullname == "admin") {
//     let token = jwt.sign({
//       // fullname: req.body.fullname,
//       role: "admin"
//     }, process.env.SECRET_KEY, { expiresIn: "24h" })
//     res.status(200).json({ message: "Login admin Success", token })
//   }
// [2:58 PM, 8/11/2022] Alaa Abdelmotlep: exports.getStudents = (req, res, next) => {
    
//     if (req.role == "admin" || req.role == "speaker") {
//         StudentSchema.find({})
//             .then(data => {
//                 res.status(200).json(data)
//             })
//             .catch(error => {
//                 next(error);
//             })
//     }
//     else {
//         throw new Error("Not Authorized.");
//     }
// }





require("dotenv").config()
const express = require("express");
const body_parser=require("body-parser");
const morgan = require('morgan')
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authenticationRouter = require("./Routers/authenticationRouter")
const speakerRouter = require("./Routers/speakerRouter")
const studentRouter = require("./Routers/studentRouter")
const eventRouter = require("./Routers/eventRouter")

// create server
const app = express();


// images
//image vars
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "images"))
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toLocaleDateString().replace(/\//g, "-") + "-" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/png"
    )
        cb(null, true)
    else
        cb(null, false)

}

app.use(morgan('tiny'));

mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("DB connected ....");
            
           // listen port
        app.listen(process.env.PORT || 3000, () => {
            console.log("I'm Listen")
        });

        })
        .catch(error=>{
                console.log(" DB Problem")
        })


// Middlewares

//  MW  method, url Using morgan
app.get('/', function (req, res) {
    console.log(req.method, req.url)
    res.send('hello, world!')
})


// MW for CORS
app.use((request,response,next)=>{
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
    response.header("Access-Control-Allow-Headers","Content-Type,Authorization")
    next();
})

app.use("/images",express.static(path.join(__dirname, "images")))
app.use(multer({storage, fileFilter}).single("image"));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

// Router EndPoints
app.use(authenticationRouter)
app.use(speakerRouter)
app.use(studentRouter)
app.use(eventRouter)

// MW general middleware for not Found url pathes
app.use((request, response) => {
    response.status(404).json({data:"NOT FOUND"})
})

// MW Error handling that will catch all system Errors
app.use((error,request,response,next) => {
    let status=error.status||500;
    response.status(status).json({Error:error+""});
})