

const characters = [];

const taskInput = document.querySelector('#task');


document.getElementById('searchButton').addEventListener('click', function() {
  
  console.log('search ran',)
  const searchInput = document.querySelector('#search')
  const endpoint = `https://www.anapioficeandfire.com/api/characters/?name=${searchInput.value}`

  console.log(endpoint)
  fetch(endpoint)
  .then(data => data.json())
 // .then(jsondata => console.log(jsondata))
    .then(jsondata => characters.push(...jsondata))
    console.log(characters)
  });







