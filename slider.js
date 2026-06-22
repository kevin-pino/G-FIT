let currentSlide = 0;

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function changeSlide(direction){

    currentSlide += direction;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

function goToSlide(index){
    currentSlide = index;
    showSlide(currentSlide);
}

// CAMBIO AUTOMÁTICO
setInterval(() => {
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 5000);

//Funciones del Chat
function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  if (!chatWindow) return;
  if (chatWindow.hasAttribute("hidden")) {
    chatWindow.removeAttribute("hidden");
  } else {
    chatWindow.setAttribute("hidden", "");
  }
}
function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");
  const text = input.value.trim();
  if (!text) return;

  // Mensaje del usuario
  messages.innerHTML += `
    <div class="chat-msg user-msg">
      <div class="msg-bubble">${text}</div>
      <span class="msg-time">Ahora</span>
    </div>
  `;
  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Respuesta automática
  setTimeout(() => {
    messages.innerHTML += `
      <div class="chat-msg agent-msg">
        <div class="msg-bubble">
          Gracias por comunicarte con G-FIT 💜.<br><br>
          Hemos recibido tu mensaje y en breve te atenderá uno de nuestros asesores.
        </div>
        <span class="msg-time">Ahora</span>
      </div>
    `;
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
}
//Permite enviar 
function handleChatKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendChatMessage();
  }
}

function sendQuickReply(text) {
  document.getElementById("chatInput").value = text;
  sendChatMessage();
}