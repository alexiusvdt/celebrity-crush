function hideResults() {
  document.getElementById("age").setAttribute("class", "hidden");
  document.getElementById("height").setAttribute("class", "hidden");
  document.getElementById("weight").setAttribute("class", "hidden");
}

window.onload = function() {
  // hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    // hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    // const weight = parseInt(document.querySelector("input#weight").value);

    if (age && height) {
      if (age >= 18 && height >= 60) {
        document.getElementById("Affleck").removeAttribute("class");
        document.getElementById("Rock").removeAttribute("class");
        document.getElementById("Ryder").removeAttribute("class");
        document.getElementById("Reynolds").removeAttribute("class");
      } else if (age >= 18 || height >= 48) {
        document.getElementById("Rock").removeAttribute("class");
        document.getElementById("Ryder").removeAttribute("class");
      } else if (age >= 18) {
        document.getElementById("Reynolds").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    }
  };
};