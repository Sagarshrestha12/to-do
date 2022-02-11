function displayMessage() {
  let popUp = document.getElementById("popup");
  popUp.style.display = "block";
  setTimeout(() => {
    popUp.style.display = "none";
  }, 500);
}

export default displayMessage;
