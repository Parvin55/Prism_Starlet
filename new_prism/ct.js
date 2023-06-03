const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');

userInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value;
  appendUserMessage(message);
  userInput.value = '';
  sendToBot(message);
}

function appendUserMessage(message) {
  const userMessage = createMessageElement(message, 'user-message');
  chatContainer.appendChild(userMessage);
  scrollToBottom();
}

function appendBotMessage(message) {
  const botMessage = createMessageElement(message, 'bot-message');
  chatContainer.appendChild(botMessage);
  scrollToBottom();
}

function createMessageElement(message, className) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message ' + className;
  messageElement.textContent = message;
  return messageElement;
}

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendToBot(message) {
  // Replace this with your own AI chatbot logic
  const reply = getBotReply(message);
  appendBotMessage(reply);
}

function getBotReply(message) {
  // Replace this with your own AI chatbot logic
  // You can use APIs or custom algorithms to generate bot replies
  // Here's a basic example with predefined responses
  
  let reply;
  
  if (message.toLowerCase().includes('hello')) {
    reply = "Hello! How can I assist you today?";
  } else if (message.toLowerCase().includes('does diffrently abled children get accommodations in school')) {
    reply = " Yes, under laws like IDEA, mentally disabled children are entitled to receive reasonable accommodations and support in school to help them participate in educational activities and achieve their full potential.";
  }  else if (message.toLowerCase().includes('can mentally disabled children attend school')) {
    reply = " Yes, mentally disabled children have the right to attend school and receive an education tailored to their needs.";
  }  else if (message.toLowerCase().includes('can mentally disabled children receive financial assistance')) {
    reply = " In some cases, mentally disabled children may be eligible for financial assistance. This can include disability benefits, Medicaid or other healthcare assistance, and social welfare programs, depending on the country and specific circumstances.";
  } else {
    reply = "Sorry i don;t understand can you rephrase it";
  }
  
  // Add your logic to generate bot replies here
  
  return reply;
}