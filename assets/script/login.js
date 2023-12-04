// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"; // Correct import for auth module

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
const analytics = getAnalytics(app);
const auth = getAuth();

// Getting all the objects from HTML
const email = document.getElementById("email");
const password = document.getElementById("password");

window.login = function (e) {
	e.preventDefault();

	const obj = {
		email: email.value,
		password: password.value,
	};

	signInWithEmailAndPassword(auth, obj.email, obj.password)
		.then(function (success) {
			console.log(user.uid);
			alert("login successful");
		})
		.catch(function (err) {
			window.location.replace("index.html");
			alert("login error: " + err.message);
		});
	console.log(obj);
};
