 /* toggal menu bar */
    document.addEventListener("DOMContentLoaded", function () {
      const mobileToggle = document.querySelector('.mobile-view');
      const navMenu = document.querySelector('nav ul');

      mobileToggle.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.toggle('active');
      });
    });



function handlePriceChange(value) {
  const selectedPrice = parseInt(value);
  const maxPrice = selectedPrice + 999;

  const hotels = [
    { id: 'h101', price: 9000 }, { id: 'h102', price: 1200 }, { id: 'h103', price: 2200 },
    { id: 'h104', price: 2000 }, { id: 'h105', price: 5000 }, { id: 'h106', price: 3900 },
    { id: 'h107', price: 4100 }, { id: 'h108', price: 7000 }, { id: 'h109', price: 1500 },
    { id: 'h110', price: 1800 }, { id: 'h111', price: 3200 }, { id: 'h112', price: 4700 },
    { id: 'h113', price: 5300 }, { id: 'h114', price: 6100 }, { id: 'h115', price: 7600 },
    { id: 'h116', price: 8800 }, { id: 'h117', price: 9900 }, { id: 'h118', price: 6400 },
    { id: 'h119', price: 3000 }, { id: 'h120', price: 2100 }, { id: 'h121', price: 4200 },
    { id: 'h122', price: 5800 }, { id: 'h123', price: 1000 }, { id: 'h124', price: 8600 },
    { id: 'h125', price: 1900 }, { id: 'h126', price: 7500 }, { id: 'h127', price: 4500 },
    { id: 'h128', price: 5500 }, { id: 'h129', price: 3200 }
  ];

  let found = false;

  hotels.forEach(hotel => {
    const hotelCard = document.getElementById(hotel.id);
    if (!hotelCard) return;

    if (hotel.price >= selectedPrice && hotel.price <= maxPrice) {
      hotelCard.style.display = "block";
      found = true;
    } else {
      hotelCard.style.display = "none";
    }
  });

  if(found) {
    alert(`Showing rooms between ₹${selectedPrice} and ₹${maxPrice}`);
  }
}


function showMoreHotel(){
    document.getElementById('h105').style.display="block";
    document.getElementById('h106').style.display="block";
    document.getElementById('h107').style.display="block";
    document.getElementById('h108').style.display="block";
    document.getElementById('h109').style.display="block";
    document.getElementById('h110').style.display="block";
    document.getElementById('h111').style.display="block";
    document.getElementById('h112').style.display="block";
    document.getElementById('h113').style.display="block";
    document.getElementById('h114').style.display="block";
    document.getElementById('h115').style.display="block";
    document.getElementById('h116').style.display="block";
    document.getElementById('h117').style.display="block";
    document.getElementById('h118').style.display="block";
    document.getElementById('h119').style.display="block";
    document.getElementById('h120').style.display="block";
    document.getElementById('h121').style.display="block";
    document.getElementById('h122').style.display="block";
    document.getElementById('h123').style.display="block";
    document.getElementById('h124').style.display="block";
    document.getElementById('h125').style.display="block";
    document.getElementById('h126').style.display="block";
    document.getElementById('h127').style.display="block";
    document.getElementById('h128').style.display="block";
    document.getElementById('h129').style.display="block";

    document.getElementById('recommendationsButton').style.display="none";
    
/*hide button*/
    let btn = document.createElement('button');
btn.innerText = "Click to hide";
btn.setAttribute('class', 'hide-Hotel-Button');

btn.style.display = "block";
btn.style.margin = "10px auto"; // Centered horizontally
btn.style.backgroundColor = "#007bff";
btn.style.padding = "8px 16px";
btn.style.color = "#fff";
btn.style.border="0px";
btn.style.textDecoration = "none";
btn.style.borderRadius = "4px";
btn.style.fontSize = "14px";
btn.style.transition = "background-color 0.3s ease";
btn.style.cursor = "pointer";

    let bind=document.getElementById('hotel-cont');
    bind.after(btn);

    btn.addEventListener('click',()=>{
        document.getElementById('h109').style.display="none";
    document.getElementById('h110').style.display="none";
    document.getElementById('h111').style.display="none";
    document.getElementById('h112').style.display="none";
    document.getElementById('h113').style.display="none";
    document.getElementById('h114').style.display="none";
    document.getElementById('h115').style.display="none";
    document.getElementById('h116').style.display="none";
    document.getElementById('h117').style.display="none";
    document.getElementById('h118').style.display="none";
    document.getElementById('h119').style.display="none";
    document.getElementById('h120').style.display="none";
    document.getElementById('h121').style.display="none";
    document.getElementById('h122').style.display="none";
    document.getElementById('h123').style.display="none";
    document.getElementById('h124').style.display="none";
    document.getElementById('h125').style.display="none";
    document.getElementById('h126').style.display="none";
    document.getElementById('h127').style.display="none";
    document.getElementById('h128').style.display="none";
    document.getElementById('h129').style.display="none";
    });

   btn.addEventListener('click',()=>{
    btn.style.display="none";
    document.getElementById('recommendationsButton').style.display="inline-block";
    
   })
}

// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// On click, scroll to top smoothly
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



  const chatIcon = document.getElementById('chat-icon');
  const chatBox = document.getElementById('chat-box');
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');

  // Toggle chat visibility
  chatIcon.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';

  });

  // Send message function
  function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user's message
    const userMsg = document.createElement('div');
    userMsg.className = 'user';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    // Clear input
    userInput.value = '';

    // Auto-scroll
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot reply
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'bot';
      botMsg.textContent = "Thanks for reaching out! We'll get back to you soon.";
      chatMessages.appendChild(botMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
  }

  // Press Enter to send
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

