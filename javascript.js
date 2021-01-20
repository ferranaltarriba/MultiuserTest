// JavaScript Document

var currentTradition = 0;
var currentKeyword = "";

var msg;


function addcode() {
	var x = document.getElementById("input_code");
	// use x to get the code
}



function toResults(keyword){
	//do the search here using the results parameter
	$('.results_intro').text('Results for: '+keyword);
	var r1 = "Cin cin!"; //assign value from search
	var r2 = "Cin cin!"; //assign value from search
	var r3 = "Cin cin!"; //assign value from search
	$('#result1 p').text(r1);
	$('#result2 p').text(r2);
	$('#result3 p').text(r3);
	$('#result1').css({'background-image':'url(img/traditions/cincin.png)'}); //assign value from search
	$('#result2').css({'background-image':'url(img/traditions/cincin.png)'}); //assign value from search
	$('#result3').css({'background-image':'url(img/traditions/cincin.png)'}); //assign value from search
	
	$("#search").hide();
	$("#tradition").hide();
	$("#results").show();
	$("#globe").hide();
}

function search() {
	var x = document.getElementById("input_search");
	currentKeyword = x.value;
	$('#input_search').val('type a search keyword');
	toResults(currentKeyword);
}

function triggerAudioDescription(t) {
	//t passes the id of chosen tradition
	
	msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[9]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = 0.8; // 0.1 to 10
	msg.pitch = 1; //0 to 2
	msg.text = 'Did you know that Italians have a custom of clinking cups to wish each other a good meal? Why not trying it out? But make sure you look at each other right in the eye – you don’t wanna call for bad luck!';
	msg.lang = 'en-US';

	msg.onend = function(e) {
	  	$("#soundon").hide();
		$("#soundoff").show();
	};

	speechSynthesis.speak(msg);
}


$(document).ready(function () {

	var playersnumber = 0;
	var players = [0,0,0,0,0,0]; //0 means not synced; 1 means synced & active; 2 means synced but temporarily individual; 3 means synced but inactive
	
	$("#landing").show();
	$("#sync").hide();
	$("#about").hide();
	$("#tutorial").hide();
	$("#tutorial2").hide();
	$("#tutorial3").hide();
	$("#tutorial4").hide();
	$("#tutorial5").hide();
	$("#tutorial6").hide();
	$("#tutorial7").hide();
	$("#tradition").hide();
	$("#tradition_extended").hide();
	$("#tradition_idle").hide();
	$("#tradition_rate").hide();
	$("#soundoff").hide();
	$("#search").hide();
	$("#results").hide();
	
	$("#bubble").hide();
	$("#bubble_content").hide();
	$("#bubble_background").hide();
	
	
	
	//BUBBLE
	
	$( "#bubble_dot" ).mouseup(function() {
	  	if($("#bubble_content").is(":visible")){
			$("#bubble_content").hide();
			$("#bubble_background").hide();
		}
		else{
			$("#bubble_content").show();
			$("#bubble_background").show();
		}
	});
	
	$( ".tradition_text" ).mouseup(function() {
		if($("#bubble_dot").hasClass("noalert")){
			$("#bubble_dot").addClass("alert");
			$("#bubble_dot").removeClass("noalert");
			$("#bubble_dot").css("background-color","rgba(163,10,10,0.5)");
			$("#bubble_dot").html("!");
			$("#bubble_content_alert").show();
			$("#bubble_content_individual").hide();
		}
		else if($("#bubble_dot").hasClass("alert")){
			$("#bubble_dot").addClass("noalert");
			$("#bubble_dot").removeClass("alert");
			$("#bubble_dot").css("background-color","rgba(0,0,0,0.5)");
			var playersnumber = 0;
			for(var i = 0; i<players.length; i++){
				if(players[i]==1) playersnumber++;
			}
			$("#bubble_dot").html(playersnumber);
			$("#bubble_content_individual").show();
			$("#bubble_content_alert").hide();
		}
	});
	//to change from no alert to alert:
	//$("#bubble_dot").addClass("alert");
	//$("#bubble_dot").removeClass("noalert");
	//$("#bubble_content_alert").show();
	//$("#bubble_content_noalert").hide();
	
	//and to change back from alert to no alert
	//$("#bubble_dot").addClass("noalert");
	//$("#bubble_dot").removeClass("alert");
	//$("#bubble_content_noalert").show();
	//$("#bubble_content_alert").hide();
	
	// LANDING PAGE
	
	$( "#landing_start" ).mouseup(function() {
	  	$("#landing").hide();
		$("#sync").show();
	});
	
	$( "#landing_about" ).mouseup(function() {
	  	$("#landing").hide();
		$("#about").show();
	});
	
	
	// SYNC PAGE
	
	$('#input_code').click(function(){
		$('#input_code').val(' ');
		
	});

	$( "#sync_ready" ).mouseup(function() {
		$("#sync").hide();
		$("#tutorial").show();
	});
	
	$( "#dot1" ).mouseup(function() {
	  	$("#dot1").addClass("active");
		$("#dot2").addClass("first_inactive");
		players[0] = 1;
	});
	
	$( "#dot2" ).mouseup(function() {
	  	$("#dot2").addClass("active");
		$("#dot2").html("P2");
		$("#dot3").addClass("first_inactive");
		players[1] = 1;
	});
	$( "#dot3" ).mouseup(function() {
	  	$("#dot3").addClass("active");
		$("#dot3").html("P3");
		$("#dot4").addClass("first_inactive");
		players[2] = 1;
	});
	$( "#dot4" ).mouseup(function() {
	  	$("#dot4").addClass("active");
		$("#dot4").html("P4");
		$("#dot5").addClass("first_inactive");
		players[3] = 1;
	});
	$( "#dot5" ).mouseup(function() {
	  	$("#dot5").addClass("active");
		$("#dot5").html("P5");
		$("#dot6").addClass("first_inactive");
		players[4] = 1;
	});
	$( "#dot6" ).mouseup(function() {
	  	$("#dot6").addClass("active");
		$("#dot6").html("P6");
		players[5] = 1;
	});
	
	// ABOUT PAGE
	
	$( "#about_return" ).mouseup(function() {
	  	$("#about").hide();
		$("#landing").show();
	});
	
	// TUTORIAL PAGE
	
	$( "#tutorial_understood" ).mouseup(function() {
	  	$("#tutorial1").hide();
		$("#tutorial7").show();
	});
	
	$( "#tutorial_tutorial" ).mouseup(function() {
	  	$("#tutorial1").hide();
		$("#tutorial2").show();
		$("#globe").hide();
	});
	
	$( "#tutorial_understood2" ).mouseup(function() {
	  	$("#tutorial2").hide();
		$("#tutorial3").show();
	});
	
	$( "#tutorial_understood3" ).mouseup(function() {
	  	$("#tutorial3").hide();
		$("#tutorial4").show();
	});
	
	$( "#tutorial_understood4" ).mouseup(function() {
	  	$("#tutorial4").hide();
		$("#tutorial5").show();
	});
	
	$( "#tutorial_understood5" ).mouseup(function() {
	  	$("#tutorial5").hide();
		$("#tutorial6").show();
	});
	
	$( "#tutorial_understood6" ).mouseup(function() {
	  	$("#tutorial6").hide();
		$("#tutorial7").show();
		$("#globe").show();
	});
	
	$( "#tutorial_letsgo" ).mouseup(function() {
	  	$("#tutorial").hide();
		$("#tradition").show();
		$("#globe").hide();
		$("#bubble").show();
		var playersnumber = 0;
		for(var i = 0; i<players.length; i++){
			if(players[i]==1) playersnumber++;
		}
		$("#bubble_dot").html(playersnumber);
		
		//here it should decide which tradition to show -> currentTradition = random btwn the amount of traditions on the database;
		triggerAudioDescription(currentTradition);
	});
	
	
	// TRADITION PAGE
	
	$( "#tradition_gotit" ).mouseup(function() {
		
		var nameoftradition = "CIN, CIN!"; // here we should pull the name of the current tradition
		$( "#tradition_idle_nameoftradition" ).text(nameoftradition); 
		$( "#tradition" ).css( "background-image", "linear-gradient(rgba(0,113,188,1), rgba(5,56,79,1))" );
		$( "#tradition" ).css( "background-size", "auto auto" );
		$( "#tradition" ).css( "background-repeat", "no-repeat" );
		$( "#tradition" ).css( "background-position", "top-left" );
		
		$("#tradition_minimal").hide(); 
		$("#tradition_idle").show();
	});
	$( "#tradition_gotit2" ).mouseup(function() {		
		var nameoftradition = "CIN, CIN!"; // here we should pull the name of the current tradition
		$( "#tradition_idle_nameoftradition" ).text(nameoftradition); 
		$( "#tradition" ).css( "background-image", "linear-gradient(rgba(0,113,188,1), rgba(5,56,79,1))" );
		$( "#tradition" ).css( "background-size", "auto auto" );
		$( "#tradition" ).css( "background-repeat", "no-repeat" );
		$( "#tradition" ).css( "background-position", "top-left" );
		
		$("#tradition_extended").hide(); 
		$("#tradition_idle").show(); 
	});
	$( "#tradition_learnmore" ).mouseup(function() {
	  	$("#tradition_minimal").hide();
		$("#tradition_extended").show();
	});
	$( "#tradition_searchagain" ).mouseup(function() {
		$("#tradition").hide();
		$("#search").show();
		$("#globe").show();
	});
	$( "#tradition_similar" ).mouseup(function() {
		currentKeyword = "italian"; //here, dynamically pull principal keyword from current tradition
		toResults(currentKeyword);
	});
	$( "#tradition_ratetradition" ).mouseup(function() {
		$("#tradition_idle").hide();
		$("#tradition_rate").show();
	});
	
	$( "#soundon" ).mouseup(function() {
	  	$("#soundon").hide();
		$("#soundoff").show();
		msg.volume = 0;
	});
	
	$( "#soundoff" ).mouseup(function() {
	  	$("#soundoff").hide();
		$("#soundon").show();
		triggerAudioDescription(currentTradition);
	});

	
	// SEARCH PAGE
	
	$('#input_search').click(function(){
		$('#input_search').val(' ');
	});
	
	// RESULTS PAGE
	
	$( "#result1" ).mouseup(function() {
	  	//add logic for choosing tradition here, i.e. add info + bg image +...
		$("#results").hide();
		$("#tradition").show();
		triggerAudioDescription(currentTradition);
	});
	
	$( "#result2" ).mouseup(function() {
	  	//add logic for choosing tradition here, i.e. add info + bg image +...
		$("#results").hide();
		$("#tradition").show();
		triggerAudioDescription(currentTradition);
	});
	
	$( "#result3" ).mouseup(function() {
	  	//add logic for choosing tradition here, i.e. add info + bg image +...
		$("#results").hide();
		$("#tradition").show();
		triggerAudioDescription(currentTradition);
	});
	
});