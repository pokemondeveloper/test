// Getting elements
const buttons = document.querySelectorAll(".map-button");

// Events
buttons.forEach((button, index) => {
  let isOpen = false;
  const cityNames = [
    "— City 1",
    "— City 2",
    "— City 3",
    "— City 4",
    "— City 5",
    "— City 6",
    "— City 7",
    "— City 8",
    "— City 9",
    "— City 10",
  ];

  button.addEventListener("click", () => {
    isOpen = !isOpen;
    button.textContent = isOpen ? cityNames[index] : "+";

    if (isOpen) {
      buttons.forEach((otherButton, otherIndex) => {
        if (otherIndex !== index) {
          otherButton.textContent = "+";
        }
      });
      // Add styles
      button.classList.add("city");
      button.classList.add("clicked");
    } else {
      // Change it back to the default style
      button.classList.remove("city");
      button.classList.remove("clicked");
    }
  });
});
