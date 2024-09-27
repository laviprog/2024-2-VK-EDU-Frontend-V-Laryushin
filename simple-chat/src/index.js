import './index.css';

const input = document.getElementById('inputMessage');
const sender = document.getElementById('sender');
const messagesContainer = document.querySelector('.messages');

input.addEventListener('keydown', handleKeyDown);

function handleSubmit(event) {
    event.preventDefault();

    const messageText = input.value.trim();
    if (!messageText) return;

    const message = createMessage(messageText, "user");

    saveMessageToLocalstorage(message);
    displayMessage(message);

    resetInput();
    scrollToBottom();
}

function createMessage(text, sender) {
    return {
        text,
        sender,
        timestamp: new Date().toISOString()
    };
}

function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey && input.value.trim() !== '') {
        handleSubmit(event);
    }
}

function saveMessageToLocalstorage(message) {
    try {
        const messages = getMessagesFromLocalstorage();
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    } catch (error) {
        console.error('Error saving message to localStorage', error);
    }
}

function getMessagesFromLocalstorage() {
    try {
        return JSON.parse(localStorage.getItem('messages')) || [];
    } catch (error) {
        console.error('Error retrieving messages from localStorage', error);
        return [];
    }
}

function displayMessage(message) {
    const messageElement = createMessageElement(message);
    messagesContainer.appendChild(messageElement);
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.className = message.sender === "user" ? 'user-message' : 'interlocutor-message';

    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const timeString = new Date(message.timestamp).toLocaleTimeString([], timeOptions);

    messageElement.innerHTML = `
        <div class="text">${message.text}</div>
        <div class="meta">${timeString}</div>
    `;
    return messageElement;
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Сброс поля ввода
function resetInput() {
    input.value = '';
    input.style.height = '40px';
}

document.addEventListener('DOMContentLoaded', () => {
    const messages = getMessagesFromLocalstorage();
    const fragment = document.createDocumentFragment();
    messages.forEach(message => {
        fragment.appendChild(createMessageElement(message));
    });
    messagesContainer.appendChild(fragment);

    scrollToBottom();
});

sender.addEventListener('click', handleSubmit);

input.addEventListener('input', function () {
    this.style.height = '40px';
    this.style.height = (this.scrollHeight) + 'px';
});
