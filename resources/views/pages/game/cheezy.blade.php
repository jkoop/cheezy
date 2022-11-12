@extends('layouts.typical', [
    'lastChangedDate' => '2020-11-04',
    'allowOnlyContent' => true,
])
@section('title', 'cheezy')
@section('description', 'puzzle game; clear the grid of cheese')

@section('content')

<link rel="stylesheet" href="/style/cheezy/main.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="/script/cheezy/main.js"></script>

<p id="loading">LOADING...</p>
<div id="board" style="display:none">
	@for ($y=0; $y<4; $y++)
		@for ($x=0; $x<4; $x++)
			<img
                id="ch{{ str_pad($y * 4 + $x + 1, 2, '0', STR_PAD_LEFT) }}"
                onclick="ch({{ $y }},{{ $x }})"
                src="/image/cheezy/cheese.svg" />
		@endfor
		<br>
	@endfor
</div><div id="set" style="display:none"><img id="lup" class="l invertInTheDark" src="/image/cheezy/arrow.svg" onclick="init(lup())" /><br class="right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.625 5.625" version="1.1" class="invertInTheDark">
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
</svg><br class="right"><img id="ldown" class="l invertInTheDark" src="/image/cheezy/arrow.svg" onclick="init(ldown())" /></div>

@endsection
