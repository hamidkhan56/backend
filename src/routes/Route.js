const express  =require('express')
const app = express();
const router = express.Router();
const authUser = require('./../controllers/UserAuthController');
router.get('/', (req, res) => {
    res.send("welcome to my app")
})
router.post('/signup', authUser.signupUser);
module.exports = router;





