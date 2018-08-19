import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import { ApolloProvider } from "react-apollo";
// import { ApolloClient } from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

const SERVER_URL = "https://api.graphcms.com/simple/v1/awesomeTalksClone";


const createHttpLink = () => {
  return import(/* webpackChunkName: "HttpLink" */ "apollo-link-http")
    .then(({ HttpLink }) => {
      const httpLink = new HttpLink({
        uri: SERVER_URL
      });

      return httpLink;
    })
    .catch(err => "Error..");
};

const createCache = () => {
  return import(/* webpackChunkName: "InMemoryCache" */ "apollo-cache-inmemory")
    .then(({ InMemoryCache }) => {
      const cache = new InMemoryCache();
      return cache;
    })
    .catch(err => "Error...");
};

const createClient = () => {
  return import(/* webpackChunkName: "ApolloClient" */ "apollo-client")
    .then(async ({ ApolloClient }) => {
      const httpLink = await createHttpLink();
      const cache = await createCache();
      const client = new ApolloClient({
        link: httpLink,
        cache
      });

      return client;
    })
    .catch(err => "Error...");
};


const renderApp = (Component) => {
  return import(/* webpackChunkName: "ApolloProvider" */ 'react-apollo').then(async ({ ApolloProvider }) => {
    const client = await createClient();
    ReactDOM.render(
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>,
      document.getElementById("app")
    );
  })
}

renderApp(App);

module.hot.accept();
