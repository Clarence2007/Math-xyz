import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

// Update User Profile
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userName").textContent = user.displayName || "User";
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("userProfilePicture").src = user.photoURL || "default-profile.png";
    } else {
        // Redirect if no user is logged in
        window.location.href = "index.html";
    }
});

// Logout Functionality
document.getElementById("logout-btn")?.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully.");
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Logout failed:", error.message);
    });
});
