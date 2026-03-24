// Sample services (default data)
let services = [
    {
        name: "आधार कार्ड",
        price: 50,
        desc: "आधार कार्ड बनवाएं या update करवाएं"
    },
    {
        name: "पैन कार्ड",
        price: 100,
        desc: "नया पैन कार्ड या duplicate"
    },
    {
        name: "वोटर आईडी",
        price: 75,
        desc: "वोटर कार्ड बनवाएं"
    }
];

// Load services on page load
document.addEventListener('DOMContentLoaded', function() {
    loadServices();
    setupForm();
    scrollToServices();
});

// Scroll to services
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Load services in UI
function loadServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    services.forEach((service, index) => {
        const card = createServiceCard(service, index);
        container.appendChild(card);
    });
}

// Create service card
function createServiceCard(service, index) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <h3 class="service-name">${service.name}</h3>
        <div class="service-price">₹${service.price}</div>
        ${service.desc ? `<p class="service-desc">${service.desc}</p>` : ''}
        <button onclick="deleteService(${index})" style="background:#ff6b6b;margin-top:1rem;">Delete</button>
    `;
    return card;
}

// Setup add service form
function setupForm() {
    const form = document.getElementById('service-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('service-name').value;
        const price = parseInt(document.getElementById('service-price').value);
        const desc = document.getElementById('service-desc').value;

        // Add new service
        services.push({
            name: name,
            price: price,
            desc: desc || ''
        });

        // Reload services
        loadServices();
        
        // Reset form
        form.reset();
        
        alert('✅ Service successfully add हो गई!');
    });
}

// Delete service
function deleteService(index) {
    if (confirm('क्या आप यह service delete करना चाहते हैं?')) {
        services.splice(index, 1);
        loadServices();
        alert('❌ Service delete हो गई!');
    }
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});