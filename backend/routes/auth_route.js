const express = require('express');
const router = express.Router();
const {login}=require('../controllers/login_controller');
const { signup,registrationLink } = require('../controllers/signup_controller');
const { forgotPassword,resetPassword,updateNewPassword } = require('../controllers/forgot_password_controller');
const {logout}=require('../controllers/logout_controller');
const {isStudentValid}=require('../middlewares/valid_student');
const {isEmailExistInFypGroup}=require('../middlewares/email_exist_in_fyp_group');
const {isFypGroupExist}=require('../middlewares/fyp_group_exist');


router.post('/signup',isStudentValid,isFypGroupExist,isEmailExistInFypGroup,signup)
router.get('/registration-link/:token',isFypGroupExist,registrationLink )
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/forgot-password/:token', resetPassword);
router.put('/forgot-password/:token', updateNewPassword);
router.get('/logout',logout);

module.exports = router;
