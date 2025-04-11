// src/utils/toastService.js

/**
 * Creates and displays a toast notification using pure DOM manipulation.
 *
 * @param {object} options - Toast options.
 * @param {string} options.message - The message to display.
 * @param {string} [options.icon='🦄'] - An optional emoji or icon character.
 * @param {number} [options.duration=3000] - Duration in milliseconds before auto-closing.
 */
export function showToast({ message, icon = '🦄', duration = 3000 }) {
    const container = document.getElementById('toaster-container');
    if (!container) {
      console.error('Toaster container element (#toaster-container) not found.');
      return;
    }
  
    // 1. Create the toast element
    const toastElement = document.createElement('div');
    toastElement.className = 'toast-instance opacity-0 translate-x-full transform transition-all duration-300 ease-out'; // Start hidden for transition
    toastElement.style.pointerEvents = 'auto'; // Make individual toast clickable
  
    // 2. Define the HTML structure (using DaisyUI/Tailwind classes)
    // Note: Using innerHTML for simplicity here. Sanitize input if 'message' or 'icon' could come from untrusted sources.
    toastElement.innerHTML = `
      <div class="alert bg-base-100 shadow-lg rounded-lg w-auto max-w-md">
        <div class="relative w-full">
          {/* Content Area */}
          <div class="flex items-center mr-8"> {/* Margin-right to avoid overlap with close btn */}
            ${icon ? `<span class="mr-3 text-xl">${icon}</span>` : ''}
            <span class="font-medium text-sm sm:text-base">${message}</span>
          </div>
  
          {/* Gradient Bar */}
          <div class="mt-2 h-1 w-full rounded bg-gradient-to-r from-green-400 via-blue-500 to-pink-500"></div>
  
          {/* Close Button (will add listener later) */}
          <button class="btn btn-xs sm:btn-sm btn-ghost btn-circle absolute top-[-4px] right-[-4px] text-base-content/70 hover:bg-base-content/10 toast-close-button" aria-label="Close">
            ✕
          </button>
        </div>
      </div>
    `;
  
    // 3. Add to the container
    container.appendChild(toastElement);
  
    // --- Timers and Transitions ---
  
    // Trigger the fade-in/slide-in animation slight delay after appending
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { // Double RAF for reliability across browsers
          toastElement.classList.remove('opacity-0', 'translate-x-full');
          toastElement.classList.add('opacity-100', 'translate-x-0');
        });
    });
  
  
    // Function to remove the toast
    const removeToast = () => {
      // Start fade-out animation
      toastElement.classList.remove('opacity-100', 'translate-x-0');
      toastElement.classList.add('opacity-0', 'translate-x-full');
  
      // Remove from DOM after animation finishes
      toastElement.addEventListener('transitionend', () => {
          if (toastElement.parentElement === container) { // Check if not already removed
               container.removeChild(toastElement);
          }
      }, { once: true }); // Listener cleans itself up
  
      // Fallback removal if transitionend doesn't fire (e.g., display: none)
       setTimeout(() => {
          if (toastElement.parentElement === container) {
              container.removeChild(toastElement);
          }
       }, 500) // Should be slightly longer than transition duration
  
      clearTimeout(autoCloseTimeout); // Clear the auto-close timeout if closed manually/animated out
    };
  
    // 4. Auto-close timer
    const autoCloseTimeout = setTimeout(removeToast, duration);
  
    // 5. Add click listener to the close button WITHIN this toast
    const closeButton = toastElement.querySelector('.toast-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
          removeToast();
      });
    }
  }