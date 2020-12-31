async function get(url, params = null){
    let res = null;
    console.log(`${url}?${params ? new URLSearchParams(...params): ""}`);
    try{
        res = await fetch(`${url}?${params ? new URLSearchParams(...params): ""}`);
    }catch(err){
        console.log(err);
    };
    console.log(res);
    res = res.json();
    return res;
}

window.onload = function(){
    $(".search-btn")[0].addEventListener("click", async function(){
        let res = await get("/get/data", [{name : "우아한"}]);
        if(res.data && res.data.length > 0){
            for(var d of res.data){
                $(".mma-list").append(`
                    <div class="row" id="${d}">${d}</div>
                `);
            }
        }
    });
}