document.getElementById('level_title').innerHTML = '&#171; Escape the Goelag Camp &#187;';

function Main() {
	console.log("main()");

	document.getElementById('level_title').innerHTML = '&#171; Escape the Goelag Camp &#187;';
	document.getElementById('level_image').src = 'img/index.png';
	document.getElementById('level_title_game_over').innerHTML = '';

	// Start verhaal
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start verhaal';
	opt1.setAttribute("onClick", "javascript:Level1();");
	opt1.style.display = "inline";

	// Zoek sleutels
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Zoek sleutels';
	opt2.setAttribute("onClick", "javascript:Sleutels();");
	opt2.style.display = "inline";
}


function EasterEggBaby() {
	console.log("EasterEggBaby()");

	document.getElementById('level_title').innerHTML = '&#171; Escape the Goelag Camp &#187;';
	document.getElementById('level_image').src = 'img/index.png';
	document.getElementById('level_title_game_over').innerHTML = '';

	var snoweaster = document.getElementById('snoweaster');
	snoweaster.style.display = "inline";

	// Start verhaal
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start verhaal';
	opt1.setAttribute("onClick", "javascript:Level1();");
	opt1.style.display = "inline";

	// Zoek sleutels
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Zoek sleutels';
	opt2.setAttribute("onClick", "javascript:Sleutels();");
	opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";

	var opt5 = document.getElementById('option5');
	opt5.style.display = "none";

	var opt6 = document.getElementById('option6');
	opt6.style.display = "none";

	var opt7 = document.getElementById('option7');
	opt7.style.display = "none";

	var opt8 = document.getElementById('option8');
	opt8.style.display = "none";

	var opt9 = document.getElementById('option9');
	opt9.style.display = "none";

	var opt10 = document.getElementById('option10');
	opt10.style.display = "none";

	var opt11 = document.getElementById('option11');
	opt11.style.display = "none";

	var opt12 = document.getElementById('option12');
	opt12.style.display = "none";

	var opt13 = document.getElementById('option13');
	opt13.style.display = "none";

	var opt14 = document.getElementById('option14');
	opt14.style.display = "none";

	var opt15 = document.getElementById('option15');
	opt15.style.display = "none";
}

function Sleutels() {
	console.log("sleutels()");

	document.getElementById('level_title').innerHTML = '&#171; Zoek de juiste sleutel! &#187;';
	document.getElementById('level_image').src = 'img/sleutels.png';

	// Sleutels
	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";

	var opt5 = document.getElementById('option5');
	opt5.style.display = "none";

	// Sleutels
	var opt6 = document.getElementById('option6');
	opt6.innerHTML = 'Sleutel';
	opt6.setAttribute("onClick", "javascript:Sleutels();");
	opt6.style.display = "inline";

	// Sleutels
	var opt7 = document.getElementById('option7');
	opt7.innerHTML = 'Sleutel';
	opt7.setAttribute("onClick", "javascript:Sleutels();");
	opt7.style.display = "inline";

	// Sleutels
	var opt8 = document.getElementById('option8');
	opt8.innerHTML = 'Sleutel';
	opt8.setAttribute("onClick", "javascript:Sleutels();");
	opt8.style.display = "inline";

	// Sleutels
	var opt9 = document.getElementById('option9');
	opt9.innerHTML = 'Sleutel';
	opt9.setAttribute("onClick", "javascript:Sleutels();");
	opt9.style.display = "inline";

	// Sleutels
	var opt10 = document.getElementById('option10');
	opt10.innerHTML = 'Sleutel';
	opt10.setAttribute("onClick", "javascript:EasterEggBaby();");
	opt10.style.display = "inline";

	// Sleutels
	var opt11 = document.getElementById('option11');
	opt11.innerHTML = 'Sleutel';
	opt11.setAttribute("onClick", "javascript:Sleutels();");
	opt11.style.display = "inline";

	// Sleutels
	var opt12 = document.getElementById('option12');
	opt12.innerHTML = 'Sleutel';
	opt12.setAttribute("onClick", "javascript:Sleutels();");
	opt12.style.display = "inline";

	// Sleutels
	var opt13 = document.getElementById('option13');
	opt13.innerHTML = 'Sleutel';
	opt13.setAttribute("onClick", "javascript:Sleutels();");
	opt13.style.display = "inline";

	// Sleutels
	var opt14 = document.getElementById('option14');
	opt14.innerHTML = 'Sleutel';
	opt14.setAttribute("onClick", "javascript:Sleutels();");
	opt14.style.display = "inline";

	// Sleutels
	var opt15 = document.getElementById('option15');
	opt15.innerHTML = 'Sleutel';
	opt15.setAttribute("onClick", "javascript:Sleutels();");
	opt15.style.display = "inline";	
}

function GameOver() {
	console.log("GameOver()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_title_game_over').innerHTML = '&#171; Aaaawh! Game Over :-( &#187;';
	document.getElementById('level_image').src = 'img/gameover.png';

	// Start verhaal
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Naar hoofdmenu';
	opt1.setAttribute("onClick", "javascript:Main();");

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";

	var opt5 = document.getElementById('option5');
	opt5.style.display = "none";
}

function RennenGameOver() {
	console.log("RennenGameOver()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_title_game_over').innerHTML = '&#171; Rennen heeft toch geen zin.. :-( &#187;';
	document.getElementById('level_image').src = 'img/rennengameover.png';

	// Start verhaal
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Naar hoofdmenu';
	opt1.setAttribute("onClick", "javascript:Main();");

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";

}

function Level1() {
	console.log("Level1()");

	document.getElementById('level_title').innerHTML = '&#171; Level 1 ~ Ontsnappen &#187;';
	document.getElementById('level_image').src = 'img/level1a.png';

	// Kamp Noord
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Noordelijke richting';
	opt1.setAttribute("onClick", "javascript:Level2a();");

	// Kamp Zuid
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Zuidelijke richting';
	opt2.setAttribute("onClick", "javascript:Level2b();");
	
}

function Level2a() {
	console.log("Level2a()");

	document.getElementById('level_title').innerHTML = '&#171; Level 2 ~ Kamp opzetten / jagen &#187;';
	document.getElementById('level_image').src = 'img/level2.png';

	// Kamp opzetten
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Kamp opzetten';
	opt1.setAttribute("onClick", "javascript:Level3a();");

	// Jagen
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Dieren jagen';
	opt2.setAttribute("onClick", "javascript:Level3b();");
}


function Level2b() {
	console.log("Level2b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Mogelijkheid';
	opt1.setAttribute("onClick", "javascript:GameOver();");

	document.getElementById('level_title').innerHTML = '&#171; Level 2 ~ Live or die &#187;';
	document.getElementById('level_image').src = 'img/level3.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Mogelijkheid';
	opt2.setAttribute("onClick", "javascript:GameOver();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Mogelijkheid';
	opt3.onClick = 'javascript:Level7();';
	opt3.style.display = "inline";

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Mogelijkheid';
	opt4.setAttribute("onClick", "javascript:GameOver();")
	opt4.style.display = "inline";

	var opt5 = document.getElementById('option5');
	opt5.innerHTML = 'Mogelijkheid';
	opt5.onClick = 'javascript:Level7();'; 
	opt5.style.display = "inline";
}

// Rivier makkelijk oversteken
function Level3a() {
	console.log("Level3a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Mogelijkheid';
	opt1.setAttribute("onClick", "javascript:Level4a();");

	document.getElementById('level_title').innerHTML = '&#171; Level 3 ~ Rivier oversteken &#187;';
	document.getElementById('level_image').src = 'img/level3.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Mogelijkheid';
	opt2.setAttribute("onClick", "javascript:Level4b();");
}

// Rivier moeilijk oversteken
function Level3b() {
	console.log("Level3b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Rivier Noord';
	opt1.setAttribute("onClick", "javascript:Level4a();");

	document.getElementById('level_title').innerHTML = '&#171; Level 2 ~ Oversteken &#187;';
	document.getElementById('level_image').src = 'img/level2.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Rivier Zuid';
	opt2.setAttribute("onClick", "javascript:Level4b();");
}

function Level4a() {
	console.log("Level4a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je hebt geluk - Ga maar over de brug!';
	opt1.setAttribute("onClick", "javascript:Level5a();");

	document.getElementById('level_title').innerHTML = '&#171; Level 4 ~ Over de brug &#187;';
	document.getElementById('level_image').src = 'img/level4a.png';

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
}

function Level4b() {
	console.log("Level4b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je bent fuckedup - Je mag gaan zwemmen!';
	opt1.setAttribute("onClick", "javascript:Level5b();");

	document.getElementById('level_title').innerHTML = '&#171; Level 4 ~ Zwemmend de rivier over &#187;';
	document.getElementById('level_image').src = 'img/level4b.png';

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
}

function Level5a() {
	console.log("Level5a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Op naar de Gobiwoestijn!';
	opt1.setAttribute("onClick", "javascript:Level6a();");

	document.getElementById('level_title').innerHTML = '&#171; Level 5 ~ We zijn uit de kou! &#187;';
	document.getElementById('level_image').src = 'img/level5a.png';

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none"; 

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level5b() {
	console.log("Level5b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Mogelijkheid';
	opt1.setAttribute("onClick", "javascript:GameOver();");

	document.getElementById('level_title').innerHTML = '&#171; Het weer is ruig.. &#187;';
	document.getElementById('level_image').src = 'img/level5b.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Mogelijkheid';
	opt2.setAttribute("onClick", "javascript:GameOver();");
	opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Mogelijkheid';
	opt3.setAttribute("onClick", "javascript:GameOver();");
	opt3.style.display = "inline";

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Mogelijkheid';
	opt4.setAttribute("onClick", "javascript:Level5a();");
	opt4.style.display = "inline";
}


function Level6a() {
	console.log("Level6a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Via het Noorden';
	opt1.setAttribute("onClick", "javascript:Level7a();");

	document.getElementById('level_title').innerHTML = '&#171; Level 6 ~ Gobi Woestijn &#187;';
	document.getElementById('level_image').src = 'img/level6a.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Via het Oosten';
	opt2.style.display = "inline";
	opt2.setAttribute("onClick", "javascript:GameOver();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Via het Zuiden';
	opt3.style.display = "inline";
	opt3.setAttribute("onClick", "javascript:GameOver();");

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Via het Westen';
	opt4.style.display = "inline";
	opt4.setAttribute("onClick", "javascript:GameOver();");
}

function Level7a() {
	console.log("Level7a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Loop door zonder te rusten';
	opt1.setAttribute("onClick", "javascript:Level7b();");

	document.getElementById('level_title').innerHTML = '&#171; Keuzes, keuzes & keuzes.. &#187;';
	document.getElementById('level_image').src = 'img/level7a.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Bezoek Boedhistenkamp';
	opt2.style.display = "inline";
	opt2.setAttribute("onClick", "javascript:Level8b();");

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level7b() {
	console.log("Level7b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Rennen!';
	opt1.setAttribute("onClick", "javascript:RennenGameOver();");

	document.getElementById('level_title').innerHTML = '&#171; Level 7 ~ Je bent uitgeput.. & er komt gevaar aan! Wat nu? &#187;';
	document.getElementById('level_image').src = 'img/level7b.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Vechten!';
	opt2.setAttribute("onClick", "javascript:Level7c();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Kletsen!';
	opt3.setAttribute("onClick", "javascript:level8a();");
	opt3.style.display = "inline";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level7c() {
	console.log("Level7c()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga verder';
	opt1.setAttribute("onClick", "javascript:Level8a();");

	document.getElementById('level_title').innerHTML = '&#171; Jij vechtersbaasje! &#187;';
	document.getElementById('level_image').src = 'img/level7c.png';

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level8a() {
	console.log("Level8a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ondergronds';
	opt1.setAttribute("onClick", "javascript:Level8b();");

	document.getElementById('level_title').innerHTML = '&#171; Level 8 ~ Keuzes.. &#187;';
	document.getElementById('level_image').src = 'img/level8a.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Over de berg';
	opt2.setAttribute("onClick", "javascript:Level8c();");
	opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level8b() {
	console.log("Level8b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga verder de grot in..';
	opt1.setAttribute("onClick", "javascript:Level9a();");
	
	document.getElementById('level_title').innerHTML = '&#171; Je bent er bijna! &#187;';
	document.getElementById('level_image').src = 'img/level8b.png';

	var opt2 = document.getElementById('option2');
	opt2.setAttribute("onClick", "javascript:level8a();");
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level9a() {
	console.log("Level9a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ontwijk';
	opt1.setAttribute("onClick", "javascript:Level10a();");
	
	document.getElementById('level_title').innerHTML = '&#171;Level 9 ~ Shit een wolf! &#187;';
	document.getElementById('level_image').src = 'img/level9a.png';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Neersteken';
	opt2.setAttribute("onClick", "javascript:Level10a();");
	opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Staanblijven';
	opt3.setAttribute("onClick", "javascript:GameOver();");
	opt3.style.display = "inline";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}

function Level10a() {
	console.log("Level10a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Terug naar main';
	opt1.setAttribute("onClick", "javascript:Main();");
	
	document.getElementById('level_title').innerHTML = '&#171; Level 10 ~ Finish babyyy! &#187;';
	document.getElementById('level_image').src = 'img/level10a.png';

	var opt2 = document.getElementById('option2');
	opt2.style.display = "none";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";

	var opt4 = document.getElementById('option4');
	opt4.style.display = "none";
}