const contactButton = document.getElementById("contact-submit");
const cName = document.getElementById('name');
const cEmail = document.getElementById('email');
const cMessage = document.getElementById('message');


contactButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let senderName = cName.value;
  let email = cEmail.value;
  let message = cMessage.value;

  if (senderName !== "" && email !== "" && message !== "") {
    sendMessage(senderName,email,message);    
  } else {
    console.log("need stuff!")
  }

});

// Send a POST request with Axios

const sendMessage = async (senderName,email,message) => {
  
  contactButton.classList.add("shrink");
  axios({
    method: 'post',
    url: 'https://app.99inbound.com/api/e/xPVAvAOX',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      name: senderName,
      email: email,
      message: message
    },
    mode: 'cors'
  }).then((response) => {
    contactButton.innerText = "Sent!";
    contactButton.classList.remove("shrink");
    setTimeout(() => {
      contactButton.innerText = "Submit";
    }, 3000);
  })
  
}
