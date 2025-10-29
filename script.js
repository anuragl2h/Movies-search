
function search(){
  const input = document.getElementsByTagName("input")[0];
  const val = input.value;
fetch(`http://www.omdbapi.com/?t=${val}&apikey=37098884`)
  .then(response => response.json())
  .then(data => {
  input.value = "";
  const child = document.getElementsByClassName("child")[0];
  child.style.display = "block"
  const img = document.getElementsByClassName("img")[0];
  img.style.display = "block";
  const title = document.getElementsByClassName("text")[0];
  const desc = document.getElementsByClassName("desc")[0];
  desc.style.display = "block";
  title.style.display = "block";
  img.src = data.Poster;
  title.innerHTML = `<span> Title ➡ </span>&nbsp${data.Title}
  `;
  desc.innerHTML= `
  
  <span> Description ➡ </span>
  ${data.Plot}
  <br>
  
  <span> Year ➡ </span>${data.Year}
  <br>
  
  <span> Country ➡ </span>${data.Country}
  <br>

  <span> Language ➡ </span>${data.Language}
  <br>
 
 <span> Released ➡ </span>${data.Released}
 <br>
 
  <span> Ratings ➡ </span>${data.Ratings[0].Value}
  <br>
 
  <span> Genre ➡ </span>${data.Genre}
 <br>

  <span> Writer ➡ </span>${data.Writer}
  <br>
 
  <span> Actors ➡ </span>${data.Actors}
  <br>
 
 <span> Runtime ➡ </span>${data.Runtime}
  <br>
 
  <span> Rated ➡ </span>${data.Rated}
  
  `
  if (val == "") {
    desc.style.display = "none";
  title.style.display = "none";
  img.style.display = "none";
  }
  }).catch(error => console.log("something is wrong ",error))
}
function resh(element){
  element.classList.toggle("resh")
}