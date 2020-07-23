import React from 'react';
import './App.css';
import { Provider, createClient, useQuery } from 'urql';

const client = createClient({ url: 'http://localhost:8000/graphql' });

interface Form {
  id: number | string;
  name: string;
  fields: Field[]
}

interface Field {
  id: number | string;
  name: string;
}

const Forms = () => {
  const [res, executeQuery] = useQuery({
    query: `query { allForms { id name fields { id name } }}`
  })

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) return <p>Failed :(</p>;

  return (
    <ul>
      {res.data.allForms.map((form: Form) => (
        <li key={form.id}>{form.name} 
           <ul>Fields: {form.fields.map(field => <li key={field.id}>{field.name}</li>)}</ul></li>
      ))}
    </ul>
  )
}

const App = () => 
  (
    <Provider value={client}>
      <div><Forms /></div>
    </Provider>
  );


export default App;
