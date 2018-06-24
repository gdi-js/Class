/*
   #######################################################
   FILENAME: deniseJScode4_4.js
   OVERVIEW: GDI JS Class 4: User Inputs
   PURPOSE: Different Let's Develop It Solutions
   #######################################################
*/

//RETRIEVING FROM DATA 
//You retrieve the values of form elements using the value method.
//SUBMIT BUTTONS
//If you are going to retrieve form values with the submit button, 
//be sure to prevent the default action!
var submitButton = document.getElementById('submitBtn');

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.getElementById('firstname').value;
    console.log('First name: ' +userName);

    //RADIO BUTTONS
    //Radio buttons usually do not have IDs, so you will need to 
    //use a for loop to get the value on each radio:
    var radios = document.getElementsByName('married');
    var length = radios.length;
    for (var i = 0; i < length; i++) {
        if (radios[i].checked) {
            var radioButtonValue = radios[i].value;
            // only one radio can be checked, so stop now
            console.log('Married: ' + radioButtonValue);
            break;
        }
    }
    
    var total;
    var week = 7;
    var hoursSpent = document.getElementById('hours').value;
    total = hoursSpent * week;
    console.log('You spend ' + total + ' coding a week');

})



/*
    #######################################################
                Let’s Develop It 4.4
    Collect a value from the input box on the page. 
    Use it inside a function of some kind. 
    For example, collect a number and multiply it by five 
    or collect a name and display a greeting.
    #######################################################
*/

