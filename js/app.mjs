// Import fixture. POC uses only one video for testing
// TODO: Add support for multiple videos by adding url parameters for vid id and timestamps
// TODO: migrate fixture data to MongoDB.
import { videos } from '../fixtures/video.mjs';

function init() {
  
  const vidTemplate = document.querySelector("#video");
  const tsTemplate = document.querySelector("#timestamp");
  const vidClone = vidTemplate.content.cloneNode(true);
  
  vidClone.querySelector('h2').innerText = video.title;
  vidClone.querySelector('address').innerText = video.attribution;
  const tsList = vidClone.querySelector('ul');

  Object.entries(videos[0].timestamps).forEach(function(ts){
    console.log(ts[0]);
    tsList.innerHTML += `<li><button value="${ts[0]}">${ts[1]}</button></li>`;
  })

  // Add click listeners to each button; clunky but it works for now
  // Using for...of and NOT for...in as per this SO:
  // https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

  const buttons = tsList.querySelectorAll('button');
  for (let button of buttons) {
    button.addEventListener('click',function(evt){
      player.seekTo(this.value);
    })
  }

  document.querySelector('section').appendChild(vidClone);
  
}

document.addEventListener('load',init());