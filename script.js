//  Cheezy copyright 2002 - 2019 Tim Koop and 2018 - 2019 Joe Koop

function init(n){
	islandscapeportrait();
	window.level = n;
	window.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//	window.b = [[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)]];
	shuffleboard();
	lwhat();
//	alert((4096).toString(2));

	setboard();
//	Math.floor(Math.random()*4);  RETURNS 0, 1, 2, 3 RANDOMLY
}

function lwhat(){
	if(landscapeorportrait == "landscape"){
		document.getElementById("l000010000").style.top = "-20%";
		document.getElementById("l000111000").style.top = "-20%";
		document.getElementById("l001010100").style.top = "-20%";
		document.getElementById("l101000101").style.top = "-20%";
		document.getElementById("l101010101").style.top = "-20%";
		document.getElementById("l010111010").style.top = "-20%";
		document.getElementById("l111101111").style.top = "-20%";
		document.getElementById("l111111111").style.top = "-20%";
		document.getElementById("l" + level).style.top = "45.5%";
	}
	if(landscapeorportrait == "portrait"){
		document.getElementById("l000010000").style.left = "-20%";
		document.getElementById("l000111000").style.left = "-20%";
		document.getElementById("l001010100").style.left = "-20%";
		document.getElementById("l101000101").style.left = "-20%";
		document.getElementById("l101010101").style.left = "-20%";
		document.getElementById("l010111010").style.left = "-20%";
		document.getElementById("l111101111").style.left = "-20%";
		document.getElementById("l111111111").style.left = "-20%";
		document.getElementById("l" + level).style.left = "45.5%";
	}
}

function shuffleboard(){
	for(i = 0; i < 100; i++){
		ch(Math.floor(Math.random()*4),Math.floor(Math.random()*4),false);
	}
}

function setboard(){
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			document.getElementById("ch" + pad(i*4+1+j,2).toString()).style.opacity = b[j][i] * 0.8 + 0.2;
		}
	}
	checkboard()
}

function checkboard(){
	var istheboardclear = true;
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			if(b[j][i] != 0){
				var istheboardclear = false;
			}
		}
	}
	if(istheboardclear == true){
//		window.
	setTimeout(theboardisclear,50);
//function(){
//();}
	}
}

function theboardisclear(){
	alert("Congratulations!\nThe board is clear!");
	init(window.level);
}

function ch(c,l,s){
	if(level == '000010000'){
		eatcheese(c,l);
	}

	if(level == '000111000'){
		eatcheese(c,l-1);
		eatcheese(c,l);
		eatcheese(c,l+1);
	}

	if(level == '001010100'){
		eatcheese(c+1,l-1);
		eatcheese(c,l);
		eatcheese(c-1,l+1);
	}

	if(level == '101000101'){
		eatcheese(c-1,l+1);
		eatcheese(c+1,l+1);
		eatcheese(c-1,l-1);
		eatcheese(c+1,l-1);
	}

	if(level == '101010101'){
		eatcheese(c-1,l+1);
		eatcheese(c+1,l+1);
		eatcheese(c,l);
		eatcheese(c-1,l-1);
		eatcheese(c+1,l-1);
	}

	if(level == '010111010'){
		eatcheese(c,l+1);
		eatcheese(c-1,l);
		eatcheese(c,l);
		eatcheese(c+1,l);
		eatcheese(c,l-1);
	}

	if(level == '111101111'){
		eatcheese(c-1,l+1);
		eatcheese(c,l+1);
		eatcheese(c+1,l+1);
		eatcheese(c-1,l);
		eatcheese(c+1,l);
		eatcheese(c-1,l-1);
		eatcheese(c,l-1);
		eatcheese(c+1,l-1);
	}

	if(level == '111111111'){
		eatcheese(c-1,l+1);
		eatcheese(c,l+1);
		eatcheese(c+1,l+1);
		eatcheese(c-1,l);
		eatcheese(c,l);
		eatcheese(c+1,l);
		eatcheese(c-1,l-1);
		eatcheese(c,l-1);
		eatcheese(c+1,l-1);
	}

	if(s != false){
		setboard();
	}
}

function eatcheese(x,y){
	if(x == -1){
		return(false);
	}
	if(x == 4){
		return(false);
	}
	if(y == -1){
		return(false);
	}
	if(y == 4){
		return(false);
	}

	if(b[y][x] == 0){
		b[y][x] = 1;
	} else {
		b[y][x] = 0;
	}
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function islandscapeportrait(){
	if(window.innerWidth > window.innerHeight){
		window.landscapeorportrait = "landscape";
	} else {
		window.landscapeorportrait = "portrait";
	}
}

function landscapeportrait(){
	if(window.innerWidth < window.innerHeight && window.landscapeorportrait == "landscape"){
		document.getElementById("board").style.left = "10%";
		document.getElementById("board").style.top = "calc(50vh - 47.5vw)";
		document.getElementById("board").style.width = "80vw";
		document.getElementById("board").style.height = "80vw";
		document.getElementById("set").style.width = "100vw";
		document.getElementById("set").style.height = "15vw";
		document.getElementById("lup").style.top = "20%";
		document.getElementById("lup").style.left = "57.5%";
		document.getElementById("ldown").style.top = "20%";
		document.getElementById("ldown").style.left = "33.5%";
		document.getElementById("l000010000").style.top = "20%";
		document.getElementById("l000111000").style.top = "20%";
		document.getElementById("l001010100").style.top = "20%";
		document.getElementById("l101000101").style.top = "20%";
		document.getElementById("l010111010").style.top = "20%";
		document.getElementById("l101010101").style.top = "20%";
		document.getElementById("l111101111").style.top = "20%";
		document.getElementById("l111111111").style.top = "20%";
		document.getElementById("lup").style.width = "9%";
		document.getElementById("ldown").style.width = "9%";
		document.getElementById("l000010000").style.width = "9%";
		document.getElementById("l000111000").style.width = "9%";
		document.getElementById("l001010100").style.width = "9%";
		document.getElementById("l101000101").style.width = "9%";
		document.getElementById("l010111010").style.width = "9%";
		document.getElementById("l101010101").style.width = "9%";
		document.getElementById("l111101111").style.width = "9%";
		document.getElementById("l111111111").style.width = "9%";
		window.landscapeorportrait = "portrait";
		lwhat();
	}
/*	if(window.innerWidth > window.innerHeight && window.landscapeorportrait == "portrait"){
		document.getElementById("board").style.left = "calc(50vw - 47.5vh)";
		document.getElementById("board").style.top = "10vh";
		document.getElementById("board").style.width = "80vh";
		document.getElementById("board").style.height = "80vh";
		document.getElementById("set").style.width = "15vh";
		document.getElementById("set").style.height = "100vh";
		document.getElementByClass("l").style.left = "20%";
		document.getElementByClass("lwhat").style.left = "20%";
		document.getElementByClass("l").style.width = "60%";
		document.getElementByClass("lwhat").style.width = "60%";
		window.landscapeorportrait = "landscape";
		lwhat();
	}*/
	if(window.innerWidth > window.innerHeight && window.landscapeorportrait == "portrait"){
		document.getElementById("board").style.left = "calc(50vw - 47.5vh)";
		document.getElementById("board").style.top = "10%";
		document.getElementById("board").style.width = "80vh";
		document.getElementById("board").style.height = "80vh";
		document.getElementById("set").style.width = "15vh";
		document.getElementById("set").style.height = "100%";
		document.getElementById("lup").style.top = "33.5%";
		document.getElementById("lup").style.left = "20%";
		document.getElementById("ldown").style.top = "57.5%";
		document.getElementById("ldown").style.left = "20%";
		document.getElementById("l000010000").style.left = "20%";
		document.getElementById("l000111000").style.left = "20%";
		document.getElementById("l001010100").style.left = "20%";
		document.getElementById("l101000101").style.left = "20%";
		document.getElementById("l010111010").style.left = "20%";
		document.getElementById("l101010101").style.left = "20%";
		document.getElementById("l111101111").style.left = "20%";
		document.getElementById("l111111111").style.left = "20%";
		document.getElementById("lup").style.width = "60%";
		document.getElementById("ldown").style.width = "60%";
		document.getElementById("l000010000").style.width = "60%";
		document.getElementById("l000111000").style.width = "60%";
		document.getElementById("l001010100").style.width = "60%";
		document.getElementById("l101000101").style.width = "60%";
		document.getElementById("l010111010").style.width = "60%";
		document.getElementById("l101010101").style.width = "60%";
		document.getElementById("l111101111").style.width = "60%";
		document.getElementById("l111111111").style.width = "60%";
		window.landscapeorportrait = "landscape";
		lwhat();
	}
}

function lup(){
	if(window.level == "000010000"){
		return "000111000";
	}
	if(window.level == "000111000"){
		return "001010100";
	}
	if(window.level == "001010100"){
		return "101000101";
	}
	if(window.level == "101000101"){
		return "101010101";
	}
	if(window.level == "101010101"){
		return "010111010";
	}
	if(window.level == "010111010"){
		return "111101111";
	}
	if(window.level == "111101111"){
		return "111111111";
	}
	if(window.level == "111111111"){
		return "000010000";
	}
}

function ldown(){
	if(window.level == "000010000"){
		return "111111111";
	}
	if(window.level == "000111000"){
		return "000010000";
	}
	if(window.level == "001010100"){
		return "000111000";
	}
	if(window.level == "101000101"){
		return "001010100";
	}
	if(window.level == "101010101"){
		return "101000101";
	}
	if(window.level == "010111010"){
		return "101010101";
	}
	if(window.level == "111101111"){
		return "010111010";
	}
	if(window.level == "111111111"){
		return "111101111";
	}
}

jQuery(document).ready(function($){  // wait for the document to load
	landscapeportrait();
	init('010111010');
});

$(window).on('resize', function($){
	landscapeportrait();
});
