/*
   #######################################################
   FILENAME: deniseJScode4_3.js
   OVERVIEW: GDI JS Class 4: Events
   PURPOSE: Different Let's Develop It Solutions
   #######################################################
*/

function eventListener() {
    element.addEventListener('click', function (event) {
        // code to be executed when user clicks
    });
}
//eventListener();
function button1() {
    var button = document.getElementById("myBtn1");
    button.addEventListener("click", function (event) {
        alert("Hi!");
    });
}
button1();


/*
    #######################################################
                Let’s Develop It 4.3a
    Write code that targets this link:
    When a user clicks the link, the page should display 
    an error message instead of going to the Girl Develop 
    It homepage.
    #######################################################
*/
document.querySelector('#gdiLink').addEventListener("click", function (event) {
    document.getElementById("gdi").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
});

/*
    #######################################################
                    Let’s Develop It 4.3b
    Go back to the sample files you downloaded earlier.
    Make some JavaScript code fire after a mouseover event.
    #######################################################
*/

myButton2 = document.getElementById("myBtn2");
myButton2.addEventListener("click", function (event) {
    console.log(event);
    btn = event.currentTarget;
    btn.style.backgroundColor = 'red';
    btn.innerHTML = 'Clicked!';
});

myButton3 = document.getElementById("myBtn3");
myButton3.addEventListener("mouseover", function (e) {
    console.log(e);
    btn = e.currentTarget;
    btn.style.backgroundColor = 'red';
    btn.innerHTML = 'Mouse Over!';
});

myButton3.addEventListener("mouseout", function (e) {
    console.log(e);
    btn = e.currentTarget;
    btn.style.backgroundColor = 'green';
    btn.innerHTML = 'Mouse Out!';
});











