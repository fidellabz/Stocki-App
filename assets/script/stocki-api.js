
 

// SignUp Script
  function registerUser() {
    const form = document.getElementById('signupForm');
    const companyName = form.elements.companyName.value;
    const companyCategory = form.elements.category.value;
    const companyEmail = form.elements.email.value;
    const companyNumber = form.elements.companyNumber.value;
    const firstName = form.elements.firstname.value;
    const lastName = form.elements.lastname.value;
    const password = form.elements.password.value;
    const password2 = form.elements.password2.value;

    const loadingSpinner = document.getElementById('loadingSpinner');
    const signupButton = document.getElementById('signupButton');

    if (companyName && companyCategory && companyEmail && companyNumber && firstName && lastName && password && password2) {
      // Show loading spinner
      loadingSpinner.classList.remove('d-none');
      signupButton.setAttribute('disabled', 'true');

      const apiUrl = 'https://bg-group2-backend.onrender.com/v1/auth/register';

      // Prepare the request payload
      const payload = {
        companyName: companyName,
        companyCategory: companyCategory,
        companyEmail: companyEmail,
        companyNumber: companyNumber,
        firstName: firstName,
        lastName: lastName,
        password: password,
        password2: password2
      };

      // Make a POST request to the API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the API response here
        console.log(data);

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');
        signupButton.removeAttribute('disabled');

       // If signup is successful, display the modal
if (data.newUser._id) {

  openModal('signupModal');
} else {
  // Display error modal
  openModal('errorModal');
}

      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');
        signupButton.removeAttribute('disabled');

        // Display error modal
        openModal('errorModal');
      });
    }
  }


// Function to close the modal
function closeModal(modalId) {
  $('#' + modalId).modal('hide');
}

// Function to open modal
function openModal(modalId) {
  $('#' + modalId).modal('show');
}


// Login function

function loginUser() {
  const form = document.getElementById('loginForm');
  const companyEmail = form.elements.companyEmail.value;
  const password = form.elements.password.value;

  const loadingSpinner = document.getElementById('loadingSpinner');
  const loginButton = document.getElementById('loginButton');

  // Check if both companyEmail and password are provided
  if (!companyEmail || !password) {
    // Display an error message (you can customize this part)
    alert('Please enter both company email and password');
    return; // Stop further execution
  }

  else if (companyEmail && password) {
    // Show loading spinner
    loadingSpinner.classList.remove('d-none');
    loginButton.setAttribute('disabled', 'true');

    const apiUrl = 'https://bg-group2-backend.onrender.com/v1/auth/login';

    // Prepare the request payload
    const payload = {
      companyEmail: companyEmail,
      password: password
    };

    // Make a POST request to the API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response here
        console.log(data);

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');
        loginButton.removeAttribute('disabled');

        // If login is successful, store the token and fetch user information
        if (data.token) {
          // Store the token securely (e.g., in local storage)
          localStorage.setItem('token', data.token);
          openModal('loginModal')

          // Fetch user information using the stored token
          fetchUserInfo(data.token);
          
        } else {
          // Display error modal
          openModal('errorModal');
        }
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');
        loginButton.removeAttribute('disabled');

        // Display error modal
        openModal('errorModal');
      });
  }
}


// Function to fetch user information using the token
function fetchUserInfo(token) {
  // Make a request to a protected endpoint on the backend
  fetch('https://bg-group2-backend.onrender.com/v1/auth/company-info', {
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

  const firstName = userInfo.userInfo.firstName;
  const companyName = userInfo.userInfo.companyName;
  const lastName = userInfo.userInfo.lastName;

  // Log the values to the console for debugging
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Company Email:', companyName);


  // Find the HTML element by its ID and update its content
  const userNameElement = document.getElementById('userName');
  const companyNameElement = document.getElementById('companyName');


  if (userNameElement && companyNameElement) {
      userNameElement.innerHTML = `${firstName} ${lastName}<br> Admin`;
      companyNameElement.innerHTML = `${companyName}`;
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


function getItemsWithToken() {
  const apiUrl = "https://bg-group2-backend.onrender.com/v1/products"; // Replace with your actual API endpoint
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  if (!token) {
    // Handle the case where the token is not available
    console.error('Token not available');
    return;
  }

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      // Handle the retrieved data and update the table
      updateTableWithData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// function updateTableWithData(data) {
//   const tableBody = document.querySelector('#dataTable tbody');
//   tableBody.innerHTML = '';

//   const items = data.getAllProducts.docs;

//   items.forEach(item => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>
//         <div class="d-flex align-items-center">
//           <div class="rounded-circle mr-3">
//             <img src="./assets/img/tb-Image.png" alt="" srcset="">
//           </div>
//           <div>
//             <p class="mb-0">${item.productDetails}</p>
//             <p class="mb-0">${item.category}</p>
//           </div>
//         </div>
//       </td>
//       <td>${item.category}</td>
//       <td>${item.price}</td>
//       <td>${item.stock}</td>
//       <td>${item.sold}</td>
//       <td>${item.sku}</td>
//       <td>${item.status}</td>
//       <td class="text-center">
//         <!-- Your action dropdown rendering logic here -->
//       </td>
//     `;

//     tableBody.appendChild(row);
//   });
// }

function updateTableWithData(data) {
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';

  const items = data.getAllProducts.docs;

  // Sort items by the "createdAt" property in ascending order
  const sortedItems = items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  sortedItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <div class="rounded-circle mr-3">
            <img src="./assets/img/tb-Image.png" alt="" srcset="">
          </div>
          <div>
            <p class="mb-0">${item.productDetails}</p>
            <p class="mb-0">${item.category}</p>
          </div>
        </div>
      </td>
      <td>${item.category}</td>
      <td>${item.price}</td>
      <td>${item.stock}</td>
      <td>${item.sold}</td>
      <td>${item.sku}</td>
      <td>${item.status}</td>
      <td class="text-center">
      <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="actionDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-ellipsis-h"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="actionDropdown2">
          <a class="dropdown-item" href="#">Edit</a>
          <a class="dropdown-item" href="#">Export</a>
          <a class="dropdown-item" href="#">Delete</a>
      </div>
  </div
      </td>
    `;

    tableBody.appendChild(row);
  });
}


getItemsWithToken()