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
function getHTMLtag(){
	var listItems = document.getElementsByTagName('li');
	for (var i = 0; i < listItems.length; i++) {
	  var listItem = listItems[i];
	  console.log(listItems[i]);
	}

	document.getElementsByTagName('p'); // returns multiple nodes
	var specificParagraph = document.getElementsByTagName('p')[0];
	console.log(specificParagraph);
}
//getHTMLtag();

/*	
	######################################################
	You can access and change attributes of DOM nodes using 
	dot notation.
	This will change this element:
	#######################################################
*/
function differentCat1(){
	var imgKitten = document.getElementById('kittenPic1');
	// will return src attribute on image-- imgKitten.src
	// will set our src to a new src
	imgKitten.src = 'http://placekitten.com/g/600/500';
}
//differentCat1();

//Uses getAttribute or setAttribute to change image
function differentCat2(){
	var imgKitten = document.getElementById('kittenPic2');
	// will return src attribute on image
	imgKitten.getAttribute('src');
	// will set our src to a new src
	imgKitten.setAttribute('src', 'http://placekitten.com/g/200/300');
}
//differentCat2();

//Changes body text color
function changeBody1(){
	var pageBody = document.getElementsByTagName('body')[0];
	pageBody.style.color = 'pink';
}
//changeBody1();

//Changes background color and top padding
function changeBody2(){
	var pageBody = document.getElementsByTagName('body')[0]
	pageBody.style.backgroundColor = 'pink';
	pageBody.style.paddingTop = '50px';
}
//changeBody2();

/*	
	######################################################
				Let’s Develop It 4.1
	Use the link to download the Class 4 files and make
	changes as needed with that index.html and myscript.js
	Change the paragraph text with div ID resultsBox.
	Change the turtle image to the zebra image.
	Change background color.
	Change header text, “JavaScript Test Site” to something 
	else.
	Add an icon image for the browser.
	#######################################################
*/
