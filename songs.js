
var songList = (function() {

	var diamond;
	var content;

	var degrees = 6;


var init = function(songs) {

	diamond = document.getElementById("diamond");
	content = document.getElementById("diamond-content");

	content.appendChild(makeUL(songs));

	//setInterval(rotate_diamond, 1000);
};

var rotate_diamond = function() {

	degrees += 6;

	diamond.style.transform = "rotate(-" + degrees + "deg)";
	content.style.transform = "rotate(" + degrees + "deg)";

};

var makeUL = function(songs) {
    
    var list = document.createElement('ul');

    for(var i = 0; i < songs.length; i++) {

        // Create the list item:
        var item = document.createElement('li');

	item.appendChild(makeSongLinkElement(songs[i]));

        // Add it to the list:
        list.appendChild(item);
	
	}
	
	return list;
};

var makeSongLinkElement = function(song) {

	var link = document.createElement('a');

	link.href = 'files/' + song.src;

	link.appendChild(document.createTextNode(song.name));

	return link;
};

var makeAudioElement = function(song) {

	var audio = document.createElement('audio');

	audio.controls = "controls";
	audio.src = 'files/' + song;

	return audio;
};

return {
init:init
};

})();


document.addEventListener("DOMContentLoaded", function(event) {

	songs = [
		{"name":"Momentary","src":"momentary03.mp3"},
		{"name":"You Got To Move","src":"yougottomovecb01.mp3"},
		{"name":"Electric","src":"electriccb01.mp3"},
		{"name":"Sputnik","src":"sputnik.mp3"},
		{"name":"Popgun","src":"popguncb02.mp3"},
		{"name":"Mingus","src":"minguscb02.mp3"},
		{"name":"Umchi","src":"umchicb01.mp3"},
		{"name":"4038","src":"4038cb02.mp3"},
		{"name":"Nutone","src":"nutonecb01.mp3"},
		{"name":"K Hat","src":"khatcb01.mp3"},
		{"name":"Half Time","src":"halftimecb01.mp3"},
		{"name":"Hyper Space","src":"hyperspacecb01.mp3"},
		{"name":"Squabble","src":"squabcb01.mp3"},
		{"name":"Isolated Ground","src":"isolatedgroundcb01.mp3"},
		{"name":"CPU Spike","src":"cpuspikecb01.mp3"}
	];

	songList.init(songs);
});
