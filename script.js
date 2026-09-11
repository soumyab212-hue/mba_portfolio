function toggleExpand(element) {
    const modalContent = document.getElementById('modal-content');
    const modal = document.getElementById('expanded-modal');
    const overlay = document.getElementById('overlay');
    
    // Get the hidden content from the clicked tile
    const backContent = element.querySelector('.tile-back').innerHTML;
    
    // Inject it into the modal
    modalContent.innerHTML = backContent;
    
    // Show modal and overlay
    overlay.classList.add('active');
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeAllTiles() {
    const modal = document.getElementById('expanded-modal');
    const overlay = document.getElementById('overlay');
    
    overlay.classList.remove('active');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllTiles();
    }
});
