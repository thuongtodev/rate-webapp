import { ApolloError } from 'apollo-boost';

export const isAuthenticationError = (err: ApolloError): boolean => {
  for (const element of err.graphQLErrors) {
    if (element.extensions && element.extensions['code'] === 'AUTHENTICATION_REQUIRED') {
      return true;
    }
  }
  return false;
};
