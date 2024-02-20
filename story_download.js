
    // Get the download button
    const downloadBtn = document.querySelector('.download-btn');

    // Add event listener to handle download button click
    downloadBtn.addEventListener('click', function() {
        // Get the story content
        const storyContent = document.querySelector('.Adventure_Stories_content').innerText;
        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(storyContent);
        link.download = 'StoryQuest.txt';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
