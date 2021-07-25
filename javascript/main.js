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

  var searchResults = document.querySelector('.js-search-results');
  searchResults.appendChild(card);

  var image = document.createElement('div');
  image.classList.add('image');
  var content = document.createElement('div');
  content.classList.add('content');
  var ui_button = document.createElement('div');
  ui_button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
  var add_icon = document.createElement('div');
  add_icon.classList.add('add', 'icon');

  card.appendChild(image);
  card.appendChild(content);
  card.appendChild(ui_button);


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