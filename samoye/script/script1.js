// window.onload = function () {

// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello, my friends!';
// };


window.onload = function () {

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.jpg') {
      myImage.setAttribute('src', 'images/2dog.jpg');
    } else {
      myImage.setAttribute('src', 'images/dog.jpg');
    }
}
};



window.onload=function(){
  let myImage = document.querySelector('img');
  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/pic1.png') {
        myImage.setAttribute('src', 'images/pic3.JPG');
      } else {
        myImage.setAttribute('src', 'images/pic1.png');
      }
  }
  function setHeading(Lisa) {
      let myHeading = document.querySelector('h1');
      myHeading.textContent = 'Hello!' + Lisa + '!';
    }   
    function setUserName() {
      let myName = prompt('请输入你的名字');
      localStorage.setItem('name', myName);
      setHeading(myName);
    }    
    let storedName = localStorage.getItem('name');
    if(!storedName) {
       setUserName();
    } else {
       setHeading(storedName);
    }    
    let myButton = document.querySelector('button'); 
    myButton.onclick = setUserName;
};