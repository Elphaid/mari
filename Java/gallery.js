// Initialize gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Track current image and gallery state
    let currentImageIndex = 0;
    let galleryImages = [];

    // Category Filter Functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            
            // Filter gallery items based on category
            galleryItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });

            // Update gallery images array after filtering
            updateGalleryImages();
        });
    });

    // Update gallery images array
    function updateGalleryImages() {
        galleryImages = [];
        
        // Get all visible gallery items
        const visibleItems = Array.from(galleryItems).filter(item => 
            item.style.display !== 'none'
        );

        // Add each visible item to the gallery images array
        visibleItems.forEach(item => {
            galleryImages.push({
                src: item.querySelector('.gallery-img').src,
                title: item.querySelector('.gallery-overlay h4').textContent,
                description: item.querySelector('.gallery-overlay p').textContent
            });
        });
    }

    // Initialize gallery images
    updateGalleryImages();

    // Add click event to all gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const clickedImg = item.querySelector('.gallery-img').src;
            
            // Update gallery images before finding index
            updateGalleryImages();
            
            // Find index of clicked image
            currentImageIndex = galleryImages.findIndex(img => img.src === clickedImg);
            
            // Open modal with the clicked image
            openModal(currentImageIndex);
        });
    });

    // Open modal with specific image
    function openModal(index) {
        modal.style.display = 'block';
        modalImg.src = galleryImages[index].src;
        modalTitle.textContent = galleryImages[index].title;
        modalDesc.textContent = galleryImages[index].description;
        currentImageIndex = index;
        
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navigation buttons for modal
    prevBtn.addEventListener('click', () => {
        if (galleryImages.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImg.src = galleryImages[currentImageIndex].src;
            modalTitle.textContent = galleryImages[currentImageIndex].title;
            modalDesc.textContent = galleryImages[currentImageIndex].description;
        }
    });

    nextBtn.addEventListener('click', () => {
        if (galleryImages.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImg.src = galleryImages[currentImageIndex].src;
            modalTitle.textContent = galleryImages[currentImageIndex].title;
            modalDesc.textContent = galleryImages[currentImageIndex].description;
        }
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (event.key === 'ArrowRight') {
                nextBtn.click();
            } else if (event.key === 'Escape') {
                closeModal.click();
            }
        }
    });
});