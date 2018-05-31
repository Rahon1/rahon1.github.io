
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

var backgroundResize2 = function() {
    element.style.height = element.offsetWidth * 0.50;
}

var backgroundResize3 = function() {
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


/* Spielplatz */ /* Bitte keine Beachtung schenken */

// var mql = window.matchMedia("(max-width:960px)");

// mql.addListener(pictureResolutinChange);

// function pictureResolutinChange()
// {
//     if(mql.matches)
//     {
//         document.querySelector("#slider img").src = "bilder/berg1[1500x350].jpeg";
//     }
//     else
//     {
//         document.querySelector("#slider img").src ="bilder/berg1[1500x300].jpeg";
//     }
// }

/*  Mouseover function den image element übergeben damit die Pfeile nur angezeigt werden wenn die Mause über dem Bild ist.
    Abschnitt 1 funktioniert, 2 kennt er element x nicht.

console.log("hi");


console.log("hi1");


var hiddenArrowButton = document.querySelectorAll("#slider img")

for(var i = 0; i < hiddenArrowButton.length; i++)
{
    hiddenArrowButton[i].addEventListener("mouseover", function()
    {
        console.log("hi2");

        var x = document.querySelectorAll(".arrowButton");
        for(var i = 0; i < 2; i++)
        {   
            if(x[i].className != "arrowButton hidden")
                {
                    x[i].className += " hidden";
                }
        
        }
    });
   
}

// for(var i = 0; i < hiddenArrowButton.length; i++)
// {
//     hiddenArrowButton[i].addEventListener("mouseout", function()
//     {
//         console.log("hi3");

//         var x = document.querySelectorAll(".arrowButton");

//         console.log("hi4");
//         for(var i = 0; i < 2; i++)
//         {
//             console.log("hi5");
//             x.className -= " hidden";
//         }
//     });
   
// }

*/