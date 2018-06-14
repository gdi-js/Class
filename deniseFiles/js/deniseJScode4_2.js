 /*
    #######################################################
    FILENAME: deniseJScode4_2.js
    OVERVIEW: GDI JS Class 4: DOM innerHTML and Creating 
              New Nodes
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

function addText(){
	var pageBody = document.getElementsByTagName('body')[0];
	pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>';
	pageBody.innerHTML += '...just adding this at the end of the page.';
}
//addText();

//To put content in this paragraph element:
function warning(){
	var warningParagraph = document.getElementById('warning');
	warningParagraph.innerHTML = 'Danger Stranger Things!';
}
//warning();

//Creating New Nodes: Sample Code
//The document object also has methods to create nodes from scratch
function createNodes(){
	var pageBody = document.getElementById('newNew');
	// create our image tag with attributes
	var newImg = document.createElement('img');
	newImg.src = 'http://placekitten.com/g/500/200';
	newImg.style.border = '1px solid black';
	// add our image to the body
	pageBody.appendChild(newImg);
	// create a paragraph tag with content
	var newParagraph  = document.createElement('p');
	var paragraphText = document.createTextNode('Squee!');
	newParagraph.appendChild(paragraphText);
	// add our new paragraph to the body
	pageBody.appendChild(newParagraph);	
}
//createNodes();


/*	
	######################################################
					Let’s Develop It 4.2
	Create a new paragraph element and add it to a div 
	on your page.
	#######################################################
*/
function createNewText(){
    var pageBody = document.getElementById('addingText');
	var newPara  = document.createElement('p');
	var paragraphText = document.createTextNode('Squee!');
	pageBody.appendChild(paragraphText);	
}
//createNewText();

