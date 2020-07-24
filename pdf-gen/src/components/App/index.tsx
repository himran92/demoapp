import React from 'react';
import { Provider, createClient, useQuery } from 'urql';

import { IForm } from '../../types'
import './App.css';
import Form from '../Form';


const client = createClient({ url: 'http://localhost:8000/graphql' });

const Forms = () => {
  const [res, executeQuery] = useQuery({
    query: `query { allForms { id name fields { id name type } }}`
  })

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) return <p>Failed :(</p>;

  return (
    <div style={{ padding: 20}}>
      <h4>Select a form</h4>
    <ul>
      {res.data.allForms.map((form: IForm) => (
        <Form {...form} />
        // <li key={form.id}>{form.name} </li>
        // <ul>Fields: {form.fields.map((field: IField) => <li key={field.id}>{field.name}</li>)}</ul>
      ))}
    </ul>
    </div>
  )
}

const App = () => 
  (
    <Provider value={client}>
      <div><Forms /></div>
    </Provider>
  );


export default App;
