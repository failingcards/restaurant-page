function createMenuPage() {
    const content = document.getElementById("content");
    
    content.className = "page-transition";

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const appetizers = document.createElement("div");
    appetizers.className = "menu-section";
    appetizers.innerHTML = `
        <h2>Appetizers</h2>
        <div class="menu-item">
            <p><strong>Bruschetta</strong> - Fresh tomatoes, basil, and garlic on toasted bread - $8</p>
        </div>
        <div class="menu-item">
            <p><strong>Calamari Fritti</strong> - Crispy fried squid with marinara sauce - $12</p>
        </div>
        <div class="menu-item">
            <p><strong>Antipasto Platter</strong> - Selection of cured meats, cheeses, and olives - $15</p>
        </div>
    `;

    const mains = document.createElement("div");
    mains.className = "menu-section";
    mains.innerHTML = `
        <h2>Main Courses</h2>
        <div class="menu-item">
            <p><strong>Spaghetti Carbonara</strong> - Classic pasta with eggs, cheese, and pancetta - $18</p>
        </div>
        <div class="menu-item">
            <p><strong>Chicken Parmigiana</strong> - Breaded chicken with marinara and mozzarella - $22</p>
        </div>
        <div class="menu-item">
            <p><strong>Risotto ai Funghi</strong> - Creamy mushroom risotto with truffle oil - $20</p>
        </div>
    `;

    const desserts = document.createElement("div");
    desserts.className = "menu-section";
    desserts.innerHTML = `
        <h2>Desserts</h2>
        <div class="menu-item">
            <p><strong>Tiramisu</strong> - Classic Italian coffee-flavored dessert - $8</p>
        </div>
        <div class="menu-item">
            <p><strong>Gelato</strong> - Choose from vanilla, chocolate, or pistachio - $6</p>
        </div>
    `;

    content.appendChild(headline);
    content.appendChild(appetizers);
    content.appendChild(mains);
    content.appendChild(desserts);
}

export default createMenuPage;