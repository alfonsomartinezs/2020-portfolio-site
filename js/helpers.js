console.log("Hi! This is the Console!")

const elementToCopy = document.getElementById("copyElement");
const copyMessage = document.getElementById("copyMessage");
const copyElementValue = () => {
  const email = elementToCopy.getAttribute("data-value")
  console.log(email)
  console.log("copying!");
  navigator.clipboard.writeText(email)
  copyMessage.classList.remove("hidden");
  setTimeout(() => {
    copyMessage.classList.add("hidden");

  },4000)
}