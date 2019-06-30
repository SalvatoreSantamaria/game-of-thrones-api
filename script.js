const endpoint = "https://www.anapioficeandfire.com/api/characters";

const characters = [];

fetch(endpoint)
  .then(data => data.json())
  .then(jsondata => console.log(jsondata))

