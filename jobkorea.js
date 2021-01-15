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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_jobkorea = void 0;
function get_jobkorea(title_list) {
    return __awaiter(this, void 0, void 0, function* () {
        const cheerio = require("cheerio");
        const bent = require("bent");
        const getString = bent("string");
        let jobkorea_list = []; //{title : "", href : ""}
        for (var title of title_list) {
            let res = yield getString(`http://www.jobkorea.co.kr/Search/?stext=${encodeURIComponent(title)}`);
            let $ = cheerio.load(res);
            try {
                let post_list = $(".post").children().children("a");
                for (var i = 0; i < post_list.length; i += 2) {
                    let t = post_list[i].attribs;
                    let c = post_list[i + 1].attribs;
                    if (t.title.indexOf(title) != -1) {
                        jobkorea_list.push({ title: t.title, href: "https://www.jobkorea.co.kr" + c.href });
                    }
                }
            }
            catch (err) { }
        }
        return jobkorea_list;
    });
}
exports.get_jobkorea = get_jobkorea;
