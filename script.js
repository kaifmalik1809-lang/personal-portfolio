emailjs.init({
    publicKey: "mSmQA-CrEgMY4zvC1"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_8jc5mic",
        "template_gk2qsxd",
        this
    )
    .then(function() {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch(function(error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
    });
});