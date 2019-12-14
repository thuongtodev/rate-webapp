import gql from 'graphql-tag';

export const LIST_LENDER_QUERY = gql`
  query listLenderQuery {
    lendersConnection {
      nodes {
        id
      }
      totalCount
    }
  }
`;
