export default {
  name: 'register-service-worker',

  initialize() {
    const isSecure = (document.location.protocol === 'https:') ||
      (location.hostname === "localhost");

    if (isSecure && ('serviceWorker' in navigator)) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(Discourse.ServiceWorkerURL)
          .catch(error => {
            Ember.Logger.info(`Failed to register Service Worker: ${error}`);
          });
      });
    }
  }
};
