// footer.js - For handling footer modals

// Get all footer modal elements
const termsModal = document.getElementById('termsModal');
const privacyModal = document.getElementById('privacyModal');
const careersModal = document.getElementById('careersModal');
const partnersModal = document.getElementById('partnersModal');
const newsletterModal = document.getElementById('newsletterModal');

// Get all buttons that open the footer modals
const termsBtn = document.getElementById('termsBtn');
const privacyBtn = document.getElementById('privacyBtn');
const careersBtn = document.getElementById('careersBtn');
const partnersBtn = document.getElementById('partnersBtn');
const newsletterBtn = document.getElementById('newsletterBtn');

// Get all close buttons for footer modals
const closeFooterButtons = document.getElementsByClassName('close-footer-modal');

// Function to open a specific footer modal
function openFooterModal(modal) {
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

// Function to close a specific footer modal
function closeFooterModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Function to close all footer modals
function closeAllFooterModals() {
    const footerModals = [termsModal, privacyModal, careersModal, partnersModal, newsletterModal];
    footerModals.forEach(modal => {
        if (modal) {
            closeFooterModal(modal);
        }
    });
}

// Event listeners for opening footer modals
if (termsBtn) {
    termsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openFooterModal(termsModal);
    });
}

if (privacyBtn) {
    privacyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openFooterModal(privacyModal);
    });
}

if (careersBtn) {
    careersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openFooterModal(careersModal);
    });
}

if (partnersBtn) {
    partnersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openFooterModal(partnersModal);
    });
}

if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openFooterModal(newsletterModal);
    });
}

// Event listeners for close buttons in footer modals
Array.from(closeFooterButtons).forEach(button => {
    button.addEventListener('click', function() {
        closeAllFooterModals();
    });
});

// Close footer modal when clicking outside of it
window.addEventListener('click', function(event) {
    const footerModals = [termsModal, privacyModal, careersModal, partnersModal, newsletterModal];
    footerModals.forEach(modal => {
        if (modal && event.target === modal) {
            closeFooterModal(modal);
        }
    });
});

// Close footer modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Check if any footer modal is open before closing
        const footerModals = [termsModal, privacyModal, careersModal, partnersModal, newsletterModal];
        const isFooterModalOpen = footerModals.some(modal => modal && modal.style.display === 'block');
        
        if (isFooterModalOpen) {
            closeAllFooterModals();
        }
    }
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Here you would typically send the data to your server
        // For demonstration, just show a success message
        
        newsletterForm.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for subscribing!</h3>
                <p>Hello ${name}, you have been successfully subscribed to our newsletter.</p>
            </div>
        `;
        
        // Close modal after 3 seconds
        setTimeout(function() {
            closeFooterModal(newsletterModal);
            
            // Reset form after closing
            setTimeout(function() {
                newsletterForm.reset();
            }, 500);
        }, 3000);
    });
}

// Dropdown menu functionality
const dropdownItems = document.querySelectorAll('.dropdown');
dropdownItems.forEach(item => {
    if (item) {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Toggle active class
                item.classList.toggle('active');
            });
        }
    }
});