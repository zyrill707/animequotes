let name = document.getElementById("animeName");
let talk = document.getElementById("speech");
let label = document.getElementById("title");

document.getElementById("searchBtn").onclick = function(){
  const anime = document.getElementById("userInput").value;
  let url = `https://animechan.xyz/api/random/character?name=${anime}`; 

document.getElementById("btn").onclick = function(){
  fetch(url)
    .then(response => response.json())
    .then(data => {
      name.innerHTML = data.character;
      speech.innerHTML = data.quote;
      title.innerHTML = data.anime;
    });
}
} 