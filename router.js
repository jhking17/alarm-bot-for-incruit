const express = require("express");
const router = express.Router();
const constants = require("./constants.json");
const { SearchByName, SearchByCategory } = require("./mma");
const {saramin} = require("./saramin");
const {jobkorea} = require("./jobkorea");

router.get("/data", async (req,res)=>{
    console.log("???")
    console.log(req.query)
    let list = await SearchByName(1,req.query["name"]);

    res.json({ data : list});
});

module.exports = router;