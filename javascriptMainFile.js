function loadImages(){
	var list = [];
	
	list[0]	= [ 1 , 2 , 3 , 4 , 5 , 18 ];	
	list[1] = [ 6 , 7 , 8 , 9 , 16 , 17 , 19 ];	
	list[2] = [ 11 , 12 , 13 , 14 , 15 , 10 ];	
	
	for(var i=0; i < 3; ++i){
		var current_column =  document.getElementById("column_" + i);
		for(var j = 0 ; j < list[i].length; ++j ){
			var newImage = document.createElement("IMG");
			var textnode = document.createTextNode("Image"); 
			newImage.appendChild(textnode); 
			newImage.src = "animal/" + list[i][j] + ".jpg";
			newImage.className = "img1";
			newImage.setAttribute("alt","Hovered over image");
			current_column.appendChild(newImage);
		}
	}
}


var _start=0;


function checkTime()
{
	
	var d = new Date();
	var basicString = "You have been on this site for UNKOWN SECONDS";
	var _curent =   Date.now();
	_curent = _curent - _start;
	var diff = new Date(_curent);
	var output = basicString.substr( 0 , 31 ) ;
	
	if( diff.getMinutes() > 0)
		output += " " +  diff.getMinutes() + " minutes";
	if( diff.getSeconds() > 0)
		output += " " +  diff.getSeconds() + " seconds";
	
	
	document.getElementById("dateZone").innerHTML = d.toUTCString();
	document.getElementById("afterDateZone").innerHTML = output;
 	
	
	
}
	
function showCoords(evt){
		var x = document.getElementById("mouse1");
	x.innerHTML = "Last click: x: " + evt.clientX+" y " + evt.clientY; 
}

function showChar(ev){
	var x = document.getElementById("keyboard1");
	x.innerHTML += String.fromCharCode(ev.charCode);
	
}

function justloaded()
{
	 
	_start = Date.now();
	checkTime();
	
	setInterval( function() { checkTime(); } , 1 * 1000 );
	
	document.getElementById( "random1" ).innerHTML = "PI = " + Math.PI + "<br>";
	document.getElementById( "random1" ).innerHTML += "The natural logarithm of 2 is " +  Math.LN2;
	document.getElementById( "random1" ).innerHTML += "Random seed: " +  Math.random();
	
	
	
	document.getElementById( "random2" ).innerHTML = "Click me to throw a coin!" ;
	document.getElementById( "random2" ).onclick = function() { throwCoin(); } ;
	
	document.getElementById("logoMore").addEventListener("mouseover", logo2 ); 
	document.getElementById("logoMore").addEventListener("mouseout", logo1 ); 
	
	document.getElementById("son").addEventListener("mouseover", function() { alert("son");} , true );
	
	
	var element = document.createElement("UL");
	var list = [];
	for(var i = 0 ; i < 10 ; ++i ){
		list[i] = document.createElement("LI");
		var x = document.createTextNode("Line #"+i);
		list[i] . appendChild ( x );
	}
	
	element.appendChild( list[9] );
	
	for(var i = 8; i >= 0 ; --i )
		element.insertBefore(list[i], element.childNodes[0]);
	
	 
	element.removeChild( element.childNodes[7] );
	element.removeChild( element.childNodes[3] );
	
	document.getElementById("listHolder").appendChild( element );
	
	document.getElementById("afterDateZone").style.color = "red";
	document.getElementById("afterDateZone").style.fontSize  = "18px";
	
	var elem = document.getElementById("afterDateZone");
	var cssObj = ( window.getComputedStyle(elem, null).getPropertyValue("color")  );
	document.getElementById( "afterAfterDateZone" ).innerHTML = "My colour is " +  cssObj;
	
	
	document.getElementById( "afterAfterDateZone" ).className = "className1";
	
	
	var newObjects = [];
	newObjects[0] = new newElement( "HELLO" );
	newObjects[1] = new newElement( "Test" );
	
	newObjects[1].newProperty = "You modified me!";
	newElement.prototype.newPrototypeProperty = "What even am I?";
	newElement.prototype.name = function() {
   		 return this.firstName + " " + this.lastName;
	};
	
	
	
}

var newElementCount = 0;

function newElement( myString ){
	++newElementCount;
	this.str = myString ;
	this.size = myString.length;
	this.count = newElementCount;
	this.firstName = "John";
	this.lastName = "Smith";
}

function logo2(){
		document.getElementById("logoMore").src = "aux/1.jpg" ;
}

function logo1(){
		document.getElementById("logoMore").src = "forest/12.jpg" ;
}

function throwCoin(){
	
var _case = Math.floor((Math.random() * 100) );
	_case %= 2;
	if( _case == 0)
		document.getElementById( "random2" ).innerHTML = "Click me to throw a coin! HEAD";
	else
		document.getElementById( "random2" ).innerHTML = "Click me to throw a coin! TAIL";


}




var logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += ('<p>' + msg + '</p>');
}

function capture() {
    log('capture: ' + this.firstChild.nodeValue.trim());
}

function bubble() {
    log('bubble: ' + this.firstChild.nodeValue.trim());
}

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', capture, true);
    divs[i].addEventListener('click', bubble, false);
}



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {drag1
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function setLocalStorage(){
	if (typeof(Storage) !== "undefined") {
   		localStorage.setItem("lastname", "Smith");
	} else {
		alert("Failed to use local storage ! ");
	}	
	
}

 


function alertFromLocalStorage(){
	alert ( localStorage.getItem("lastname") );
	
}