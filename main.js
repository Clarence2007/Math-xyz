import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5-K97Y_peEhM0J2YXHBiAvEpXoGnJKPE",
    authDomain: "math-xyz.firebaseapp.com",
    projectId: "math-xyz",
    storageBucket: "math-xyz.firebasestorage.app",
    messagingSenderId: "275322658892",
    appId: "1:275322658892:web:94ceec7c2adb9b340514e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login with Google
document.getElementById("google-login-btn")?.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User logged in:", result.user);
            window.location.href = "logged.html";
        })
        .catch((error) => {
            console.error("Login failed:", error.message);
            alert("Failed to sign in. Please try again.");
        });
});

// Register with Google
document.getElementById("google-register-btn")?.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User registered:", result.user);
            window.location.href = "logged.html";
        })
        .catch((error) => {
            console.error("Registration failed:", error.message);
            alert("Failed to register. Please try again.");
        });
});
