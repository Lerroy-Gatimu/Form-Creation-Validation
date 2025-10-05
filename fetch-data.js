// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data');   // Container for displaying data

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold user names
        const userList = document.createElement('ul');

        // Loop through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors by displaying a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
