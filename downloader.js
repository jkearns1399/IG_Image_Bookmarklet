javascript:(function(){

    var img= document.querySelector("img.FFVAD");
    var body = document.querySelector("body");
    var dwnldBtn = document.createElement('a');

    dwnldBtn.innerText = "Get Image";
    dwnldBtn.style = "font-family: BlinkMacSystemFont; z-index: 1; position: absolute; top: 13px; left: 13px; border-radius: 5px; background: #cacaca; border-width: 1px;";
    dwnldBtn.id = "dwnldbtn";
    dwnldBtn.setAttribute("href",img.src);
    body.prepend(dwnldBtn); 
})()

