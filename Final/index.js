CSSPlugin.defaultTransformPerspective = 5000;

var pageIndex = 0;
var pages = document.getElementsByClassName("page");
var nextArr = document.getElementsByClassName("next");
var preArr = document.getElementsByClassName("pre");

function openBook(){
	TweenMax.to("#cover", 4, {
		rotationY:-180,
		transformOrigin:"0% 0%",
		ease:Linear.easeNone
	});

	TweenMax.set("#bookCover", {autoAlpha:0, delay:3}, "-=2");
	TweenMax.set("#backCover", {autoAlpha:1, delay:2}, "+=2");
	TweenMax.set("#cover", {zIndex:0, delay:2});
	TweenMax.set(pages[pageIndex], {autoAlpha:1}, "+=2");	
	TweenMax.to("#title", 5, {autoAlpha:1, delay:3});
	TweenMax.set(".pre",{zIndex:1});
}

function bkgdChange(){
	if(pageIndex == 0){
	 	console.log("Rock Wall Background");
	 	document.body.style.background = "url('img/rock_wall.jpg') no-repeat";
	}
	else if(pageIndex == 3){
	 	console.log("Sky Background");
	 	document.body.style.background = "url('img/sky-home.jpg') no-repeat";
	}
	else if(pageIndex == 6){
	 	console.log("Forest Background");
	 	document.body.style.background = "url('img/forest1.jpg') no-repeat";
	}
	else if(pageIndex == 9){
	 	document.body.style.background = "url('img/tableBkgd.jpg') no-repeat center center fixed";
	}
}

function flipPages(pageNum){
	var sec = 2;
	TweenMax.to("#cover", 4, {
		rotationY:-180,
		transformOrigin:"0% 0%",
		ease:Linear.easeNone,
		zIndex:0
	});
	while(pageIndex != pageNum+1){
	 	TweenMax.to(pages[pageIndex], 4, {
	 		rotationY:-180,
	 		transformOrigin:"0% 0%",
	 		ease:Linear.easeNone,
	 		delay:sec-2	 	
	 	});
	 	TweenMax.set(nextArr[pageIndex],{zIndex:1, delay:sec});
	 	TweenMax.set(preArr[pageIndex+1],{zIndex:1, delay:sec-2});
	 	TweenMax.set(pages[pageIndex],{zIndex:1, delay:sec});
	 	pageIndex++;
	 	TweenMax.set(pages[pageIndex], {autoAlpha:1}, "+=2");
	 	sec = sec+2;
 	}}

function nextPar(){
	document.getElementById("p1").style.visibility="hidden";	
	document.getElementById("p2").style.visibility="visible";
}

function next(){
 	bkgdChange();

	if(pageIndex != pages.length-1){
	 	TweenMax.to(pages[pageIndex], 4, {
	 		rotationY:-180,
	 		transformOrigin:"0% 0%",
	 		ease:Linear.easeNone,
	 	});
	 	TweenMax.set(nextArr[pageIndex],{zIndex:1, delay:2});
	 	TweenMax.set(preArr[pageIndex+1],{zIndex:1, delay:2});
	 	TweenMax.set(pages[pageIndex],{zIndex:1, delay:2});
	 	pageIndex++;
	 	TweenMax.set(pages[pageIndex], {autoAlpha:1}, "+=2");
 	}
}

function hoverOn(){
	TweenMax.to("#side-nav", 1, {
		x:130
	});
}
	
function hoverOff(){
	TweenMax.to("#side-nav", 1, {
		x:1
	});
}

function init(){
	document.body.style.background = "url('img/tableBkgd.jpg') no-repeat center center fixed";
	TweenMax.from("#cover", 2, {y:-800});
	TweenMax.from(".page", 2, {y:-800});
	TweenMax.from("#side-nav", 4, {x:800, rotation:5});
	TweenMax.set("#backCover", {autoAlpha:0});
	order();
	console.log(nextArr);
	done("Loaded Page");
}

function order(){
	console.log(pages);
	var zIndex = pages.length;
	for(i=0; i<pages.length;i++){
		pages[i].style.zIndex=zIndex-1;
		zIndex--;
	}
}

function done(text){
 	console.log(text);
}