function init(n){
	window.level = n;
	window.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]; // initiate the board
	shuffleboard();
	setboard();
	$(".lwhat").css("visibility", "hidden");
	$("#l" + level).css("visibility", "visible");
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
	setTimeout(theboardisclear,50);
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

function restyle(){
	if($(window).width() < $(window).height()){ // if portrait
		$("#board").css({
			"top": "calc(50vh - 47.5vw)",
			"left": "10%",
			"width": "80vw",
			"height": "80vw"
		});
		$("#set").css({
			"width": "100vw",
			"height": "15vw"
		});
		$(".l").css({
			"top": "20%"
		});
		$("#lup").css({
			"left": "57.5%",
			"width": "9%"
		});
		$("#ldown").css({
			"left": "33.3%",
			"width": "9%"
		});
		$(".lwhat").css({
			"top": "20%",
			"width": "9%",
			"left": "45.5%"
		});
	} else {
		$("#board").css({
			"top": "10%",
			"left": "calc(50vw - 47.5vh)",
			"width": "80vh",
			"height": "80vh"
		});
		$("#set").css({
			"width": "15vh",
			"height": "100vh"
		});
		$(".l").css({
			"left": "20%"
		});
		$("#lup").css({
			"top": "33.3%",
			"width": "60%"
		});
		$("#ldown").css({
			"top": "57.5%",
			"width": "60%"
		});
		$(".lwhat").css({
			"left": "20%",
			"width": "60%",
			"top": "45.5%"
		});
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
	init('010111010');
	restyle();  // restyle the page for the apparent screen orientation
});

$(window).on('resize', function($){  // when the screen is resized...
	restyle();  // restyle the page for the apparent screen orientation
});
