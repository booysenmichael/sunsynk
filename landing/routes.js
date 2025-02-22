const express = require("express")
const router = express.Router();

router.get("/",async (req,res)=>{
    return res.send("This is the landing");
})

module.exports = router;