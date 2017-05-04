class Ajax{
    constructor(){
        if (!this.httpRequest){
            this.httpRequest = window.ActiveX ? new ActiveXObject("Microsoft.XMLHTTP"): new XMLHttpRequest();
        }
    }
}

Ajax.prototype.GET = function(url){
    "use strict";
    let http = this.httpRequest;

    function handleReadyState(callback){
        if (http.readyState === 4 && http.status === 200){
            let response = JSON.parse(http.responseText);
            callback(response);
            console.log(response);
        }
    }
    http.open("GET",url,true);
    http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    http.onreadystatechange = handleReadyState;
    http.send();
};

Ajax.prototype.POST = function(url,obj){
    "use strict";
    let http = this.httpRequest;

    http.open("POST",url,true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(obj));
};




