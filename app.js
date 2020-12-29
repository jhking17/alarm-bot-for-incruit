const Slack = require("slack-node");
const express = require("express");
const path = require("path");

const app = express();
const constants = require("./constants.json");
const {slackbot} = require("./slackbot");
const { SearchByName, SearchByCategory } = require("./mma");
const {saramin} = require("./saramin");
const {jobkorea} = require("./jobkorea");

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req,res)=>{
    res.sendFile("index.html");
});

app.listen(3000, async ()=>{
    await slackbot.start();
    // let t = await SearchByName(1, "원");
    // await saramin(t);
    // await jobkorea(t);

    // await SearchByCategory(1,"11111","우");
});