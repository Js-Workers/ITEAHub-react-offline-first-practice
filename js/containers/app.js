import React from 'react';
import LoaderContainer from './loader';
import ServiceWorker from './service-workert';
import TodosContainer from './todos';

const App = () => (
  <div>
    <TodosContainer />
    <LoaderContainer />
    <ServiceWorker />
  </div>
);

export default App;
