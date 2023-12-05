// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"; // Correct import for auth module

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDMcgbc1kV7Vzp56LHLUYMcZVKAkJ-oDhA",
	authDomain: "stocki-7e263.firebaseapp.com",
	projectId: "stocki-7e263",
	storageBucket: "stocki-7e263.appspot.com",
	messagingSenderId: "692676319030",
	appId: "1:692676319030:web:df00ea8fb13a161f894597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Getting all the objects from HTML
const companyName = document.getElementById("companyName");
const catergory = document.getElementById("catergory");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");

// Making a function to store data
window.signup = function (e) {
	e.preventDefault();

	let obj = {
		companyName: companyName.value,
		// catergory: catergory.value,
		email: email.value,
		phone: phone.value,
		firstname: firstname.value,
		lastname: lastname.value,
		password: password.value,
	};
	createUserWithEmailAndPassword(auth, obj.email, obj.password)
		.then(function (success) {
			window.location.replace("login.html");
			alert("Signup successful");
		})
		.catch(function (err) {
			alert("Error: " + err.message);
		});

	console.log(obj);
};


function toggleColor(activeClass) {
	const monthElement = document.querySelector(".month");
	const yearElement = document.querySelector(".year");
	const checkbox = document.getElementById("flexSwitchCheckChecked");

	if (checkbox.checked) {
		monthElement.classList.remove("active");
		yearElement.classList.add("active");
	} else {
		yearElement.classList.remove("active");
		monthElement.classList.add("active");
	}
}


