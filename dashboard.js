
document.addEventListener("DOMContentLoaded", () => {

    // Check Login Status
    const isLoggedIn = localStorage.getItem("promptvault_loggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
        return;
    }

    // Get User Information
    const currentUser = localStorage.getItem("promptvault_currentUser") || "User";

    const users = JSON.parse(
        localStorage.getItem("promptvault_users")
    ) || [];

    const matchedUser = users.find(user => user.name === currentUser);

    // Display User Information
    document.getElementById("userName").textContent = currentUser;
    document.getElementById("accountName").textContent = currentUser;

    document.getElementById("accountEmail").textContent =
        matchedUser ? matchedUser.email : "Not available";

    // Get Favourite Prompts
    const favourites = JSON.parse(
        localStorage.getItem("promptvault_favorites")
    ) || [];

    document.getElementById("favouriteCount").textContent =
        favourites.length;

    // Logout Functionality
    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("promptvault_loggedIn");
        localStorage.removeItem("promptvault_currentUser");

        window.location.href = "login.html";

    });

});
