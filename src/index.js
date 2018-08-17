import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const SERVER_URL = "https://api.graphcms.com/simple/v1/awesomeTalksClone";
const BEARER_TOKEN = "bearertoken";

const httpLink = new HttpLink({
  uri: SERVER_URL
  // headers: {
  //   authorization: `Bearer ${BEARER_TOKEN}`
  // }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);

module.hot.accept();
