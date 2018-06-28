/*
   #######################################################
   FILENAME: deniseJScode4_1.js
   OVERVIEW: GDI JS Class 4: Finding Nodes and Changing 
				 Nodes
   PURPOSE: Different Let's Develop It Solutions
   #######################################################
*/

/*	
	######################################################
	You can also get HTML elements by their tag using t
	his method:
	document.getElementsByTagName(tagName);
	getHTMLtag() will retrieve all li tags
	#######################################################
*/

/*
	Example of this code: 	
	getHTMLtag() will retrieve all li tags using a 
	for loop and array function getHTMLtag(){}
*/
function getListItems() {
	var listItems = document.getElementsByTagName('li');
	for (var i = 0; i < listItems.length; i++) {
		var listItem = listItems[i];
		console.log(listItems[i]);
	}
}
//getListItems();

/*
	Retrieves p tag elements
*/
function getPtags() {
	document.getElementsByTagName('p'); // returns multiple nodes
	var specificParagraph = document.getElementsByTagName('p')[2];
	console.log(specificParagraph);
}
//getPtags();


function addText1() {
	pageBody = document.getElementById('uniqueID'); // returns a single node
	pageBody.innerHTML += '...Remove the functions upbove and make the kitties change!';
}
//addText1();

function getElementsByaName() {
	document.getElementsByTagName('img'); // returns multiple nodes
	var specificParagraph = document.getElementsByTagName('img')[1];
	console.log(specificParagraph);
}
//getElementsByaName();

/*	
	######################################################
	You can access and change attributes of DOM nodes using 
	dot notation.
	This will change this element:
	#######################################################
*/
function differentCat1() {
	var imgKitten = document.getElementById('kittenPic1');
	// will return src attribute on image-- imgKitten.src
	console.log(imgKitten.src);
	// will set our src to a new src
	imgKitten.src = '../images/cat3.jpeg';
}
//differentCat1();

//Uses getAttribute or setAttribute to change image
function differentCat2() {
	var imgKitten = document.getElementById('kittenPic2');
	// will return src attribute on image
	console.log(imgKitten);
	imgKitten.getAttribute('src');
	// will set our src to a new src
	imgKitten.setAttribute('src', '../images/cat4.jpeg');
}
//differentCat2();

//Changes background color
function changeBody() {
	var pageBody = document.getElementsByTagName('body')[0];
	pageBody.style.backgroundColor = 'pink';
	console.log(pageBody);
}
//changeBody();


/* 
	Changes body text color to red
	var pageBody = document.getElementsByTagName('body')[0];
	pageBody.style.color = 'red';
*/

/*	
	######################################################
				Let’s Develop It 4.1
	Use the link to download the Class 4 files and make
	changes as needed with that index.html and myscript.js
	Change the paragraph text with div ID resultsBox.
	Add another image to your HTML page, then change 
	it with another image is your JS.
	Change background color.
	Change header text, “JavaScript Test Site” to something 
	else.
	Add an icon image for the browser.
	#######################################################
*/

//Change the kittenPic3 image to the another image.
function changeImage() {
	var imgKitten = document.getElementById('kittenPic3');
	console.log(imgKitten.src);
	imgKitten.src = '../images/cat6.jpeg';
}
//changeImage();

//Change background color.
function changeBackground(){
    var pageBody = document.getElementsByTagName('body')[0]
	pageBody.style.backgroundColor = 'grey';
}
//changeBackground();

//Change header text, “JavaScript Test Site” to something else.
function changeHeader(){
    var newText= document.getElementById('headerText');
    newText = document.getElementById('headerText').innerHTML = ('GDI Rocks');
}
//changeHeader();

//END OF 4.1






function addText1() {
	pageBody = document.getElementById('uniqueID'); // returns a single node
	pageBody.innerHTML += '...Remove the functions upbove and make the kitties change!';
}
//addText1();

function getElementsByaName() {
	document.getElementsByTagName('img'); // returns multiple nodes
	var specificParagraph = document.getElementsByTagName('img')[1];
	console.log(specificParagraph);
}
//getElementsByaName();