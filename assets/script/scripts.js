const addUserBtn = document.querySelector('.add-user ');
const modal = document.querySelector('.backdrop');
const closeModal = document.querySelector('.close');


addUserBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
})


// Data for the chart
var data = {
//   labels: ['Blue', 'green', 'red'],
  datasets: [{
    data: [54, 20, 25,],
    backgroundColor: ['#006AFF', '#52C93F', '#FF2727']
  }]
};

// Options for the chart
var options = {
  cutout: '70%', // Adjust the cutout percentage for the doughnut effect
  responsive: true,
  maintainAspectRatio: false
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById('myDoughnutChart').getContext('2d');

// Create the doughnut chart
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});



window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
