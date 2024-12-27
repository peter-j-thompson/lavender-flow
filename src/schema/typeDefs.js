const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Zone {
        id: ID!
        name: String!
        coordinates: String!
    }

    type Query {
        getZones: [Zone]
    }
`;

module.exports = typeDefs;
