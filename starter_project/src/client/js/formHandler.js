// // Replace checkForName with a function that checks the URL
// import { checkForName } from './nameChecker'

// // If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// // const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
// const serverURL = 'https://localhost:8000/api'

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     // Get the URL from the input field
//     const formText = document.getElementById('name').value;

//     // This is an example code that checks the submitted name. You may remove it from your code
//     checkForName(formText);
    
//     // Check if the URL is valid
 
//         // If the URL is valid, send it to the server using the serverURL constant above
      
// }

// // Function to send data to the server

// // Export the handleSubmit function
// export { handleSubmit };

import { validateUrl } from './nameChecker';

const serverURL = 'https://localhost:8000/api';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Validate the URL
    if (validateUrl(formText)) {
        console.log("::: Form Submitted :::", formText);
        
        // Send the valid URL to the server
        postData(serverURL, { url: formText })
            .then((data) => {
                // Update the UI with the response from the server
                document.getElementById('results').innerHTML = `
                    Polarity: ${data.polarity} <br>
                    Subjectivity: ${data.subjectivity} <br>
                    Text: ${data.text}
                `;
            });
    } else {
        alert("Please enter a valid URL.");
    }
}

// Function to send data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Export the handleSubmit function
export { handleSubmit };
