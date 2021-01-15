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
exports.get_saramin = void 0;
const cheerio = require("cheerio");
const bent = require("bent");
const getString = bent("string");
function get_saramin(title_list) {
    return __awaiter(this, void 0, void 0, function* () {
        let saramin_list = []; //{title : "", href : ""}
        for (var title of title_list) {
            let res = yield getString(`http://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=${encodeURIComponent(title)}&loc_cd=108080`);
            let $ = cheerio.load(res);
            try {
                let t_list = $(".job_tit").children("a");
                for (var t of t_list) {
                    let _ = t.attribs;
                    if (_.title.indexOf(title) != -1)
                        saramin_list.push({ title: _.title, href: "https://saramin.co.kr" + _.href });
                }
            }
            catch (err) { }
        }
        return saramin_list;
    });
}
exports.get_saramin = get_saramin;
