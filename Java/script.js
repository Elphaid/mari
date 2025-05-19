// Responsive Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu button and navigation
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    // Toggle navigation when hamburger is clicked
    hamburgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || hamburgerBtn.contains(event.target);
        
        if (!isClickInside && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
    
    // Handle window resize to reset menu state
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});

// Service details data
const serviceDetails = {
    "ecitizen": {
        title: "eCitizen Services",
        content: `
            <div class="service-details">
                <h3>What We Offer:</h3>
                <ul>
                    <li>eCitizen registration and account setup</li>
                    <li>ID card application and renewals</li>
                    <li>Passport application assistance</li>
                    <li>Driving license renewals</li>
                    <li>Business registration services</li>
                    <li>KRA PIN registration</li>
                    <li>NHIF registration and payments</li>
                    <li>NSSF registration and payments</li>
                    <li>Good Conduct Certificate application</li>
                    <li>Land search and rates payment</li>
                </ul>
                <p class="service-note">Our experienced staff will guide you through the entire process, ensuring all your documents are properly filled and submitted.</p>
                <div class="contact-info">
                    <p>For inquiries, please contact us at: <span>info@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "receipt": {
        title: "Receipt Books",
        content: `
            <div class="service-details">
                <h3>Custom Receipt Books:</h3>
                <ul>
                    <li>2-ply and 3-ply carbonless receipt books</li>
                    <li>Custom sized receipt books</li>
                    <li>Sequential numbering</li>
                    <li>Company logo and details printing</li>
                    <li>Perforated receipt books</li>
                    <li>Various binding options</li>
                    <li>Quick turnaround time</li>
                    <li>Bulk order discounts available</li>
                </ul>
                <p class="service-note">All our receipt books are made with high-quality paper to ensure clear copies and long-lasting durability.</p>
                <div class="contact-info">
                    <p>For orders and pricing, please contact us at: <span>orders@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "tshirt": {
        title: "T-shirt & Jersey Printing",
        content: `
            <div class="service-details">
                <h3>Custom Apparel Printing:</h3>
                <ul>
                    <li>T-shirt printing (all sizes)</li>
                    <li>Sports jersey customization</li>
                    <li>Team uniforms with names and numbers</li>
                    <li>Corporate branded apparel</li>
                    <li>School uniforms and event t-shirts</li>
                    <li>Heat transfer printing</li>
                    <li>Screen printing for bulk orders</li>
                    <li>High-quality fabric and printing materials</li>
                </ul>
                <p class="service-note">We use premium quality inks that don't fade easily with washing, ensuring your designs stay vibrant longer.</p>
                <div class="contact-info">
                    <p>For custom t-shirt orders, please contact us at: <span>apparel@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "stickers": {
        title: "Stickers & Banners",
        content: `
            <div class="service-details">
                <h3>Our Products Include:</h3>
                <ul>
                    <li>Vinyl stickers (various sizes)</li>
                    <li>Window decals and car stickers</li>
                    <li>Product labels and packaging stickers</li>
                    <li>PVC banners (indoor and outdoor)</li>
                    <li>Mesh banners for windy locations</li>
                    <li>Roll-up banners for exhibitions</li>
                    <li>X-stand banners for promotions</li>
                    <li>Custom sizes and finishings available</li>
                </ul>
                <p class="service-note">Our stickers and banners are weather-resistant and made to withstand outdoor conditions without fading or peeling.</p>
                <div class="contact-info">
                    <p>For inquiries and quotes, please contact us at: <span>printing@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "design": {
        title: "Graphic Design",
        content: `
            <div class="service-details">
                <h3>Professional Design Services:</h3>
                <ul>
                    <li>Logo design and brand identity</li>
                    <li>Business card and stationery design</li>
                    <li>Flyer and poster design</li>
                    <li>Social media graphics</li>
                    <li>Banner and billboard design</li>
                    <li>Packaging design</li>
                    <li>Photo editing and enhancement</li>
                    <li>Illustration and custom artwork</li>
                </ul>
                <p class="service-note">Our professional designers work with you to create unique and eye-catching designs that represent your brand perfectly.</p>
                <div class="contact-info">
                    <p>For design consultation, please contact us at: <span>design@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "windows": {
        title: "Windows Activation & Software Installation",
        content: `
            <div class="service-details">
                <h3>Computer Services:</h3>
                <ul>
                    <li>Windows activation (All versions)</li>
                    <li>Microsoft Office installation and activation</li>
                    <li>Antivirus software installation</li>
                    <li>Graphic design software installation</li>
                    <li>Accounting software setup</li>
                    <li>System updates and maintenance</li>
                    <li>Driver installation and updates</li>
                    <li>Basic troubleshooting services</li>
                </ul>
                <p class="service-note">We provide genuine software solutions for your personal and business computing needs with after-service support.</p>
                <div class="contact-info">
                    <p>For computer services, please contact us at: <span>tech@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "business-cards": {
        title: "Business Cards",
        content: `
            <div class="service-details">
                <h3>Professional Business Cards:</h3>
                <ul>
                    <li>Standard and custom-sized business cards</li>
                    <li>Premium card stocks (300gsm - 400gsm)</li>
                    <li>Matte and glossy finishes</li>
                    <li>Spot UV and embossed options</li>
                    <li>Double-sided printing</li>
                    <li>Rounded corners option</li>
                    <li>Quick turnaround (same-day available)</li>
                    <li>Bulk order discounts</li>
                </ul>
                <p class="service-note">Make a lasting impression with our high-quality business cards designed to showcase your professional identity.</p>
                <div class="contact-info">
                    <p>For business card orders, please contact us at: <span>cards@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "typing": {
        title: "Typing Services",
        content: `
            <div class="service-details">
                <h3>Document Services:</h3>
                <ul>
                    <li>CV/Resume typing and formatting</li>
                    <li>Academic papers and reports</li>
                    <li>Business letters and proposals</li>
                    <li>Legal documents preparation</li>
                    <li>Form filling assistance</li>
                    <li>Document editing and proofreading</li>
                    <li>Document scanning to editable formats</li>
                    <li>Document conversion between formats</li>
                </ul>
                <p class="service-note">Our typing services are accurate and efficient, with quick turnaround times to meet your deadlines.</p>
                <div class="contact-info">
                    <p>For typing services, please contact us at: <span>documents@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    },
    "binding": {
        title: "Binding & More",
        content: `
            <div class="service-details">
                <h3>Additional Services:</h3>
                <ul>
                    <li>Spiral binding for reports and presentations</li>
                    <li>Hardcover binding for theses and important documents</li>
                    <li>Lamination services (all sizes)</li>
                    <li>Color and black & white photocopying</li>
                    <li>Document scanning and digitization</li>
                    <li>Certificate printing and framing</li>
                    <li>Brochure and catalog printing</li>
                    <li>Invitation card printing</li>
                </ul>
                <p class="service-note">We provide comprehensive document finishing services to give your work a professional look and feel.</p>
                <div class="contact-info">
                    <p>For binding and finishing services, please contact us at: <span>finishing@digiprint.com</span> or call <span>+254 700 123 456</span></p>
                </div>
            </div>
        `
    }
};

// Get DOM elements
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementsByClassName('close-button')[0];
const learnMoreButtons = document.querySelectorAll('.learn-more');

// Function to open modal with specific service details
function openModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        modalTitle.textContent = service.title;
        modalContent.innerHTML = service.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listeners
learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceId = this.getAttribute('data-service');
        openModal(serviceId);
    });
});

closeButton.addEventListener('click', closeModal);

// Close modal if clicked outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});