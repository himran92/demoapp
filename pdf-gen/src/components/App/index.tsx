import React, { useState } from 'react';
import { Provider, createClient, useQuery } from 'urql';

import { IForm } from '../../types'
import './App.css';
import Form from '../Form';


const client = createClient({ url: 'http://localhost:8000/graphql' });

const Forms = () => {
  const [currentForm, selectForm] = useState('')
  const [res, executeQuery] = useQuery({
    query: `query { allForms { id name fields { id name type } }}`
  })

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) return <p>Failed :(</p>;

  const forms = res.data.allForms

  return (
    <div className="app-container">
      {!currentForm && (
        <div className="form-select">
          <h4>Select a form</h4>
          <ul>
            {forms.map((form: IForm) => (
              <li onClick={() => selectForm(form.name)} key={form.id}>{form.name}</li>
            ))}
          </ul>
        </div>
      )}
      {currentForm && (
        <div>
          <Form {...forms.find((form: IForm) => form.name === currentForm)} />
          <span onClick={() => selectForm('')}>Back to forms</span>
        </div>
      )}
    </div>
  )
}

const App = () => 
  (
    <Provider value={client}>
      <Forms />
    </Provider>
  );


export default App;
