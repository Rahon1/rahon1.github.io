
/* Bürgermenü */

function navigation() {
    var button = document.getElementById("links");
    if(button.className === "linkField")
        button.className += " responsive";
    else
        button.className = "linkField";
}

/* Resize Articlebar */ 

var element = document.querySelector("#articleBackground");

var backgroundResize1 = function(){

    element.style.height = element.offsetWidth * 0.14;
}

var backgroundResize2 = function(){
    element.style.height = element.offsetWidth * 0.50;
}

var backgroundResize3 = function(){
    element.style.height = element.offsetWidth * 2;
}

var mql_462 = window.matchMedia("(max-width:462px)");
var mql_960 = window.matchMedia("(min-width: 463px) and (max-width: 960px)");

if(mql_960.matches)
{   
    window.onload = backgroundResize2;
    window.addEventListener("resize", backgroundResize2);
}

else if(mql_462.matches)
{
    window.onload = backgroundResize3;
    window.addEventListener("resize", backgroundResize3);
}
else 
{
    window.onload = backgroundResize1;
    window.addEventListener("resize", backgroundResize1);
}

mql_960.addListener(refreshResize);

function refreshResize(){

    if(mql_960.matches)
    {   
        window.removeEventListener("resize", backgroundResize1);
        window.removeEventListener("resize", backgroundResize3);
        window.addEventListener("resize", backgroundResize2);

    }   
    else if(mql_462.matches)
    {   
        window.removeEventListener("resize", backgroundResize1);
        window.removeEventListener("resize", backgroundResize2);
        window.addEventListener("resize", backgroundResize3);

    }
    else
    {   
        window.addEventListener("resize", backgroundResize1);
    }
}
