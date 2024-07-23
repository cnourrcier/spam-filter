const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:\s|^)fr[3e][3e] m[0o]n[3e]y(?:\s|$)/i;
const stockRegex = /(?:\s|^)[5s][7t][0o][c{[(]k [4a@]l[3e]r[7t](?:\s|$)/i;
const dearRegex = /(?:\s|^)d[3e][4a@]r fr[1i|][3e]nd(?:\s|$)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener('click', () => {
    if (messageInput.value === '') {
        alert('Please enter a message.');
        return;
    }

    result.textContent = isSpam(messageInput.value) ? 'Oh no! This looks like a spam message.' : 'This message does not seem to contain any spam.'
    messageInput.value = '';
});