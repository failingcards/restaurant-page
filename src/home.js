function createHomePage() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Bella Vista Restaurant";

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";
    image.alt = "Restaurant Interior";
    image.style.width = "100%";
    image.style.maxWidth = "600px";
    image.style.height = "300px";
    image.style.objectFit = "cover";

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Experience the finest Italian cuisine in the heart of the city. Our chefs use only the freshest ingredients to create authentic dishes that will transport you straight to Italy.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Join us for an unforgettable dining experience where tradition meets innovation.";

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
}

export default createHomePage;