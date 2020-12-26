const cheerio = require("cheerio");
const Slack = require("slack-node");
const { scheduleJob } = require("node-schedule");

const constants = require("./constants");
const saramin = require("./saramin");

;(async function (){
    const slack = new Slack(constants.slack_api_token);
    const send = async(message)=>{
        slack.api('chat.postMessage', {
            username : 'incruit-bot',
            text : message,
            channel : "incruit-project",
            icon_emoji : "slack"
        });
    };
    scheduleJob('1 * * * *', function (){ // 1분마다
        send("test");
    });
    // let list1 = await saramin();
    
})();
