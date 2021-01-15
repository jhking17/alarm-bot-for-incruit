import express from "express";
import path from "path";
import body_parser from "body-parser";
import constants from "./constants.json";
import slackbot from "./slackbot";

const app = express();
const api_router = require("./router");

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : true}));

app.use(express.static(path.resolve(__dirname)));

app.use("/get", api_router);

app.get("/", (req,res)=>{
    res.sendFile("index.html");
});

app.listen(constants.port, async ()=>{
    console.log("LISTEN ON : ", constants.port);
    await slackbot.start();
    // let t = await SearchByName(1, "원");
    // await saramin(t);
    // await jobkorea(t);

    // await SearchByCategory(1,"11111","우");
});