
// import { videos } from '../fixtures/videos.mjs';

function init() {
  const video = {
    id: 'panKf9hzUfQ',
    timestamps: {
      41: 'Is CSS a programming language?',
      168: 'What is a programming language?',
      342: 'Turd Driven Development',
      472: 'What is programming?',
      512: 'Algorithms 101',
      725: 'CSS Algorithms 101'
    }
  };
  
  const vidTemplate = document.querySelector("#video");
  const tsTemplate = document.querySelector("#timestamp");
  const vidClone = vidTemplate.content.cloneNode(true);
  
  vidClone.querySelector('h2').innerText = video.title;
  vidClone.querySelector('address').innerText = video.attribution;
  const tsList = vidClone.querySelector('ul');

  Object.entries(video.timestamps).forEach(function(title){
    console.log(title[0]);
    tsList.innerHTML += `<li><button value="${title[0]}">${title[1]}</button></li>`;
  })

  // Add click listeners to each button; clunky but it works for now
  // Using for...of and NOT for...in as per this SO:
  // https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

  const buttons = tsList.querySelectorAll('button');
  for (let button of buttons) {
    button.addEventListener('click',function(evt){
      console.log(this.value); 
      player.seekTo(this.value);
    })
  }

  document.querySelector('section').appendChild(vidClone);
  
}

document.addEventListener('load',init());