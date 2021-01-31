const contactButton = document.getElementById("contact-submit");
const cName = document.getElementById('name');
const cEmail = document.getElementById('email');
const cMessage = document.getElementById('message');
console.log(contactButton);

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  contactName = cName.value;
  contactEmail = cEmail.value;
  contactMessage = cMessage.value;
  sendMessage(contactName, contactEmail, contactMessage);
});

// Send a POST request with Axios

const sendMessage = async (name,email,message) => {
  console.log("workin'");
  console.log(name, email, message);
  axios({
    method: 'post',
    url: 'https://app.99inbound.com/api/e/123456',
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
  }).then((response) => { console.log(response); })
  
}