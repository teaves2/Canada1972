$(document).foundation(); /*leave this*/



var status = "less";

function toggleText()
{
    var text="The Oregon Film Musem is open and has a great Goonies exhibition. The museum is located in Oregon where the movie was filmed. The exhibit is in the jail cells of the old Clatsop County Jail, Gallery II has all the Goonies facts and memorabilia you'll ever want, including the Corey Connection, The Goonies Jailcam, and so much more. Truley a place worth visiting if you loved this classic movie.";
    
    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "Read Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "Read More";
        status = "less"
    }
}

var status = "less";

function toggleText2()
{
    var text="This short film (24 minutes) is every Goonies fan’s dream. You will get an inside look at the making of this classic film. The Making of a Cult Classic explores the behind the scenes and all the fun that went with the creation. Including exclusive interviews with director Richard Connor, and some of the cast, Corey Feldman, Sean Astin, Jeff Cohen, Joe Pantoliano, and more. This short film is worth a watch!";
    
    if (status == "less") {
        document.getElementById("textArea2").innerHTML=text;
        document.getElementById("toggleButton2").innerText = "Read Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea2").innerHTML = "";
        document.getElementById("toggleButton2").innerText = "Read More";
        status = "less"
    }
}

var status = "less";

function toggleText3()
{
    var text="The film’s plot follows the adventure of a group of teens who live in Astoria, Oregon, in a neighbourhood called The Goon Docks. The group set out on a journey of a lifetime in hopes of saving their home from demolition. Mikey discovers and old Spanish map that leads the lot of them on a treasure hunt to unearth the long-lost fortune of One-Eyed Willy. As the group work together and overcome many obstacles they learn about friendship and loyalty.";
    
    if (status == "less") {
        document.getElementById("textArea3").innerHTML=text;
        document.getElementById("toggleButton3").innerText = "Read Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea3").innerHTML = "";
        document.getElementById("toggleButton3").innerText = "Read More";
        status = "less"
    }
}

(function() {
	"use strict";
	
	var video;
	var seekBar;
	var volumeBar;
	var fullscreenbtn;
	function init(){
		console.log("init fired");
		video = document.querySelector("#shortVideo");
		console.log(video.currentSrc);
		var toggleButton = document.querySelector("#playVideo");
		toggleButton.addEventListener("click", togglePlay, false);
		seekBar = document.querySelector("#seek-bar");
		seekBar.addEventListener("change", seek, false);
		volumeBar = document.querySelector("#volume-bar");
		volumeBar.addEventListener("change", volume, false);
		fullscreenbtn = document.getElementById("fullscreenbtn");
		fullscreenbtn.addEventListener("click", toggleFullScreen, false);
	}
	
	function togglePlay(evt) {
		if(video.paused){
			video.play();
			evt.currentTarget.firstChild.nodeValue = "❙❙";
		}
		else{
			video.pause();
			evt.currentTarget.firstChild.nodeValue = "▶";
	}
	}
	
	function seek(){
		var time = video.duration*(seekBar.value/100);
		video.currentTime=time;
	}
		
		window.addEventListener('load', init, false);
		
		function volume(){
			video.volume=volumeBar.value;
		}
		
		function toggleFullScreen(){
			if(video.requestFullScreen){
				video.requestFullScreen();
			} else if(video.webkitRequestFullScreen){
				video.webkitRequestFullScreen();
			} else if(video.mozRequestFullScreen){
				video.mozRequestFullScreen();
		}
		}

})();

(function() {
	"use strict";
	
	var video;
	var seekBar;
	var volumeBar;
	var fullscreenbtn;
	function init(){
		console.log("init fired");
		video = document.querySelector("#longVideo");
		console.log(video.currentSrc);
		var toggleButton = document.querySelector("#playVideoTwo");
		toggleButton.addEventListener("click", togglePlay, false);
		seekBar = document.querySelector("#seek-barTwo");
		seekBar.addEventListener("change", seek, false);
		volumeBar = document.querySelector("#volume-barTwo");
		volumeBar.addEventListener("change", volume, false);
		fullscreenbtn = document.getElementById("fullscreenbtnTwo");
		fullscreenbtn.addEventListener("click", toggleFullScreen, false);
	}
	
	function togglePlay(evt) {
		if(video.paused){
			video.play();
			evt.currentTarget.firstChild.nodeValue = "❙❙";
		}
		else{
			video.pause();
			evt.currentTarget.firstChild.nodeValue = "▶";
	}
	}
	
	function seek(){
		var time = video.duration*(seekBar.value/100);
		video.currentTime=time;
	}
		
		window.addEventListener('load', init, false);
		
		function volume(){
			video.volume=volumeBar.value;
		}
		
		function toggleFullScreen(){
			if(video.requestFullScreen){
				video.requestFullScreen();
			} else if(video.webkitRequestFullScreen){
				video.webkitRequestFullScreen();
			} else if(video.mozRequestFullScreen){
				video.mozRequestFullScreen();
		}
		}
		

})();


//LARGE IMAGE SLIDER
(function() {
"use strict";
var imageBanner, listItems;
function init(){
	imageBanner = document.querySelector("#slider");
	listItems = document.querySelectorAll("#navList li");
	//console.log(listItems);
	setUpListItems();
}

function setUpListItems(){
	var offSet = 400;
	
	for (var i=0; i<listItems.length; i++){
		listItems[i].addEventListener("click", fireMove, false);
	}


function fireMove(e){           //(e) stands for Event
	moveBanner(e.target.parentNode.id);
}

function moveBanner(howMuch){
	console.log("This should add up correctly" + (offSet * howMuch));
	TweenMax.to(imageBanner, .7, {right:(offSet*howMuch)});
}
}


window.addEventListener("load", init, false);
})();


//MSALL IMAGE SLIDER
(function() {
"use strict";
var imageBanner, listItems;
function init(){
	//alert("Hello");
	//console.log("Hello");
	imageBanner = document.querySelector("#sliderSmall");
	listItems = document.querySelectorAll("#listSmall li");
	//console.log(listItems);
	setUpListItems();
}

function setUpListItems(){
	var offSet = 300;
	
	for (var i=0; i<listItems.length; i++){
		listItems[i].addEventListener("click", fireMove, false);
	}


function fireMove(e){           //(e) stands for Event
	moveBanner(e.target.parentNode.id);
}

function moveBanner(howMuch){
	console.log("This should add up correctly" + (offSet * howMuch));
	TweenMax.to(imageBanner, .7, {right:(offSet*howMuch)});
}
}






window.addEventListener("load", init, false);
})();


        	
		
	