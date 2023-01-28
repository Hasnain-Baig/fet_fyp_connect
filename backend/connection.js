const express = require('express')
const app = express()
const mysql = require('mysql');

//SQL Connection
const pool = mysql.createPool({
    connectionLimit : 10,
    // host:process.env.DB_HOST,
    // user:process.env.DB_USER,
    // password:process.env.DB_PASSWORD,
    // database:process.env.DB_NAME
    host:'localhost',
    user:'root',
    password:'password',
    database:'fet_fyp'
    // host:'sql12.freesqldatabase.com',
    // user:'sql12591057',
    // password:'yEuG53vKAp',
    // database:'sql12591057',
    // port:3306
        
  });

  pool.getConnection((err) =>{
    if(err){
    console.log("Error:",err.code);
    }
    else{
      console.log("Database Connected!");
    }
    // if(err["code"] == "ER_NO_SUCH_TABLE"){
    //   console.log("Table ERROR");
    // }

    pool.query("DESCRIBE TEACHER",[],(error, result,fields)=>{
        if (error) {
          console.log("Error:",error)
        };
        console.log(`Users Table created--->${result}`);
        // console.log(`Users Table created--->${fields}`);

      });
  });


module.exports=pool;