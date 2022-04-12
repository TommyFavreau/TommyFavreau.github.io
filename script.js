document.querySelector('#button').addEventListener('click', logMessages);  

function logDebug(){
    logMessages()
}
function logMessages() {
    console.log('Message');
    console.warn('Attention');
    console.error(`I'm sorry, Dave. I'm afraid I can't do that.`);
}