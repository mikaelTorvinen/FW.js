/*****
 * Simple JavaScript UI framework.
 * Copyright 2015 Mikael Torvinen - mikael.torvinen@gmail.com
 */
var FW=function(){
    var api={};
    
    var controllerInitializers={};
    api.addController=function(id,dependencies,initializer){
        controllerInitializers[id]={initializer:initializer,dependencies:dependencies};
    };
    api.initController=function(id,domElm){
        if(controllerInitializers[id]){
            return controllerInitializers[id].initializer.call(null,domElm,getServices(controllerInitializers[id].dependencies));
        }else{
            console.error("FW: No such module - "+id);
            return null;
        }
    }
    
    var servicesInitializers={};
    var services={};
    api.addService=function(id,dependencies,initializer){
        servicesInitializers[id]={initializer:initializer,dependencies:dependencies};
    };
    function getService(id){
        if(services[id]){
            return services[id];
        }else if(servicesInitializers[id]){
            services[id]=servicesInitializers[id].initializer.call(null,getServices(servicesInitializers[id].dependencies));
            return services[id];
        }else{
            console.error("FW: No such service - "+id);
            return null;
        }
    }
    function getServices(list){
        if(list){
            var servs={};
            for(var i=0; i<list.length; i++){
                servs[list[i]]=getService(list[i]);
            }
            return servs;
        }else{
            return null;
        }
    }
    
    return api;
}();