function createAboutPage() {
    const content = document.getElementById("content");
    
    content.className = "page-transition";

    const headline = document.createElement("h1");
    headline.textContent = "About Us";

    const story = document.createElement("p");
    story.textContent = "Bella Vista Restaurant has been serving authentic Italian cuisine since 1985. Founded by the Rossi family, we bring traditional recipes passed down through generations to create an unforgettable dining experience.";
    story.style.fontSize = "1.2em";
    story.style.textAlign = "center";
    story.style.margin = "30px 0";

    const hours = document.createElement("div");
    hours.className = "hours-info";
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
        <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
        <p>Sunday: 4:00 PM - 9:00 PM</p>
    `;

    const contact = document.createElement("div");
    contact.className = "contact-info";
    contact.innerHTML = `
        <h2>Contact</h2>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, Downtown</p>
        <p><strong>Email:</strong> info@bellavista.com</p>
    `;

    content.appendChild(headline);
    content.appendChild(story);
    content.appendChild(hours);
    content.appendChild(contact);
}

export default createAboutPage;