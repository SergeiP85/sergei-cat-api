function fetchCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("fact").innerText = data.fact;
      document.getElementById("length").innerText = data.length;
    })
    .catch(error => {
      console.error("Error fetching cat fact:", error);
    });
}

function fetchCatBreeds() {
  fetch("https://catfact.ninja/breeds")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const breedsList = document.getElementById("breeds-list");
      breedsList.innerHTML = ""; // clear previous list
      const breeds = data.data.slice(0, 5); // show 5 breeds
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = `${breed.breed} (${breed.country})`;
        breedsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error fetching cat breeds:", error);
    });
}

// On page load
fetchCatFact();
fetchCatBreeds();

document.getElementById("refresh-btn").addEventListener("click", fetchCatFact);
