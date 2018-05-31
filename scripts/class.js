class mySlide {
        
    constructor() {

        this.idleCounter = 0;
        this.currentSlide = 0;
        this.slideArray = document.querySelectorAll("#slider img");
        
        for(var i = 0; i < this.slideArray.length; i++)
        {
        var box = document.createElement("BUTTON");
        document.querySelector("#slider").appendChild(box);
        box.classList += "button";
        }

        this.checkbox = document.querySelectorAll(".button");
        
        for(var i = 0; i < this.slideArray.length; i++)
        {
           this.slideArray[i].classList.toggle("hidden");
        }
        this.slideArray[this.currentSlide].classList.toggle("hidden");
        this.checkbox[this.currentSlide].classList.toggle("activeSlide");


    };

    setSlideActive(newCurrentSlide){

        this.slideArray[this.currentSlide].classList.toggle("hidden");
        this.checkbox[this.currentSlide].classList.toggle("activeSlide");
        
        this.currentSlide = newCurrentSlide;

        if(this.currentSlide == this.slideArray.length)
        {
            this.currentSlide = 0;
        }
        else if(this.currentSlide == -1)
        {
            this.currentSlide = this.slideArray.length - 1;
        }
        this.slideArray[this.currentSlide].classList.toggle("hidden");
        this.checkbox[this.currentSlide].classList.toggle("activeSlide");
        this.idleCounter = 0;

    };

    nextSlide(){
        this.setSlideActive(this.currentSlide + 1);
    };

    previousSlide(){
        this.setSlideActive(this.currentSlide - 1);
    };

    idle() {
        
        // console.log(this.idleCounter);

		var that = this;
		
		if(this.idleCounter == 5)
		{
			this.nextSlide()
		}
		
		this.idleCounter ++;
		
        setTimeout(function () { that.idle(); }, 3000);
    }   

    initialiseButton()
    {   

        /* Das hier funktioniert, jetzt! Das I in der function wurde von dem I aus der for-schleife getrennt! */
        
        for(var i = 0; i < this.slideArray.length; i++)
        {   
            this.checkbox[i].addEventListener("click", function(i){
                return function()
                {
                    p1.setSlideActive(i);
                }
            }(i));
        }
    }
}


const p1 = new mySlide;
p1.initialiseButton();
p1.idle();