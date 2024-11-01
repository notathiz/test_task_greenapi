async function fetchData(url, method, data = {}) {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiTokenInstance').value;
    const fullUrl = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiToken}`;
    
    try {
        const response = await fetch(fullUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('response').value = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('response').value = `Error: ${error.message}`;
    }
}

function getSettings() {
    fetchData('getSettings');
}

function getStateInstance() {
    fetchData('getStateInstance');
}

function sendMessage() {
    const chatId = document.getElementById('chatIdMessage').value;
    const message = document.getElementById('messageText').value;
    const data = { chatId: chatId, message: message };
    fetchData('sendMessage', data);
}

function sendFileByUrl() {
    const chatId = document.getElementById('chatIdFile').value;
    const urlFile = document.getElementById('fileUrl').value;
    const data = { chatId: chatId, urlFile: urlFile, caption: "File sent via API" };
    fetchData('sendFileByUrl', data);
}
