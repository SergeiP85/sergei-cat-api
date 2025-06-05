let breedsVisible = false;

function fetchCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      document.getElementById("fact").innerText = data.fact;
      document.getElementById("length").innerText = data.length;
    })
    .catch(error => {
      console.error("Error fetching cat fact:", error);
    });
}

function toggleBreeds() {
  const breedsList = document.getElementById("breeds-list");
  const btn = document.getElementById("breeds-btn");

  if (breedsVisible) {
    // Скрыть
    breedsList.innerHTML = "";
    btn.textContent = "Get breeds";
    breedsVisible = false;
  } else {
    // Показать
    fetch("https://catfact.ninja/breeds")
      .then(response => response.json())
      .then(data => {
        const breeds = data.data.slice(0, 5);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = `${breed.breed} (${breed.country})`;
          breedsList.appendChild(li);
        });
        btn.textContent = "Hide breeds";
        breedsVisible = true;
      })
      .catch(error => {
        console.error("Error fetching cat breeds:", error);
      });
  }
}

// Initial fetch to display a cat fact
fetchCatFact();


document.getElementById("refresh-btn").addEventListener("click", fetchCatFact);
document.getElementById("breeds-btn").addEventListener("click", toggleBreeds);
