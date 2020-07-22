import React from 'react';
import './App.css';
import { Provider, createClient, useQuery } from 'urql';

const client = createClient({ url: 'http://localhost:8000/graphql' });

interface Form {
  id: number | string;
  name: string;
}

const Forms = () => {
  const [res, executeQuery] = useQuery({
    query: `query { allForms { id name }}`
  })

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) return <p>Failed :(</p>;

  return (
    <ul>
      {res.data.allForms.map((form: Form) => (
        <li key={form.id}>{form.name}</li>
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
