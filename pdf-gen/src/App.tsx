import React from 'react';
import './App.css';
import { Provider, createClient } from 'urql';

const client = createClient({ url: 'http://localhost:8000/graphql' })

const App = () => 
  (
    <Provider value={client}>
      <div>Hi!</div>
    </Provider>
  );


export default App;
