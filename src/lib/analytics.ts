import ReactGA from 'react-ga4';

/**
 * Check if Analytics is initialized
 * @returns {boolean} - True if Analytics is initialized, false otherwise
 */
export const isAnalyticsInitialized = (): boolean => {
  if (typeof window === 'undefined') return false;

  return typeof window.gtag === 'function';
};

/**
 * Initialize Analytics
 * @param {string} id - Your Analytics Identifier
 */
export const initAnalytics = (id: string, options?: object, tagOptions?: object) => {
  if (!id) return;

  ReactGA.initialize(id, {
    gaOptions: options,
    gtagOptions: tagOptions,
  });
};

/**
 * Send a custom event to Analytics
 * @param {string} category - The general category (e.g., 'User', 'Cart', 'Video')
 * @param {string} action - The action taking place (e.g., 'Clicked Button', 'Played')
 * @param {string} label - (Optional) Additional info (e.g., 'Subscribe Button')
 * @param {number} value - (Optional) A numeric value (e.g., price, duration)
 */
export const trackAnalyticEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (!isAnalyticsInitialized()) return;
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Send a page view (Useful for Single Page Apps)
 * @param {string} path - The current path (e.g., window.location.pathname)
 * @param {string} title - The title of the page
 */
export const trackAnalyticPageView = (path: string, title: string) => {
  if (!isAnalyticsInitialized()) return;
  ReactGA.send({ hitType: 'pageview', page: path, title: title });
};
