import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getBooks } from './resolvers/get-books';

const typeDefs = `#graphql
  
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;



const resolvers = {
    Query: {
      books: getBooks,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);