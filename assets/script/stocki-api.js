
  function registerUser() {

    // Getting all the objects from HTML
    const form = document.getElementById('signupForm');
    const companyName = form.elements.companyName.value;
    const category = form.elements.category.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    const password = form.elements.password.value;

    const apiUrl = 'https://bg-group2-backend.onrender.com/v1/auth/register';

    // Prepare the request payload
    const payload = {
        companyName: companyName,
        category: category,
        email: email,
        phone: phone,
        firstname: firstname,
        lastname: lastname,
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

      // If signup is successful, display the modal
      if (data.success) {
        openModal();
      }
    })
    .catch(error => {
      // Handle errors here
      console.error('Error:', error);
    });
  }

  // ... (Include the modal code from the previous example)

  // Function to display the modal
  function openModal() {
    var modal = document.getElementById('signupModal');
    modal.style.display = 'block';
  }
