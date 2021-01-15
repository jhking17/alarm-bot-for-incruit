const qs = require("qs");
import * as cheerio from "cheerio";
import bent from "bent";

const post = bent("string","https://iljari.mma.go.kr/", "POST", {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": "ipmsperf_uuid=7578434313153308205; JSESSIONID=WuSswS7EHBGjcqT40lU-_2YTx_fjeSEgAPfWDEYsVZOtesJYnPQg!491295763!2013370386",
        Origin: "https://iljari.mma.go.kr",
        Referer : "https://iljari.mma.go.kr/caisBYIS/search/byjjecgeomsaek.do",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
});

async function ParseHtml($){
    let title_list = []
    for(var title of $(".title")){
        let text = $(title.children[0]).text();
        title_list.push(text.replace(/\(.*\)/gi,""));
    }
    return title_list;
}

async function GetPageLength($){
    let reg = new RegExp(/.*(\d\/\d+).*/g);
    let text = $(".topics").text();
    let page = null;
    try{
        page = reg.exec(text)[1].split('/')[1];
    }catch(err){}

    return page ? parseInt(page) : 1;
}

async function GetAllPage(data,pageIndex){
    Object.assign(data, {"pageUnit" : 10});
    Object.assign(data, {"pageIndex" : pageIndex});
    let res = await post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
    let $ = cheerio.load(res);
    return $;
}

async function SearchByName(eopjong_gbcd, string){
    let title_list = [];
    let data = {
        "al_eopjong_gbcd": "",
        "eopjong_gbcd_list": "",
        "eopjong_gbcd": eopjong_gbcd,
        "gegyumo_cd": "",
        "eopche_nm": string,
        "sido_addr": "",
        "sigungu_addr": "",
    }
    let res = await post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
    let $ = cheerio.load(res);
    title_list = await ParseHtml($);
    let pages = await GetPageLength($);
    for(var i=2;i<=pages;i++){
        let pageRes = await GetAllPage(data, i);
        let titles = await ParseHtml(pageRes);
        title_list = [...title_list, ...titles]; 
    }
    console.log(title_list);
    return title_list;
}

async function SearchByCategory(
    eopjong_gbcd, eopjong_gbcd_list="", eopjong_nm="", sido_addr="", sigungu_addr="", chaeyongym="", bjinwonym=""){
    
    let title_list = [];
    let data = {
        "al_eopjong_gbcd": eopjong_gbcd_list,
        "eopjong_gbcd_list": eopjong_gbcd_list,
        "eopjong_gbcd": eopjong_gbcd,
        "gegyumo_cd": "",
        "eopche_nm": eopjong_nm,
        "sido_addr": sido_addr,
        "sigungu_addr": sigungu_addr,
    }
    if(eopjong_gbcd_list != "")
        eopjong_gbcd_list.split(",").map((raw,idx)=>{
            Object.assign(data, {"eopjong_cd" : raw}); // "11101, 11102"
        });
    if(chaeyongym != "")
        Object.assign(data, {"chaeyongym" : chaeyongym}); // "Y" OR "N"
    
    if(bjinwonym != "")
        bjinwonym.split(',').map((raw)=>{
            Object.assign(data, {"bjinwonym" : raw }); // "H,B"
        });

    let res = await post("caisBYIS/search/byjjecgeomsaek.do", qs.stringify(data));
    let $ = cheerio.load(res);
    title_list = await ParseHtml($);
    let pages = await GetPageLength($);
    for(var i=2;i<=pages;i++){
        let pageRes = await GetAllPage(data, i);
        let titles = await ParseHtml(pageRes);
        title_list = [...title_list, ...titles]; 
    }
    console.log(title_list);
    return title_list;
}

export { SearchByCategory, SearchByName };