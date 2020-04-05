// TODO: migrate fixture data to MongoDB OR build MongoDB into a static website generator.
import { videos } from '../fixtures/videos.mjs';

export const viewer = {
  videos,
  loadVideo: function(videoId) {    
    const video = this.videos.filter(function(item){
      return item.id === videoId;
    })[0] || {};
  
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
          // TODO: seekTo() needs to be fired on address change to account for the back button 
          player.seekTo(this.value);
          url.searchParams.set("t",this.value);
          console.log(url.searchParams.get("t"));
          // Create new browser history entry or edit the existing one?
          // history.replaceState({}, "", url.search);
          history.pushState({}, "", url.search);
        })
      }
  
    document.querySelector('template#timestamps').parentNode.appendChild(tsList);
  
    } else {
      document.querySelector('template#timestamps').parentNode.innerHTML = 'Video ID required. <a href="index.html">Pick a Video</a>.';
    }
  }
}
