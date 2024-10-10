import './index.css';

const elements = {
    input: document.getElementById('inputMessage'),
    inputWithImg: document.getElementById('inputMessageWithImg'),
    sender: document.getElementById('sender'),
    messagesContainer: document.querySelector('.messages'),
    attachmentButton: document.getElementById('attachment'),
    imgInput: document.getElementById('imgInput'),
    imageModal: document.getElementById('imageModal'),
    imagePreview: document.getElementById('imagePreview'),
    modalCloser: document.getElementById('modalCloser'),
    senderImg: document.getElementById('senderImg')
};

let img;

function handleSubmit(event) {
    event.preventDefault();

    const messageText = (img ? elements.inputWithImg.value : elements.input.value).trim();
    if (!messageText && !img) return;

    const message = createMessage(messageText, "user", img);
    saveMessageToLocalstorage(message);
    displayMessage(message);
    resetInput();

    closeModal();
}

function createMessage(text, sender, img = null) {
    return { text, sender, img, timestamp: new Date().toISOString() };
}

function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey && (elements.input.value.trim() || img)) {
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
    elements.messagesContainer.appendChild(createMessageElement(message));
    scrollToBottom();
}

function createMessageElement({ text, img, timestamp }) {
    const messageElement = document.createElement('div');
    messageElement.className = 'user-message';

    const timeString = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `
        ${img ? `<img src="${img}" alt="Attached Image" class="img">` : ''}
        <div class="text">${text}</div>
        <div class="meta">${timeString}</div>
    `;
    return messageElement;
}

function scrollToBottom() {
    elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
}

function resetInput() {
    elements.input.value = '';
    elements.inputWithImg.value = '';
    elements.input.style.height = '40px';
    img = undefined;
}

function handleImageInput() {
    const file = elements.imgInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        img = e.target.result;
        elements.imagePreview.src = img;
        elements.imageModal.style.display = 'flex';
        elements.inputWithImg.focus();
    };
    reader.readAsDataURL(file);
    elements.imgInput.value = '';
}

function closeModal() {
    elements.imageModal.style.display = 'none';
    resetInput();
}

function clearLocalStorage() {
    localStorage.clear();
    elements.messagesContainer.innerHTML = '';
    alert('LocalStorage has been cleared!');
}

function initialize() {
    const messages = getMessagesFromLocalstorage();
    const fragment = document.createDocumentFragment();
    messages.forEach(message => fragment.appendChild(createMessageElement(message)));
    elements.messagesContainer.appendChild(fragment);
    scrollToBottom();
}

elements.input.addEventListener('keydown', handleKeyDown);
elements.inputWithImg.addEventListener('keydown', handleKeyDown);

elements.sender.addEventListener('click', handleSubmit);
elements.senderImg.addEventListener('click', handleSubmit);

elements.input.addEventListener('input', function () {
    this.style.height = '40px';
    this.style.height = `${this.scrollHeight}px`;
});

elements.attachmentButton.addEventListener('click', () => elements.imgInput.click());
elements.imgInput.addEventListener('change', handleImageInput);
elements.modalCloser.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === elements.imageModal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', initialize);

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        clearLocalStorage();
    }
});
