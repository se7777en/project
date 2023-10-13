const shortBtn = document.getElementById('short');
const reloadBtn = document.getElementById('rel');
console.log(reloadBtn);

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("inpuMail").value,
     apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl),
     shortenedUrlTextarea = document.getElementById("textArea");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });

}

reloadBtn.addEventListener('click', () => {
    location.reload();
});