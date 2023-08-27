// fetche////
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showSuperheroes);

function showSuperheroes(superheroes) {
  // loope//
  superheroes.forEach(showSuperhero);
}
function showSuperhero(superhero) {
  console.log(superhero);
  // clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".realName").textContent = superhero.realName;
  copy.querySelector(".alias").textContent = superhero.alias;
  copy.querySelector(".origin").textContent = superhero.origin;
  copy.querySelector(".day").textContent = superhero.day;
  copy.querySelector(".month").textContent = superhero.month;
  copy.querySelector(".year").textContent = superhero.year;
  copy.querySelector(".height").textContent = superhero.height;
  copy.querySelector(".powers").textContent = superhero.powers;
  copy.querySelector(".weaknesses").textContent = superhero.weaknesses;
  copy.querySelector(".isEvil").textContent = superhero.isEvil;
  copy.querySelector(".active").textContent = superhero.active;
  copy.querySelector("img").src = superhero.image;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
