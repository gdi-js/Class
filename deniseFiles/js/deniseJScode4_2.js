 /*
    #######################################################
    FILENAME: deniseJScode4_2.js
    OVERVIEW: GDI JS Class 4: DOM innerHTML and Creating 
              New Nodes
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

//DOM innerHTML
/*/Example to see a p tag and all of its properties
	document.getElementsByTagName('p'); // returns multiple nodes
	var specificParagraph = document.getElementsByTagName('p');
	console.log(specificParagraph);
*/

function overWritePagewithText(){
	var pageBody = document.getElementsByTagName('body')[0];
	//Overwrites whole page with text
	//pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>';
	//This specific code with create an element at the bottom of the HTML page 
	//pageBody.innerHTML = pageBody.innerHTML + '...just adding this at the end of the page.';	
}
//overWritePagewithText();

//To put content in this paragraph element:
function warning(){
	var warningParagraph = document.getElementById('warning');
	warningParagraph.innerHTML = 'Warning: Cute kitties!';
}
warning();

//Creating New Nodes: Sample Code
//The document object also has methods to create nodes from scratch
function createNodes(){
	var pageBody = document.getElementById('newNew');
	// create our image tag with attributes
	var newImg = document.createElement('img');
	newImg.src = '../images/sm1.jpg';
	newImg.style.border = '1px solid black';
	// add our image to the body
	pageBody.appendChild(newImg);

	// create a paragraph tag with content
	var newParagraph  = document.createElement('p');
	var paragraphText = document.createTextNode('Luna is a talking black-purple cat that advises Sailor Moon and the rest of the Guardian Senshi through the anime series. ');
	newParagraph.appendChild(paragraphText);
	// add our new paragraph to the body
	pageBody.appendChild(newParagraph);	
}
createNodes();

	
/*	
	######################################################
					Let’s Develop It 4.2
	Create a new paragraph element and add it to a div 
	on your page.
	#######################################################
*/
//Creates new p and adds it to a div
function createNewText(){
	var pageBody = document.getElementById('newNew');
	var newPara  = document.createElement('p');
	var paragraphText = document.createTextNode('Meoow!');
	pageBody.appendChild(paragraphText);	
}
//createNewText();


function creatNewPara(){
	var para = document.createElement('p');
	var node = document.createTextNode("This is mew.");
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
}
//creatNewPara();


//Creates new dev element 
function addElement(){
	// create a new div element 
	var newDiv = document.createElement("div"); 
	// and give it some content 
	var newContent = document.createTextNode("Hi there and greetings!"); 
	// add the text node to the newly created div
	newDiv.appendChild(newContent); 
	// add the newly created element and its content into the DOM 
	var currentDiv = document.getElementById("div"); 
	document.body.insertBefore(newDiv, currentDiv); 
}
//addElement();
//document.body.onload = addElement;
