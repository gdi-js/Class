//JS2 for 4_1.html

//alert('JS 2');

function overWritePagewithText(){
    var pageBody = document.getElementsByTagName('body')[0];
    //Overwrites whole page with text
    //pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>';
    pageBody.innerHTML = pageBody.innerHTML + '<p>...just adding this at the end of the page.</p>';	
    pageBody.innerHTML += 'Some Text';
};
overWritePagewithText();

function createImageEl(){
    var pageBody = document.getElementById('newNew');
    var createImg = document.createElement('img');
    createImg.src = "../images/sm1.jpg";
    createImg.style.border = '5px solid black';
    pageBody.appendChild(createImg);

    // create a paragraph tag with content
	var newParagraph  = document.createElement('p');
	var paragraphText = document.createTextNode('Luna is a talking black-purple cat that advises Sailor Moon and the rest of the Guardian Senshi through the anime series. ');
	newParagraph.appendChild(paragraphText);
	// add our new paragraph to the body
	pageBody.appendChild(newParagraph);	
}
createImageEl();

/*	
	######################################################
					Let’s Develop It 4.2
	Create a new paragraph element and add it to a div 
	on your page.
	#######################################################
*/
function createNewText(){
    var pageBody = document.getElementById('headerForExample');
    var newEl = document.createElement('p');
    var newTxt = document.createTextNode('Cats are so cute!');
    newEl.appendChild(newTxt);
    pageBody.appendChild(newEl);
}
createNewText();