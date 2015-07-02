


FW.addService("euData",[],function(deps){
	var API={};
	var count=0;
	API.loadListing=function(handler){
		var req = new XMLHttpRequest();
		req.responseType="json";
		req.onreadystatechange=function(){
			if(req.readyState==4 && req.status==200){
				handler.call(null,req.response);
			}
		}
		req.open("POST","http://open-data.europa.eu/data/api/action/package_list");
		req.send("{}");
	}
	return API;
});




FW.addController("demoModule",["euData"],function(elm,deps){
	deps.euData.loadListing(function(data){
		elm.innerHTML=JSON.stringify(data);
	});
});




FW.initController("demoModule",document.getElementById("root"));