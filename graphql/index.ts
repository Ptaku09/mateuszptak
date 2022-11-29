import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.datocms.com/',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
