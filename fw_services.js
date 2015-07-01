


FW.addService("FW_templateCache",[],function(deps){
    var API={};
    var cache={};
    
    
    API.load=function(url,handler){
        if(cache[url]){
            handler.call(null,cache[url]);
        }else{
            var req = new XMLHttpRequest();
            req.responseType="text";
            req.onreadystatechange=function(){
                if(req.readyState==4 && req.status==200){
                    cache[url]=req.responseText;
                    handler.call(null,cache[url]);
                }
            }
            req.open("GET",url);
            req.send();
        }
    }
    
    
    return API;
});


