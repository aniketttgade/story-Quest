// search.js

document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value.trim().toLowerCase();
    var mainContent = document.querySelector('main');
    var paragraphs = mainContent.getElementsByTagName('p');
    var matchFound = false;

    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].textContent.toLowerCase();
        if (query && paragraphText.includes(query)) {
            matchFound = true;
            paragraphs[i].style.backgroundColor = 'yellow';
            paragraphs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        } else {
            paragraphs[i].style.backgroundColor = '';
        }
    }

    if (!matchFound && query) {
        var messageElement = document.getElementById('searchMessage');
        if (!messageElement) {
            messageElement = document.createElement('p');
            messageElement.id = 'searchMessage';
            document.body.appendChild(messageElement);
        }
        messageElement.textContent = 'No matching result found!';
    } else {
        var messageElement = document.getElementById('searchMessage');
        if (messageElement) {
            messageElement.remove();
        }
    }
});
