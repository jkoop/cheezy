Cheezy \game

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<div id="loading" style="margin-bottom:12px">LOADING...</div>
<div id="board" style="display:none"><?php
	for($y=0; $y<4; $y++){
		for($x=0; $x<4; $x++){
			echo '<img id="ch' . str_pad($y * 4 + $x + 1, 2, '0', STR_PAD_LEFT) . '" onclick="ch(' . $y . ',' . $x . ')" src="cheese.svg" />';
		}
		echo '<br>';
	}
?></div><div id="set" style="display:none"><img id="lup" class="l" src="arrow.svg" onclick="init(lup())" /><br class="right"><img id="l000010000" class="lwhat" src="level000010000.svg" /><img id="l000111000" class="lwhat" src="level000111000.svg" /><img id="l001010100" class="lwhat" src="level001010100.svg" /><img id="l101000101" class="lwhat" src="level101000101.svg" /><img id="l010111010" class="lwhat" src="level010111010.svg" /><img id="l101010101" class="lwhat" src="level101010101.svg" /><img id="l111101111" class="lwhat" src="level111101111.svg" /><img id="l111111111" class="lwhat" src="level111111111.svg" /><br class="right"><img id="ldown" class="l" src="arrow.svg" onclick="init(ldown())" /></div>
