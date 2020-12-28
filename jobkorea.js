async function get (){
    const cheerio = require("cheerio");
    const bent = require("bent");
    const getString = bent("string");
    const constants = require("./constants");

    let jobkorea_list = [];//{title : "", href : ""}
    
    for(title of constants.titles){
        let res = await getString(`http://www.jobkorea.co.kr/Search/?stext=${encodeURIComponent(title)}`);
        let $ = cheerio.load(res);
        try{
            let post_list = $(".post").children().children("a");
            for(i=0;i<post_list.length;i+=2){
                let t = post_list[i].attribs;
                let c = post_list[i+1].attribs;
                if(t.title.indexOf(title) != -1){
                    jobkorea_list.push({title : t.title, href : "https://www.jobkorea.co.kr"+ c.href});
                }
            }
        } catch(err){}
    }
    return jobkorea_list;
}

module.exports = get;