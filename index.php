{"title":"Cheezy", "desc":"Puzzle game; clear the grid of cheese", "flags":["allowbodyonly"]}
<link rel="stylesheet" href="https://static.joekoop.com/cheezy/main.css">
<script src="https://static.joekoop.com/cheezy/main.js"></script>

<p id="loading">LOADING...</p>
<div id="board" style="display:none"><?php
	for($y=0; $y<4; $y++){
		for($x=0; $x<4; $x++){
			echo '<img id="ch' . str_pad($y * 4 + $x + 1, 2, '0', STR_PAD_LEFT) . '" onclick="ch(' . $y . ',' . $x . ')" src="https://static.joekoop.com/cheezy/cheese.svg" />';
		}
		echo '<br>';
	}
?></div><div id="set" style="display:none"><img id="lup" class="l yesinvert" src="https://static.joekoop.com/cheezy/arrow.svg" onclick="init(lup())" /><br class="right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.625 5.625" version="1.1">
	<g style="fill:none;stroke:#000;stroke-width:0.2" transform="translate(0.563,0.562)">
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
</svg><br class="right"><img id="ldown" class="l yesinvert" src="https://static.joekoop.com/cheezy/arrow.svg" onclick="init(ldown())" /></div>
