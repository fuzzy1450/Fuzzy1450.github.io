<?php

function minecraft_string ($string)
{
	$colors = array ( 
							 1 => '#4c00c8',
							 2 => '#00d400',
							 3 => '#00c1c1',
							 4 => '#be0000',
							 5 => '#c900c3',
							 6 => '#d2ac00',
							 7 => '#bcbcbc',
							 8 => '#414141',
							 9 => '#7400ff',
							 0 => '#000000',
							'a' => '#00ff00',
							'b' => '#34ffff',
							'c' => '#ff0000',
							'd' => '#ff00ff',
							'e' => '#eeff00',
							'f' => '#ffffff',
							'r' => '#ffffff',
							);
	
	$format = array(	
							'l' => 'font-weight:bold;',
							'm' => 'text-decoration: line-through',
							'n' => 'text-decoration: underline',
							'o' => 'font-style:italic',
							'r' => '',
							);
	
	foreach($colors as $a => $color) {
		$search[] = chr(194) . chr(167) . $a;
		$replace[] = '</span><span style="color: ' . $color . ';">';
	}
	
	foreach($format as $a => $style) {
		$search[] = chr(194) . chr(167) . $a;
		$replace[] = '';
	}
	
	return '<span>' . str_replace($search, $replace, $string) . '</span>';
}
