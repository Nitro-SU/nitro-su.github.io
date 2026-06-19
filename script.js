// Select all trigger buttons, modals, and close buttons
const triggers = document.querySelectorAll('.modal-trigger');
const closeBtns = document.querySelectorAll('.close-btn');

// 1. Open corresponding modal when a trigger is clicked
triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Find the ID of the modal we want to open
        const targetId = trigger.getAttribute('data-target');
        const targetModal = document.getElementById(targetId);
        
        if (targetModal) {
            targetModal.classList.add('active');
        }
    });
});

// 2. Close modal when clicking the 'X' button
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Find the parent modal overlay and close it
        btn.closest('.modal-overlay').classList.remove('active');
    });
});

// 3. Close modal when clicking on the dark background
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});