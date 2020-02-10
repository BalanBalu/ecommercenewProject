const express = require("express");
const router = express.Router();
const Usercontroller = require("../controllers/user")
const Logincontroller = require("../controllers/user")
const Deletecontroller = require("../controllers/user")
router.post("/signup",Usercontroller.user_signup )
router.post("/login",Logincontroller.user_login );
router.delete("/:userId",Deletecontroller.user_delete );

module.exports = router;