// lib/gtag.js
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('G-VS3C2VKRTK');
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
