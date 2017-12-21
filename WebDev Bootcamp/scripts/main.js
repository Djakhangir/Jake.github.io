/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
*/
/*document.querySelector('html').onclick = function() {
    alert('Ouch! fuck off! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'C:/Users/Djake/Desktop/WebDev Bootcamp/images/space_tree_illustration2-824x549.jpg') {
      myImage.setAttribute ('src','C:/Users/Djake/Desktop/WebDev Bootcamp/images/leaf.jpg');
    } else {
      myImage.setAttribute ('src','C:/Users/Djake/Desktop/WebDev Bootcamp/images/space_tree_illustration2-824x549.jpg');
    } 
    }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Map the World ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Map the World ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}


    
    
    
    
    

    
