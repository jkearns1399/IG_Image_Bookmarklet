javascript:(function(){
    var currentURL = window.location.href;
    var isIG = currentURL.includes("www.instagram.com");
    if(isIG==true){
        const img= document.querySelector("img.FFVAD");
        const body = document.querySelector("body");
    
        const dwnldBtn = document.createElement('a');
        const captionBtn = document.createElement('a');
        const dummyInput = document.createElement('textarea');
    
        const handleLink = document.getElementsByClassName("sqdOP yWX7d     _8A5w5   ZIAjV ");
        const captionContainer = document.getElementsByClassName("C4VMK");
        const featuredCaption = captionContainer[0].children;
    
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
