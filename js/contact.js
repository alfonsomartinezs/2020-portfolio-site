const contactButton = document.getElementById("contact-submit");
const cName = document.getElementById('name');
const cEmail = document.getElementById('email');
const cMessage = document.getElementById('message');

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
})

contactButton.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(contactButton.innerText)
  contactButton.innerText = "Message received!"
  sendMessage();
});

// Send a POST request with Axios

const sendMessage = async () => {
  let name = cName.value;
  let email = cEmail.value;
  let message = cMessage.value;
  axios({
    method: 'post',
    url: 'https://app.99inbound.com/api/e/xPVAvAOX',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      name: name,
      email: email,
      message: message
    },
    mode: 'cors'
  }).then((response) => {
    console.log(response);
    setTimeout(() => {  contactButton.innerText = "Submit" }, 2000);
  })
  
}

console.log("Hi! This is the Console!")