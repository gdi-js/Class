function writeResults (result){
    //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');

    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);
        
    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}
//writeResults('Meow!');

//Change the turtle image to the zebra image.
function changeImage(){
    var newImg= document.getElementById('turtlePic');
	newImg.src = 'zebra.jpg';
}
//changeImage();

//Change background color
function changeBackground(){
    var pageBody = document.getElementsByTagName('body')[0]
	pageBody.style.backgroundColor = 'pink';
}
//changeBackground();

//Change header text, “JavaScript Test Site” to something else.
function changeInputText(){
    var newText= document.getElementById('headerText');
    newText = document.getElementById('headerText').innerHTML = ('GDI Rocks');
}
//changeInputText();