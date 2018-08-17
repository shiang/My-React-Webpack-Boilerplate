import React from "react";
import { Query } from "react-apollo";
import { QUERY_DATA } from '../queries/index';
//import "./App.scss";



class App extends React.Component {
  render() {
    return <Query query={QUERY_DATA}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>error...</div>
        console.log(data);
        return <div>good</div>;
      }}
    </Query>;
  }
}

export default App;
