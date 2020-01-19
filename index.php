Cheezy \game

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
<!-- include jQuery 3.4.1 -->

<div id="loading" style="margin-bottom:12px">LOADING...</div>
<div id="board" style="display:none"><?php
	for($y=0; $y<4; $y++){
		for($x=0; $x<4; $x++){
			echo '<img id="ch' . str_pad($y * 4 + $x + 1, 2, '0', STR_PAD_LEFT) . '" onclick="ch(' . $y . ',' . $x . ')" src="cheese.svg" />';
		}
		echo '<br>';
	}
?></div><div id="set" style="display:none"><img id="lup" class="l" src="arrow.svg" onclick="init(lup())" /><br class="right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.5 4.5" version="1.1">
	<g style="fill:#fff">
		<rect id="l0" width="1.3" height="1.3" x="0"   y="0"/>
		<rect id="l1" width="1.3" height="1.3" x="1.6" y="0"/>
		<rect id="l2" width="1.3" height="1.3" x="3.2" y="0"/>
		<rect id="l3" width="1.3" height="1.3" x="0"   y="1.6"/>
		<rect id="l4" width="1.3" height="1.3" x="1.6" y="1.6"/>
		<rect id="l5" width="1.3" height="1.3" x="3.2" y="1.6"/>
		<rect id="l6" width="1.3" height="1.3" x="0"   y="3.2"/>
		<rect id="l7" width="1.3" height="1.3" x="1.6" y="3.2"/>
		<rect id="l8" width="1.3" height="1.3" x="3.2" y="3.2"/>
	</g>
</svg><br class="right"><img id="ldown" class="l" src="arrow.svg" onclick="init(ldown())" /></div>
