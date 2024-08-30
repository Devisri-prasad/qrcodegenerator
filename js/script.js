function generateqr() {
    const url = document.getElementById('url').value;
    const qrElement = document.getElementById('qrcode');

    qrElement.innerHTML = ''; 

    if (url.trim() === '') {
        alert("Enter a URL");
        return;
    }

    new QRCode(qrElement, {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
document.getElementById('generateButton').addEventListener('click', generateqr);

document.getElementById('url').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        generateqr(); 
    }
});