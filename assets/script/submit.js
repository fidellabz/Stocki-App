document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        if (validateForm()) {
            // If the form is valid, you can submit it or perform further actions
            alert('Form is valid. Submitting...');
            
        }
    });

    function validateForm() {
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let description = document.getElementById('description').value;
        let planType = document.getElementById('planType').value;
        let priority = document.getElementById('priority').value;
        let attachments = document.getElementById('attachments').value;

        if (email.trim() === '' || subject.trim() === '' || description.trim() === '' || planType.trim() === '' || priority.trim() === '' || attachments.trim() === '') {
            alert('Please fill in all the required fields.');
            return false;
        }


        return true;
    }
});