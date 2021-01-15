"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.SearchByName = exports.SearchByCategory = void 0;
const qs = require("qs");
const cheerio = __importStar(require("cheerio"));
const bent_1 = __importDefault(require("bent"));
const post = bent_1.default("string", "https://iljari.mma.go.kr/", "POST", {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "ipmsperf_uuid=7578434313153308205; JSESSIONID=WuSswS7EHBGjcqT40lU-_2YTx_fjeSEgAPfWDEYsVZOtesJYnPQg!491295763!2013370386",
    Origin: "https://iljari.mma.go.kr",
    Referer: "https://iljari.mma.go.kr/caisBYIS/search/byjjecgeomsaek.do",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
});
function ParseHtml($) {
    return __awaiter(this, void 0, void 0, function* () {
        let title_list = [];
        for (var title of $(".title")) {
            let text = $(title.children[0]).text();
            title_list.push(text.replace(/\(.*\)/gi, ""));
        }
        return title_list;
    });
}
function GetPageLength($) {
    return __awaiter(this, void 0, void 0, function* () {
        let reg = new RegExp(/.*(\d\/\d+).*/g);
        let text = $(".topics").text();
        let page = null;
        try {
            page = reg.exec(text)[1].split('/')[1];
        }
        catch (err) { }
        return page ? parseInt(page) : 1;
    });
}
function GetAllPage(data, pageIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        Object.assign(data, { "pageUnit": 10 });
        Object.assign(data, { "pageIndex": pageIndex });
        let res = yield post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
        let $ = cheerio.load(res);
        return $;
    });
}
function SearchByName(eopjong_gbcd, string) {
    return __awaiter(this, void 0, void 0, function* () {
        let title_list = [];
        let data = {
            "al_eopjong_gbcd": "",
            "eopjong_gbcd_list": "",
            "eopjong_gbcd": eopjong_gbcd,
            "gegyumo_cd": "",
            "eopche_nm": string,
            "sido_addr": "",
            "sigungu_addr": "",
        };
        let res = yield post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
        let $ = cheerio.load(res);
        title_list = yield ParseHtml($);
        let pages = yield GetPageLength($);
        for (var i = 2; i <= pages; i++) {
            let pageRes = yield GetAllPage(data, i);
            let titles = yield ParseHtml(pageRes);
            title_list = [...title_list, ...titles];
        }
        console.log(title_list);
        return title_list;
    });
}
exports.SearchByName = SearchByName;
function SearchByCategory(eopjong_gbcd, eopjong_gbcd_list = "", eopjong_nm = "", sido_addr = "", sigungu_addr = "", chaeyongym = "", bjinwonym = "") {
    return __awaiter(this, void 0, void 0, function* () {
        let title_list = [];
        let data = {
            "al_eopjong_gbcd": eopjong_gbcd_list,
            "eopjong_gbcd_list": eopjong_gbcd_list,
            "eopjong_gbcd": eopjong_gbcd,
            "gegyumo_cd": "",
            "eopche_nm": eopjong_nm,
            "sido_addr": sido_addr,
            "sigungu_addr": sigungu_addr,
        };
        if (eopjong_gbcd_list != "")
            eopjong_gbcd_list.split(",").map((raw, idx) => {
                Object.assign(data, { "eopjong_cd": raw }); // "11101, 11102"
            });
        if (chaeyongym != "")
            Object.assign(data, { "chaeyongym": chaeyongym }); // "Y" OR "N"
        if (bjinwonym != "")
            bjinwonym.split(',').map((raw) => {
                Object.assign(data, { "bjinwonym": raw }); // "H,B"
            });
        let res = yield post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
        let $ = cheerio.load(res);
        title_list = yield ParseHtml($);
        let pages = yield GetPageLength($);
        for (var i = 2; i <= pages; i++) {
            let pageRes = yield GetAllPage(data, i);
            let titles = yield ParseHtml(pageRes);
            title_list = [...title_list, ...titles];
        }
        console.log(title_list);
        return title_list;
    });
}
exports.SearchByCategory = SearchByCategory;
