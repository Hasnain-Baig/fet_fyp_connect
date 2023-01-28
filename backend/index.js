const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const multer=require('multer');
const path=require('path');

const rootRoute=require("./routes/root_route.js")
const authRoute=require("./routes/auth_route")
const fypIdeaRoute=require("./routes/fyp_idea_route")
const fypProposalRoute=require("./routes/fyp_proposal_route")
const pendingFypProposalRoute=require("./routes/pending_proposal_route")
const co_ordinatorRoute=require("./routes/co_ordinator_route")
const supervisorRoute=require('./routes/supervisor_route')
const teacherRoute=require('./routes/teacher_route')
const fypGroupRoute=require('./routes/fyp_group_route')
const studentRoute=require('./routes/student_routes')

// console.log();

const cors=require('cors');
const pool=require("./connection");
require("dotenv").config;

const port = 4000 || process.env.APP_PORT;

app.use(express.json());  //for using json format data
app.use(cors());   //for react and express connection
app.use(bodyParser.urlencoded({extended:false})); //for using urlencoded data
app.use(cookieParser()); //for parsing cookie
app.use(session({
    secret:"12345ABC",
    resave:false,
    saveUninitialized:false
})); //for saving data on session
// app.use(bodyParser.json());


// console.log("----->",pool)

// if(process.env.NODE_ENV){
// app.use(express.static('client/build'));
// }

// console.log(path.join(__dirname, '/public/html_files'))
// console.log(path.join(__dirname, '/public/proposals'))
// app.use('apis/static',express.static(path.join(__dirname, '../public/html_files')));

app.use(express.static(path.join(__dirname, '/public')));
// app.use('/apis/static/html_files',express.static(path.join(__dirname, '/public/html_files')));
// app.use('/apis/static/proposals',express.static(path.join(__dirname, '/public/proposals')));
// app.use('/apis/static/css',express.static(path.join(__dirname, '/public/css')));
// app.use('/apis/static/fonts',express.static(path.join(__dirname, '/public/fonts')));
// app.use('/apis/static/images',express.static(path.join(__dirname, '/public/images')));

// app.set('view engine','hbs');
app.set('view engine','ejs');

console.log(process.env.APP_PORT);


// apis route
app.use("/apis/auth",authRoute);
app.use("/apis/fyp-group",fypGroupRoute);
app.use("/apis/student",studentRoute);
app.use("/apis/teacher",teacherRoute);
app.use("/apis/supervisor",supervisorRoute);
app.use("/apis/co-ordinator",co_ordinatorRoute);
app.use("/apis/fyp-idea",fypIdeaRoute);
app.use("/apis/fyp-proposal",fypProposalRoute);
app.use("/apis/pending-proposal",pendingFypProposalRoute);


app.use((error,req,res,next)=>{
      if(error instanceof multer.MulterError){
        if(error.code==='LIMIT_UNEXPECTED_FILE'){
          return res.json({
            success:0,
            message:"File must be in pdf format!"
          });
          }   
        // if(error.code==='LIMIT_FILE_SIZE'){
        //   return res.json({
        //     success:0,
        //     message:"File Size error!"
        //   });
        //   } 
      }    
      });
  

      // LISTENING PORT
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}/apis`);
})