
document.addEventListener("DOMContentLoaded", () => {

    // Signup Elements
    const signupForm = document.getElementById("signupForm");

    // Login Elements
    const loginForm = document.getElementById("loginForm");

    // Get Saved Users
    function getUsers() {
        return JSON.parse(localStorage.getItem("promptvault_users")) || [];
    }

    // Signup Functionality
    if (signupForm) {

        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim().toLowerCase();
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const message = document.getElementById("signupMessage");

            if (password !== confirmPassword) {
                message.textContent = "Passwords do not match!";
                return;
            }

            const users = getUsers();

            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                message.textContent = "This email is already registered!";
                return;
            }

            users.push({
                name: name,
                email: email,
                password: password
            });

            localStorage.setItem("promptvault_users", JSON.stringify(users));

            message.textContent = "Account created successfully! Redirecting to Login...";

            signupForm.reset();

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);

        });

    }

    // Login Functionality
    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;
            const message = document.getElementById("loginMessage");

            const users = getUsers();

            const matchedUser = users.find(user =>
                user.email === email && user.password === password
            );

            if (matchedUser) {

                localStorage.setItem("promptvault_loggedIn", "true");
                localStorage.setItem("promptvault_currentUser", matchedUser.name);

                message.textContent = "Login successful! Redirecting...";

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000);

            } else {

                message.textContent = "Invalid email or password!";

            }

        });

    }

});
