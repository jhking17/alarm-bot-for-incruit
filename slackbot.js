"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@slack/client");
const constants_json_1 = __importDefault(require("./constants.json"));
const saramin_1 = require("./saramin");
const jobkorea_1 = require("./jobkorea");
const mma_1 = require("./mma");
const rtm = new client_1.RTMClient(constants_json_1.default.slack_api_token);
function prettyObj(obj) {
    try {
        let a = obj[Object.keys(obj)[0]].toString();
        let b = obj[Object.keys(obj)[1]].toString();
        return a + " : " + b + " \n";
    }
    catch (err) {
        return "";
    }
}
rtm.on("message", (event) => __awaiter(void 0, void 0, void 0, function* () {
    let msg = event.text ? event.text : event.message.text;
    const channel = event.channel;
    yield rtm.sendMessage("Recieved Message", channel);
    if (msg != "" && msg.search(/[가-힣]+/gi) != -1) {
        let title_list = yield mma_1.SearchByName(1, msg);
        if (title_list.length > 0) {
            yield rtm.sendMessage("사람인 데이터 수집 중..", channel);
            let list = yield saramin_1.get_saramin(title_list);
            let list_str = "";
            for (let l of list) {
                list_str += prettyObj(l);
            }
            yield rtm.sendMessage("잡코리아 데이터 수집 중..", channel);
            list = yield jobkorea_1.get_jobkorea(title_list);
            for (let l of list) {
                list_str += prettyObj(l);
            }
            yield rtm.sendMessage("현재 공고들 :::: \n" + list_str, channel);
        }
    }
    else {
        yield rtm.sendMessage("다시 입력해주세용 😅", channel);
    }
}));
exports.default = rtm;
