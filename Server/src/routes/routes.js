const express = require("express");

const router = express.Router();

const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');
const { addArtis, getArtists, getArtis, updateArtis, deleteArtis } = require('../controllers/artis');
const { addPayment, getPayments, getPayment, updatePayment, deletePayment } = require('../controllers/payment');
const {addMusic} = require('../controllers/music')
const { register, login,checkAuth } = require("../controllers/auth")

const { auth } = require("../middlewares/auth")
const { uploadFile, uploadMusic } = require("../middlewares/uploadFile");

router.post("/register", register) //req done
router.post("/login", login) // req done
router.get("/check-auth", checkAuth);

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.get("/getuser/:id", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

router.post("/addpayment", uploadFile("image"), addPayment);
router.get("/getpayments", getPayments);
router.get("/getpayment/:id", getPayment);
router.put("/updatepayment/:id", updatePayment);
router.delete("/deletepayment/:id", deletePayment);

router.post("/addartis", addArtis);
router.get("/getartists", getArtists);
router.get("/getartis/:id", getArtis);
router.put("/updateartis/:id", updateArtis);
router.delete("/deleteartis/:id", deleteArtis);

router.post("/addmusic", uploadFile("image"), addMusic);

module.exports = router;