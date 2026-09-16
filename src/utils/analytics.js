/**
 * Analytics utility for tracking metrics from the frontend
 */

const API_BASE = '';

/**
 * Track a page view
 * @param {string} page - Page identifier (e.g., 'home', 'about', 'contact')
 */
export async function trackPageView(page) {
    try {
        await fetch(`${API_BASE}/api/track/pageview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page }),
        });
    } catch (error) {
        console.error('Failed to track page view:', error);
    }
}

/**
 * Track a user interaction
 * @param {string} type - Interaction type (e.g., 'button_click', 'link_click', 'form_submit')
 */
export async function trackInteraction(type) {
    try {
        await fetch(`${API_BASE}/api/track/interaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type }),
        });
    } catch (error) {
        console.error('Failed to track interaction:', error);
    }
}

/**
 * Debounce function to limit tracking frequency
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
