import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import App from './components/App';
import './index.css';

const client = new ApolloClient({
  uri: "http://localhost:2300/api/v1/graphql"
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
