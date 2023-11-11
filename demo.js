import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag'; 
 


const typeDefs = gql`
   type User {
     email: String!
     avatar: String
     friends: [User]
    }

    type Shoe {
      brand: String
      size: String
    }

    input ShoeInput {
      brand: String
      size: Int
    }

    type Query {
      me: User!
      shoes(input: ShoeInput): [Shoe]!
    }
  `
    const resolvers = {
      Query: {
        me() {
            return {
              email: 'yin@yin.com',
              avatar: 'http://yin.png',
              friends:[]
            },
         shoe({_. {input})   {
          return [
            {brand: "nike", size: 6},
            {brand: "canvas", size: 5}
          ]
         }         
        }
      }  
    }

    const server = new ApolloServer({ 
        typeDefs,
        resolvers
    })


//Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

    

  