document.querySelector('#button').addEventListener('click', logMessages);  

function logDebug(){
    logMessages()
}
function logMessages() {
    console.log('Hello, Console!');
    console.warn('Abandon Hope All Ye Who Enter');
    console.error(`I'm sorry, Dave. I'm afraid I can't do that.`);
}