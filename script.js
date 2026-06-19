// ==========================================
// UPCOMING EVENTS
// ==========================================
// List of events I'm attending, with the option to style them as "primary" or "secondary" for color coding.

const upcomingEvents = [
    { name: "SusseFurs BBQ - TBC July 2026", style: "secondary" },
    { name: "LFM Summer Party - July 2026", style: "primary" },
];


// ==========================================
// DYNAMIC MODAL ENGINE
// ==========================================
const triggers = document.querySelectorAll('.modal-trigger');
const closeBtns = document.querySelectorAll('.close-btn');

// 1. Open corresponding modal
triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = trigger.getAttribute('data-target');
        const targetModal = document.getElementById(targetId);
        
        if (targetModal) {
            targetModal.classList.add('active');
        }
    });
});

// 2. Close modal via 'X'
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-overlay').classList.remove('active');
    });
});

// 3. Close modal via background click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});


// ==========================================
// EVENT LIST INJECTOR
// ==========================================
// This script reads your list at the top and builds the HTML automatically.

const eventsContainer = document.getElementById('events-list');

if (eventsContainer) {
    upcomingEvents.forEach(event => {
        // Create the block
        const eventBlock = document.createElement('div');
        
        // Add the base class, and the secondary class if requested
        eventBlock.className = 'modal-btn';
        if (event.style === "secondary") {
            eventBlock.classList.add('secondary');
        }
        
        // Lock out the hover/click effects so it acts purely as text
        eventBlock.style.pointerEvents = 'none';
        
        // Add the event text
        eventBlock.textContent = event.name;
        
        // Inject it into the page
        eventsContainer.appendChild(eventBlock);
    });
}