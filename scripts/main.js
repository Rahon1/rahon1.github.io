
function navigation() {
    var button = document.getElementById("links");
    if(button.className === "linkField")
        button.className += " responsive";
    else
        button.className = "linkField";
}

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