// dashboard.js

// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` elements with the ids of `datetime1` and `datetime2`
    document.querySelectorAll('#datetime1, #datetime2').forEach(element => {
        element.textContent = currentDateTime;
    });
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

//*****************************************************************************//

// Function to fetch user information using the token
function fetchUserInfo(token) {
    // Make a request to a protected endpoint on the backend
    fetch('https://bg-group2-backend.onrender.com/v1/user-info', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
    })
    .then(response => response.json())
    .then(userInfo => {
      // Update the UI with user information
      displayUserInfo(userInfo);
  
    })
    .catch(error => {
      // Handle errors gracefully, e.g., redirect to login page
      console.error('Error fetching user information:', error);
    });
  }
  
  // Function to display user information on the dashboard
  function displayUserInfo(userInfo) {
    // Update your frontend dashboard UI with user information
    console.log('User Information:', userInfo);
  
    const firstName = userInfo.firstName;
    const companyEmail = userInfo.companyEmail;
  
    // Find the HTML element by its ID and update its content
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
      userNameElement.innerHTML = `${firstName} + ${companyEmail}`;
    }
  }
  
  // Call fetchUserInfo when the dashboard page loads (you can use window.onload or another event)
  window.onload = function () {
    // Retrieve the token from wherever it is stored (localStorage in this case)
    const token = localStorage.getItem('token');
  
    // If token exists, fetch user information
    if (token) {
      fetchUserInfo(token);
    } else {
      // Handle the case when the token is not available (user not logged in)
      console.error('Token not found. User not logged in.');
    }
  };
  