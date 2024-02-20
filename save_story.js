document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to all save buttons
    document.querySelectorAll('.save-icon').forEach(function(saveIcon) {
        saveIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the event from propagating to parent elements

            // Get the title and content of the corresponding story
            const storyContainer = saveIcon.closest('.adventure_stories_all_box');
            const title = storyContainer.querySelector('h1').innerText;
            const content = storyContainer.querySelector('p').innerText;

            // Call the function to save the story
            saveStory(title, content);
        });
    });
});

// Function to save the story
function saveStory(title, content) {
    // Retrieve saved stories from local storage or initialize an empty array if there are no saved stories
    let savedStories = JSON.parse(localStorage.getItem('savedStories')) || [];
    
    // Add the current story to the array
    savedStories.push({ title: title, content: content });
    
    // Save the updated array back to local storage
    localStorage.setItem('savedStories', JSON.stringify(savedStories));

    // Notify the user that the story is saved
    alert('Story saved successfully!');
}



// Function to save the story
function saveStory(title, content) {
    // Retrieve saved stories from local storage or initialize an empty array if there are no saved stories
    let savedStories = JSON.parse(localStorage.getItem('savedStories')) || [];

    // Check if the story already exists in the saved stories list
    const exists = savedStories.some(story => story.title === title && story.content === content);
    if (!exists) {
        // Add the current story to the array if it doesn't exist already
        savedStories.push({ title: title, content: content });

        // Save the updated array back to local storage
        localStorage.setItem('savedStories', JSON.stringify(savedStories));

        // Notify the user that the story is saved
        alert('Story saved successfully!');
    } else {
        // Notify the user that the story is already saved
        alert('Story is already saved!');
    }
}
