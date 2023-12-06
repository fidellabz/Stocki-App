// Login Script
// Function to close the modal
function closeModal(modalId) {
  $('#' + modalId).modal('hide');
}

// Function to open modal
function openModal(modalId) {
  $('#' + modalId).modal('show');
}


function loginUser() {
  const form = document.getElementById('loginForm');
  const companyName = form.elements.companyName.value;
  const password = form.elements.password.value;

  const loadingSpinner = document.getElementById('loadingSpinner');
  const loginButton = document.getElementById('loginButton');

  if (companyName && password) {
    // Show loading spinner
    loadingSpinner.classList.remove('d-none');
    loginButton.setAttribute('disabled', 'true');

    const apiUrl = 'https://bg-group2-backend.onrender.com/v1/auth/login';

    // Prepare the request payload
    const payload = {
      companyName: companyName,
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

        // If signup is successful, display the modal
        if (data.token) {
          // alert("Login Successful!");
          openModal('loginModal');
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
  alert("Signup successful");
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