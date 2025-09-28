function createMenuPage() {
    const content = document.getElementById("content");
    
    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const appetizers = document.createElement("div");
    appetizers.innerHTML = `
        <h2>Appetizers</h2>
        <p><strong>Bruschetta</strong> - Fresh tomatoes, basil, and garlic on toasted bread - $8</p>
        <p><strong>Calamari Fritti</strong> - Crispy fried squid with marinara sauce - $12</p>
        <p><strong>Antipasto Platter</strong> - Selection of cured meats, cheeses, and olives - $15</p>
    `;

    const main = document.createElement("div");
    main.innerHTML = `
        <p><strong>Spaghetti Carbonara</strong> - Classic pasta with eggs, cheese, and pancetta - $18</p>
        <p><strong>Chicken Parmigiana</strong> - Breaded chicken with marinara and mozzarella - $22</p>
        <p><strong>Risotto ai Funghi</strong> - Creamy mushroom risotto with truffle oil - $20</p>
    `;

    const desserts = document.createElement("div");
    desserts.innerHTML = `
        <h2>Desserts</h2>
        <p><strong>Tiramisu</strong> - Classic Italian coffee-flavored dessert - $8</p>
        <p><strong>Gelato</strong> - Choose from vanilla, chocolate, or pistachio - $6</p>
    `;

    content.appendChild(headline);
    content.appendChild(appetizers);
    content.appendChild(main);
    content.appendChild(desserts);
}

export default createMenuPage;