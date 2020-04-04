// TODO: migrate fixture data to MongoDB OR build MongoDB into a static website generator.
import { videos } from '../fixtures/videos.mjs';
const video = videos.filter(function(item){
  return item.id === videoId;
})[0] || {};

function init() {
    if (typeof video === "object" && typeof video.timestamps === "object") {
    const tsList = document.querySelector('template#timestamps').content.cloneNode(true);
    const tsItemTemplate = tsList.querySelector('li').cloneNode(true);
    const tsParent = tsList.parentNode;
    
    document.querySelector('body > header > h1').innerText = video.title;
    document.querySelector('body > header > address').innerText = video.author;

    tsList.textContent = '';

    if (Object.keys(video.timestamps).length > 0) {
      Object.entries(video.timestamps).forEach(function(ts){
        let listItem = tsItemTemplate.cloneNode(true);

        listItem.querySelector('.ts-click').setAttribute('value',ts[0]);
        listItem.querySelector('.ts-click').innerText = ts[1];
        tsList.appendChild(listItem);
      })
    } else {
      document.querySelector('template#timestamps').parentNode.innerText = 'No bookmarks found for this video.';
    }

    // Add click listeners to each button; clunky but it works for now
    // Using for...of and NOT for...in as per this SO:
    // https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

    const buttons = tsList.querySelectorAll('button');
    for (let button of buttons) {
      button.addEventListener('click',function(evt){
        // TODO: add 't' search param to the address bar
        player.seekTo(this.value);
        url.searchParams.set("t",this.value);
        console.log(url.searchParams.get("t"))
        history.replaceState({}, "", url.search);
      })
    }

    document.querySelector('template#timestamps').parentNode.appendChild(tsList);
  } else {
    // TODO: create list of videos
    console.log('nope.')
  }
}

document.addEventListener('load',init(player));