/*
   #######################################################
   FILENAME: deniseJScode4_1.js
   OVERVIEW: GDI JS Class 4: Finding Nodes and Changing 
				 Nodes
   #######################################################
*/

console.log('My JS FILE');

/*
	Example of this code: 	
	getHTMLtag() will retrieve all li tags using a 
	for loop and array function getHTMLtag(){}
*/
function getListItems(){
    var listItem = document.getElementsByTagName('ol');
    console.log(listItem);
    for (var i=0; i < listItem.length; i++){
        //console.log(listItem[i]);
    }
}
//getListItems();

//Query selects one
function queryEx(){
    var page = document.querySelector('#banner h1');
    console.log(page);
}
//queryEx();

//Query selects more then one
function queryEx2(){
    var page = document.querySelectorAll('#banner h1, #catList');
    console.log(page);
}
//queryEx2();

//Gets by class name
function getClassName(){
    var page = document.getElementsByClassName('heyKitty');
    console.log(page);
}
//getClassName();

function getPtags(){
    var pageBody = document.getElementsByTagName('p');
    console.log(pageBody);
    var specificPara = pageBody[0];
    console.log(specificPara);
}
//getPtags();

//	You can access and change attributes of DOM nodes using dot notation.
function changeKitty1(){
    var replaceImg = document.getElementById('kittenPic1');
    //console.log(replaceImg); 
    replaceImg.src = '../images/cat3.jpeg';
}
changeKitty1();

function changeKitty2(){
    var replaceImg = document.getElementById('kittenPic2');
    //console.log(replaceImg.getAttribute('src'));
    replaceImg.setAttribute('src','../images/cat4.jpeg');
}
changeKitty2();

function changeBodyColor(){
    var pageBody = document.getElementsByTagName('body');
    var pageColor = document.querySelector('body');
    pageColor.style.backgroundColor = 'pink';
    console.log(pageColor);
}
//changeBodyColor();

/*	
	######################################################
				Let’s Develop It 4.1
    Isolate a node (an element on the page) and change 
    an attribute or add a new style.
    Add another image to your HTML page, then change it 
    with another image is your JS.
    Change background color.
    Change header text, “JavaScript Test Site” to 
    something else.
	######################################################
*/

function kittyChange3(){
    var imgKitten = document.getElementById('kittenPic3');
    imgKitten.src = '../images/cat6.jpeg';
}
kittyChange3();

function changeBG2(){
    var pageBody = document.querySelector('body');
    pageBody.style.color = 'red';
    var headerPadding = document.getElementById('banner');
    headerPadding.style.padding = '5px';
}
//changeBG2();

function changeText(){
    var newTxt = document.getElementById('headerText');
    newTxt.innerHTML = 'GDI Rocks';
}
changeText();
