
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(container){        

       var slide = container;
       var im = new Image();
       im.src="arrow.png";
       
       im.onload = function()
       {                
               $("#commonMediaText").append("<image id='arrow' src='arrow.png' />");                        
               var dom = new createjs.DOMElement(document.getElementById("arrow"));
               dom.x = 435;
               dom.y = 115;
               slide.addChild(dom);
               update = true;
       }
       
});