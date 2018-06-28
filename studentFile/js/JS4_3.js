// JS for 4_2.html

var button = document.getElementById('myBtn1');
button.addEventListener('click', function(event){
    alert('Hello, welcome!');
});

var button2 = document.getElementById('myBtn2');
button2.addEventListener('mouseover', function(event){
    console.log(event);
    var changeColor = event.currentTarget;
    changeColor.style.backgroundColor = 'pink';
    changeColor.innerHTML = 'Color Changed!';
});

button2.addEventListener('mouseout', function(event){
    button2.style.backgroundColor= 'green';
    button2.innerHTML = 'Mouse Out';
});
