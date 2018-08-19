import React from "react";
import { Query } from "react-apollo";
import { QUERY_DATA } from '../queries';
import Loadable from "react-loadable";

import "../styles/style.sass";

const LoadableText = Loadable({
  loader: () => import('./Title'),
  loading: () => <div>loading...</div>
});

class App extends React.Component {
  render() {
    return <Query query={QUERY_DATA}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>error...</div>
        console.log(data);
        return <div>
          good
          <LoadableText>HELLO</LoadableText>
          </div>;
      }}
    </Query>;
  }
}

export default App;
