const encryptions = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptions = Object.fromEntries(
    Object.entries(encryptions).map(([char, replacement]) => [replacement, char])
);

function encryptText() {
    const input = document.getElementById('inputText').value;
    let encrypted = input;
    for (let [char, replacement] of Object.entries(encryptions)) {
        encrypted = encrypted.split(char).join(replacement);
    }
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    let decrypted = input;
    for (let [replacement, char] of Object.entries(decryptions)) {
        decrypted = decrypted.split(replacement).join(char);
    }
    document.getElementById('outputText').value = decrypted;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}