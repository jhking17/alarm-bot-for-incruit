const cheerio = require("cheerio");
const bent = require("bent");
const getString = bent("string");

async function get_saramin (title_list : string[]):Promise<object[]>{
    let saramin_list : object[] = [];//{title : "", href : ""}
    
    for(var title of title_list){
        let res = await getString(`http://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=${encodeURIComponent(title)}&loc_cd=108080`);
        let $ = cheerio.load(res);
        try{
            let t_list = $(".job_tit").children("a");
            for(var t of t_list){
                let _ = t.attribs;
                if(_.title.indexOf(title) != -1)
                    saramin_list.push({title : _.title, href : "https://saramin.co.kr"+_.href});
            }
        } catch(err){}
    }
    return saramin_list;
}

export {get_saramin};