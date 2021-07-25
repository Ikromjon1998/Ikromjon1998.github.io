//  1. Search SoundCloud

//  2. Query SoundCloud
{/* <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
<script> */}
// </script>

var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  }); 

}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
  SC.get('/tracks', {
    q: inputValue
  }).then(function(tracks) {
    console.log(tracks);
  });
}

SoundCloudAPI.getTrack("Rilo Kiley");

SoundCloudAPI.renderTracks = function(){

  var card = document.createElement('div');
  card.classList.add('card');


  var imageDiv = document.createElement('div');
  imageDiv.classList.add('image');
  
  var image_img = document.createElement('img');
  image_img.classList.add('image_img');
  image_img.src = 'http://www.placekitten.com/290/290';

  imageDiv.appendChild(image_img);

  //content
  var content = document.createElement('div');
  content.classList.add('content');

  var header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = '<a href="#" target="_blank">"Science Vs. Romance"</a>'

  //button
  var button = document.createElement('div');
  button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
  
  var icon = document.createElement('div');
  icon.classList.add('add', 'icon');

  var buttonText = document.createElement('span');
  buttonText.innerHTML = 'Add to Playlist';

  //appendChild
  /// content
  content.appendChild(header);
  /// button
  button.appendChild(add_icon);
  button.appendChild(buttonText);

  card.appendChild(imageDiv);
  card.appendChild(content);
  card.appendChild(button);

  var searchResults = document.querySelector('.js-search-results');
  searchResults.appendChild(card);
}

SoundCloudAPI.renderTracks();


// function  getTrack(inputValue) {
//   SC.initialize({
//       client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
//   });

//   // find all sounds of buskers licensed under 'creative commons share alike'
//   SC.get('/tracks', {
//     q: inputValue
//   }).then(function(tracks) {
//     console.log(tracks);
//   });
// }





//  3. Display the cards

//  4. Add to a playlist and play