function handleSubmit() {
    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const expirationMM = document.getElementById("expiration-mm").value;
    const expirationYY = document.getElementById("expiration-yy").value;
    const cvc = document.getElementById("cvc").value;

    if (cardNumber && cardHolder && expirationMM && expirationYY && cvc) {
        alert("Payment submitted!");
        return true; // Allow form submission
    } else {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }
}
