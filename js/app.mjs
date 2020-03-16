
// import { videos } from '../fixtures/videos.mjs';

function init() {
  const videos = [
    {
      id: 'panKf9hzUfQ',
      title: 'CSS Algorithms',
      attribution: 'Lara Schenck',
      timestamps: {
        41: 'Is CSS a programming language?',
        168: 'What is a programming language?',
        342: 'Turd Driven Development',
        472: 'What is programming?',
        512: 'Algorithms 101',
        725: 'CSS Algorithms 101'
      }
    }
  ];
  
  const vidTemplate = document.querySelector("#video");
  const tsTemplate = document.querySelector("#timestamp");
  videos.forEach(function(video){
    const vidClone = vidTemplate.content.cloneNode(true);
    
    vidClone.querySelector('h2').innerText = video.title;
    vidClone.querySelector('address').innerText = video.attribution;
    const tsList = vidClone.querySelector('ul');
    console.log(tsList);
    for(const timestamp in video.timestamps) {
      // TODO: clean this up later
      tsList.innerHTML += `<li><a href="https://www.youtube.com/watch?v=${video.id}&t=${timestamp}">${video.timestamps[timestamp]}</a></li>`;
    }
    document.querySelector('section').appendChild(vidClone);
  })
}

document.addEventListener('load',init());