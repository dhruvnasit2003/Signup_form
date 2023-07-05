function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var agreement = document.getElementById("agreement").checked;

    // Validate Full Name (accept string)
    if (fullName.trim() === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate Username (alphanumeric)
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(username)) {
        alert("Username must contain only alphanumeric characters.");
        return false;
    }

    // Verify entered and confirmed password
    if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return false;
    }

    // Validate Password (alphanumeric with special symbol, length 6-10)
    var passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,10}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be alphanumeric with at least one special symbol (@, $, !, %, *, ?, or &), and the length should be between 6 and 10 characters.");
        return false;
    }

    // Validate Phone Number (10-digit only)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be a 10-digit number.");
        return false;
    }

    // Validate Email (validate format)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate State (at least one option selected)
    if (state === "") {
        alert("Please select your state.");
        return false;
    }

    // Validate Agreement Checkbox (must be selected)
    if (!agreement) {
        alert("You must agree to the terms and conditions.");
        return false;
    }

    // All validations passed, can proceed with registration
    alert("Registration successful!");
    return true;
}
