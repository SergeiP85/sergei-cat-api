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

// call the function to fetch a cat fact on page load
fetchCatFact();

// btn handler
document.getElementById("refresh-btn").addEventListener("click", fetchCatFact);
