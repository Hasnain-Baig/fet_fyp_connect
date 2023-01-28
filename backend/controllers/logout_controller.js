const express = require('express');
const pool=require('../connection');
const session=require('express-session');

const logout=(req, res) => {
    console.log('logout');
    console.log(req.session)
    req.session.destroy();
    res.json({
        success:1,
        message:"Logged Out Successfully!"
    });
}

  module.exports={logout};