const express = require('express')
const router = express.Router()
// const pool=require("../connection.js");

// getRoot
router.get('/', (req, res) => {
  // res.send('Home');
    // res.sendFile(path.join(__dirname,'../public/index.html'));

    res.send('Server Runs!')
})


module.exports = router;