import gql from "graphql-tag";

export const QUERY_DATA = gql`
  query AllVideos {
    allVideos {
      id
      link
    }
  }
`;
