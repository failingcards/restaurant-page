function createAboutPage() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "About Us";

    const story = document.createElement("p");
    story.textContent = "Bella Vista Restaurant has been serving authentic Italian cuisine since 1985. Founded by the Rossi family, we bring traditional recipes passed down through generations to create an unforgettable dining experience.";

    const hours = document.createElement("div");
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
        <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
        <p>Sunday: 4:00 PM - 9:00 PM</p>
    `;

    const contact = document.createElement("div");
    contact.innerHTML = `
        <h2>Contact</h2>
        <p>Phone: (555) 123-4567</p>
        <p>Address: 123 Main Street, Downtown</p>
        <p>Email: info@bellavista.com</p>
    `;

    content.appendChild(headline);
    content.appendChild(story);
    content.appendChild(hours);
    content.appendChild(contact);
}

export default createAboutPage;