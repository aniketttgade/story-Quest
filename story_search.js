
    const searchInput = document.getElementById('searchInput');
    const stories = document.querySelectorAll('.story-main');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        stories.forEach(story => {
            const h1 = story.querySelector('h1');
            const parentDiv = story.parentElement;
            if (h1.textContent.toLowerCase().includes(searchTerm)) {
                parentDiv.style.display = 'block';
            } else {
                parentDiv.style.display = 'none';
            }
        });
    });