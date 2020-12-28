const Slack = require("slack-node");
const { RTMClient } = require("@slack/client");

const constants = require("./constants.json");
const saramin = require("./saramin");
const jobkorea = require("./jobkorea");
const rtm = new RTMClient(constants.slack_api_token);

function prettyObj(obj){
    try{
        let a = obj[Object.keys(obj)[0]].toString();
        let b = obj[Object.keys(obj)[1]].toString();
        return a + " : " + b + " \n";
    }catch(err){
        return "";
    }
}

rtm.on("message", async event =>{
    let msg = event.text ? event.text : event.message.text;
    const channel = event.channel;
    await rtm.sendMessage("I Listening Now..", channel);

    if(msg.indexOf("사람인") != -1){
        await rtm.sendMessage("사람인 데이터 수집 중..", channel);
        let list1 = await saramin();
        let list1_str = "";
        for(l of list1){
            list1_str += prettyObj(l);
        }
        await rtm.sendMessage("사람인 :::: \n"+list1_str, channel);
    }
    if(msg.indexOf("잡코리아") != -1){
        await rtm.sendMessage("잡코리아 데이터 수집 중..", channel);
        let list2 = await jobkorea();
        let list2_str = "";
        for(l of list2){
            list2_str += prettyObj(l);
        }
        await rtm.sendMessage("잡코리아 :::: \n" + list2_str, channel);
    }
})
;(async function (){
    // const slack = new Slack(constants.slack_api_token);
    // const send = async(message)=>{
    //     slack.api('chat.postMessage', {
    //         username : 'incruit-bot',
    //         text : message,
    //         channel : "incruit-project",
    //         icon_emoji : "slack"
    //     });
    // };
    // await send("봇 ON!");
    await rtm.start();
})();
