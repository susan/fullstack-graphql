const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String
    name: String!
    type: String!
    img (height: String, width: String): String
  }

  input petInput{
    name: String
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
    img: String
  }

   type Query{
     pets(input: petInput): [Pet]!
     pet(input: petInput): Pet!
   }
   type Mutation{
     newPet(input: NewPetInput!): Pet!
   } 
`;

module.exports = typeDefs
