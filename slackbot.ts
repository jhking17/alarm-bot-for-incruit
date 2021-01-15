import { RTMClient } from "@slack/client";
import constants from "./constants.json";
import { get_saramin } from "./saramin";
import { get_jobkorea } from "./jobkorea";
import { SearchByName } from "./mma";

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
    await rtm.sendMessage("Recieved Message", channel);
    if(msg != "" && msg.search(/[가-힣]+/gi) != -1){
        let title_list = await SearchByName(1, msg);
        if(title_list.length > 0){
            await rtm.sendMessage("사람인 데이터 수집 중..", channel);
            let list = await get_saramin(title_list);
    
            let list_str = "";
            for(let l of list){
                list_str += prettyObj(l);
            }
            
            await rtm.sendMessage("잡코리아 데이터 수집 중..", channel);
            list = await get_jobkorea(title_list);
            for(let l of list){
                list_str += prettyObj(l);
            }
    
            await rtm.sendMessage("현재 공고들 :::: \n"+list_str, channel);
        }
    } else {
        await rtm.sendMessage("다시 입력해주세용 😅", channel);
    }
});

export default rtm;