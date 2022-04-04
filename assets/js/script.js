const confirmBtn = document.getElementById('confirm-settings');
const resetBtn = document.getElementById('reset-settings');

console.log('hello')
confirmBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage('', {
        type: 'notification',
        message: 'Hello world'
    });
});