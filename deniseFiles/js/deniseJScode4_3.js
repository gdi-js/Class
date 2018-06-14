 /*
    #######################################################
    FILENAME: deniseJScode4_3.js
    OVERVIEW: GDI JS Class 4: Events
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

function eventListener(){
    element.addEventListener('click', function(event) {
        // code to be executed when user clicks
      });      
}
//eventListener();

//Calling Functions from HTML
function sayHi (event) {
    alert('Hi!');
};


function button2(){
    var button = document.getElementById("myBtn");
    button.addEventListener("click", function (event) {
        alert("Hi!");
    });
}
button2();

/*
    #######################################################
                Let’s Develop It 4.3a
    Go back to the sample files you downloaded earlier.
    Make some JavaScript code fire after a mouseover event.
    #######################################################
*/
function mouseOverEvent(){

}
//mouseOverEvent();

/*
    #######################################################
                Let’s Develop It 4.3b
    Write code that targets this link:
    When a user clicks the link, the page should display 
    an error message instead of going to the Girl Develop 
    It homepage.
    #######################################################
*/





