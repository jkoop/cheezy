$(window).on('load', function(){
	$("#loading").css("display", "none");
	$("#board").css("display", 'inline-block');
	$("#set").css("display", 'inline-block');
	themeLocal();
	restyle();
	init('010111010');
});
$(window).on('resize', function(){
	restyle();
});
function themeLocal(){
	if(localStorage.lightTheme){
		$("#set").css("filter", "invert(1)");
	}else{
		$("#set").css("filter", "");
	}
}
function init(n) {
	window.level = n;
	window.b = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
	shuffleboard();
	setboard();
	for(i=0; i<9; i++){
		if(window.level.substr(i, 1) == 1){
			$("#l" + i).css("display", "");
		}else{
			$("#l" + i).css("display", "none");
		}
	}
}
function shuffleboard() {
	for(i = 0; i < 100; i++) {
		ch(Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), false);
	}
}
function setboard() {
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			document.getElementById("ch" + pad(i * 4 + 1 + j, 2).toString()).style.opacity = b[j][i] * 0.8 + 0.2;
		}
	}
	checkboard()
}
function checkboard() {
	var istheboardclear = true;
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			if(b[j][i] != 0) {
				var istheboardclear = false;
			}
		}
	}
	if(istheboardclear == true) {
		setTimeout(theboardisclear, 50);
	}
}
function theboardisclear() {
/*	alert("Congratulations!\nThe board is clear!");*/
	init(window.level);
}
function ch(c, l, s = true) {
	if(level == '000010000') {
		eatcheese(c, l);
	}
	if(level == '000111000') {
		eatcheese(c, l - 1);
		eatcheese(c, l);
		eatcheese(c, l + 1);
	}
	if(level == '001010100') {
		eatcheese(c + 1, l - 1);
		eatcheese(c, l);
		eatcheese(c - 1, l + 1);
	}
	if(level == '101000101') {
		eatcheese(c - 1, l + 1);
		eatcheese(c + 1, l + 1);
		eatcheese(c - 1, l - 1);
		eatcheese(c + 1, l - 1);
	}
	if(level == '101010101') {
		eatcheese(c - 1, l + 1);
		eatcheese(c + 1, l + 1);
		eatcheese(c, l);
		eatcheese(c - 1, l - 1);
		eatcheese(c + 1, l - 1);
	}
	if(level == '010111010') {
		eatcheese(c, l + 1);
		eatcheese(c - 1, l);
		eatcheese(c, l);
		eatcheese(c + 1, l);
		eatcheese(c, l - 1);
	}
	if(level == '111101111') {
		eatcheese(c - 1, l + 1);
		eatcheese(c, l + 1);
		eatcheese(c + 1, l + 1);
		eatcheese(c - 1, l);
		eatcheese(c + 1, l);
		eatcheese(c - 1, l - 1);
		eatcheese(c, l - 1);
		eatcheese(c + 1, l - 1);
	}
	if(level == '111111111') {
		eatcheese(c - 1, l + 1);
		eatcheese(c, l + 1);
		eatcheese(c + 1, l + 1);
		eatcheese(c - 1, l);
		eatcheese(c, l);
		eatcheese(c + 1, l);
		eatcheese(c - 1, l - 1);
		eatcheese(c, l - 1);
		eatcheese(c + 1, l - 1);
	}
	if(s != false) {
		setboard();
	}
}
function eatcheese(x, y) {
	if(x == -1) {
		return (false);
	}
	if(x == 4) {
		return (false);
	}
	if(y == -1) {
		return (false);
	}
	if(y == 4) {
		return (false);
	}
	if(b[y][x] == 0) {
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
	if($(window).width() >= 575){
		$("#set").css("margin", '');
		$("#set").css("margin-left", '');
		$("#set").css("transform", '');
		$("#lup").css("transform", '');
		$("#ldown").css("transform", '');
		$(".lwhat").css("margin", '');
		$(".right").css("display", '');
	}

	if($(window).width() < 575){
		$("#set").css("margin", '');
		$("#set").css("margin-left", '12px');
		$("#set").css("transform", '');
		$("#lup").css("transform", '');
		$("#ldown").css("transform", '');
		$(".lwhat").css("margin", '');
		$(".right").css("display", '');
	}

	if($(window).width() < 550){
		$("#set").css("margin", '12px 0');
		$("#set").css("margin-left", '0');
		$("#set").css("transform", 'rotate(180deg)');
		$("#lup").css("transform", 'rotate(-90deg)');
		$("#ldown").css("transform", 'rotate(90deg)');
		$(".lwhat").css("margin", '0 12px');
		$(".right").css("display", 'none');
	}
}
function lup() {
	if(window.level == "000010000") {
		return "000111000";
	}
	if(window.level == "000111000") {
		return "001010100";
	}
	if(window.level == "001010100") {
		return "101000101";
	}
	if(window.level == "101000101") {
		return "101010101";
	}
	if(window.level == "101010101") {
		return "010111010";
	}
	if(window.level == "010111010") {
		return "111101111";
	}
	if(window.level == "111101111") {
		return "111111111";
	}
	if(window.level == "111111111") {
		return "000010000";
	}
}
function ldown() {
	if(window.level == "000010000") {
		return "111111111";
	}
	if(window.level == "000111000") {
		return "000010000";
	}
	if(window.level == "001010100") {
		return "000111000";
	}
	if(window.level == "101000101") {
		return "001010100";
	}
	if(window.level == "101010101") {
		return "101000101";
	}
	if(window.level == "010111010") {
		return "101010101";
	}
	if(window.level == "111101111") {
		return "010111010";
	}
	if(window.level == "111111111") {
		return "111101111";
	}
}
