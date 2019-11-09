/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const friendsArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
];

const entryPoint = document.querySelector('.cards');

axios 
  .get("https://api.github.com/users/Jeffim-dev")

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(createCard(userData));
  })

  .then(
    friendsArray.forEach(followers => {
      axios
       .get(followers)
       .then(response => {
        console.log(response);
        const userData = response.data;
        entryPoint.appendChild(createCard(userData));
      })
    }))

  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//  const friendsArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd',, 'bigknell']

//  friendsArray.forEach(followers => {axios.get(`https://api.github.com/users/${followers}`)

// friendsArray.forEach(followers => {axios.get(followers)

// .then(response => {
//     console.log(response);
//     const userData = response.data;
//     entryPoint.appendChild(createCard(userData));
//   })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });
//  });
 
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(data) {
  const 
    card = document.createElement('div'),
    cardImg = document.createElement('img'),
    cardInfo = document.createElement('div'),
    cardName = document.createElement('h3'),
    cardUsername = document.createElement('p'),
    cardLocation = document.createElement('p'),
    cardProfile = document.createElement('p'),
    cardUrl = document.createElement('a'),
    cardFollower = document.createElement('p'),
    cardFollowing = document.createElement('p'),
    cardBio = document.createElement('p');

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollower);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  card.classList.add('card');
  cardImg.classList.add('img');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  
  cardImg.src = data.avatar_url;
  cardName.textContent = data.name;
  cardUsername.textContent = data.login;
  cardLocation.textContent = `Location: ${data.location}`;

  cardProfile.textContent = `Profile:  `;
  cardUrl.setAttribute('href', data.html_url);
  cardUrl.textContent = data.html_url;
  cardProfile.appendChild(cardUrl);

  cardFollower.textContent = `Followers: ${data.followers}`;
  cardFollowing.textContent = `Following: ${data.following}`;
  cardBio.textContent = `Bio: ${data.bio}`;

  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
