function donateBlood(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        bgroup: document.getElementById('bgroup').value,
        disease: document.querySelector('input[name="disease"]:checked').value,
        address: document.getElementById('address').value,
        birthdate: document.getElementById('birthdate').value,
        timeslot: document.getElementById('timeslot').value
    };

    // Handle the form data as required
    console.log('Donor Information:', formData);

    // You can now send this data to a server or process it further
    alert("Thank you for donating blood!");
}