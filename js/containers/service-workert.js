import React from 'react';
import serviceWorker from '../../webpack/loaders/sw-loader?name=sw.worker.js!../workers/sw.worker.js';

class ServiceWorker extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      console.error('SW mounted');

      serviceWorker({scope: '/'})
        .then(registration => console.error('registration', registration))
        .catch(error => console.error('error', error));
    }
  }
  componentWillUnmount() {
    console.error('componentWillUnmount');
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return null;
  }
}

export default ServiceWorker;
