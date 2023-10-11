function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneno = document.getElementById("phoneno").value;

    // Validate the mobile number with 9 digits
    if (!/^\d{9}$/.test(phoneno)) {
        alert("Please enter a valid 9-digit phone number.");
        return false;
    }

    // Other validation rules can be added for name, email, and other fields if needed

    // Display receipt
    displayReceipt(name, email);

    return false;
}

function displayReceipt(name, email) {
    document.getElementById("receipt-name").textContent = name;
    document.getElementById("receipt-email").textContent = email;
    document.getElementById("receipt-tagline").textContent = document.getElementById("tagline").value;
    document.getElementById("receipt-phoneno").textContent = document.getElementById("phoneno").value;
    document.getElementById("receipt-colour").textContent = document.getElementById("colour").value;
    const sizeRadios = document.getElementsByName("size");
    for (const radio of sizeRadios) {
        if (radio.checked) {
            document.getElementById("receipt-size").textContent = radio.value;
            break;
        }
    }
    document.getElementById("receipt-address").textContent = document.getElementById("address").value;
    document.getElementById("receipt-delivery-date").textContent = document.getElementById("delivery-date").value;

    // Hide the form
    document.getElementById("tshirt-form").style.display = "none";

    // Display the receipt
    document.getElementById("receipt").style.display = "block";
}
