javascript:(function(){
    var currentURL = window.location.href;
    var isIG = currentURL.includes("www.instagram.com");
    if(isIG==true){
        var img= document.querySelector("img.FFVAD");
        var body = document.querySelector("body");
    
        var dwnldBtn = document.createElement('a');
        var captionBtn = document.createElement('a');
        var dummyInput = document.createElement('textarea');
    
        var handleLink = document.getElementsByClassName("sqdOP yWX7d     _8A5w5   ZIAjV ");
        var captionContainer = document.getElementsByClassName("C4VMK");
        var featuredHandle = handleLink[0].innerText;
        var featuredCaption = captionContainer[0].children;
    
        captionBtn.addEventListener("click", makeCaption);
    
        dwnldBtn.innerText = "Image";
        dwnldBtn.style = "color: black; font-family: BlinkMacSystemFont; z-index: 1; position: absolute; top: 13px; left: 80px; border-radius: 5px; background: #F2F2F2; border-style: solid; border-width: 1px; border-color: #B3B3B3; padding: 3px 10px;";
        dwnldBtn.id = "dwnldBtn";
        dwnldBtn.setAttribute("href",img.src);
    
        captionBtn.innerText = "Caption";
        captionBtn.style = "cursor:pointer; color: black; font-family: BlinkMacSystemFont; z-index: 1; position: absolute; top: 13px; left: 13px; border-radius: 5px; background: #F2F2F2; border-style: solid; border-width: 1px; border-color: #B3B3B3; padding: 3px 10px";
        captionBtn.id = "captionBtn";
    
        body.prepend(captionBtn, dwnldBtn, dummyInput); 
    
        function makeCaption(){
            dummyInput.innerText = featuredCaption[1].innerText;
            dummyInput.select();
            document.execCommand("copy");
        };    
    }
})()
