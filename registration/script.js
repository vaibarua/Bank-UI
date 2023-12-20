function validateFrom() {
    var name = document.getElementById("name").value;
    var phoneNo = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if(name.trim()=== "" || phoneNo.trim() === "" || address.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("All fields must be filled.");
        return false;
    }
    if(!(/^\d{10}$/.test(phoneNo))) {
        console.log("Phone number not 10 digits.");
        alert("Phone number must be 10 digits long.");
        return false;
    }

    if(!isStrongPassword(password)) {
        alert("Password not strong. \nMust contain an Uppercase Letter, a Special Character, and a Digit.")
    }

    if(password!=confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
}

function isStrongPassword(password) {
    var hasUppercase = /[A-Z]/.test(password);

    var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    var hasDigit = /\d/.test(password);

    var hasNoConsecutiveChars = /^(?!.*(.)\1)/.test(password);

    return hasUppercase && hasSpecialChar && hasDigit && hasNoConsecutiveChars;
}

// var password = "Abc@123";
// console.log(isStrongPassword(password)); 
