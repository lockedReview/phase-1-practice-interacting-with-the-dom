//Grabbing Counter elements
const counter = document.getElementById('counter');
let counterNumber = parseInt(counter.innerText);
//Grabbing the Plus and Minus signs
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
//grabbing the heart and list elements
const heart = document.getElementById('heart');
const likesList = document.querySelector('.likes');
//creating the listObj for the like messages and creating li element
const addLi = document.createElement('li')
let likesCount = {}
//Grabbing the Pause button and its label
const record = document.getElementById('pause');
let recordLabel = record.innerText
console.log(recordLabel)
//grabbing the comment elements
const comment = document.getElementById('comment-form');
const input = document.querySelector('#comment-input');
let inputText= parseInt(input.value);
console.log(inputText)
const submit = document.getElementById('submit');
let submitList= [];
//creating and adding bogy element for submit
const bodyDiv = document.getElementById('list')
const bodyList = document.createElement('ul');
bodyDiv.appendChild(bodyList);

//setting the interval

let interval= setInterval(setCounter, 1000);
let isPaused = false;
setTimeout(interval, 5)
//the event listeners
plus.addEventListener('click',addPlus);
minus.addEventListener('click',addMinus);

heart.addEventListener('click',addHeart);

record.addEventListener('click',pauseStart);

submit.addEventListener('click',addSubmit);


function renderSubmitList() {
    bodyList.innerHTML = "";
    submitList.forEach((item) => {
    
    const addLi = document.createElement('li');
    addLi.innerText = item;
    bodyList.appendChild(addLi);
    });
    }
    
function addSubmit(event) {
    event.preventDefault();
    const inputText = input.value;
    console.log(inputText);
    submitList.push(inputText);
    renderSubmitList();
    }

function pauseStart() {
    console.log('i was clicked');
    if (isPaused) {
      record.innerText = "pause";
      interval = setInterval(setCounter, 1000);
      isPaused = false; 
    } else {
      record.innerText = "play";   
      clearInterval(interval);
      isPaused = true;
    }
  }
function renderLikesList(){
        likesList.innerHTML = '';
    for (const counterNumber in likesCount) {
        const addLi = document.createElement('li'); 
        addLi.innerText = `Number ${counterNumber} has ${likesCount[counterNumber]} likes.`;
        likesList.appendChild(addLi);
    }
}

function addHeart(){
    if(!isPaused){
    heart.addEventListener('click',addHeart);    
    likesCount[counterNumber] = likesCount[counterNumber] || 0;
    likesCount[counterNumber]++;
    renderLikesList();
    
    }
}

function addPlus(){
    if(!isPaused){
    counterNumber++;
    console.log(counterNumber)
    counter.innerText = counterNumber;
    console.log('I was clicked')
}
}

function addMinus(){
    if(!isPaused){
    counterNumber--;    
    counter.innerText = counterNumber;
    }
}

function setCounter() {
    counterNumber++;
    counter.innerText = counterNumber ;
    }