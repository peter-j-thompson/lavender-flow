const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(4000, async () => {
        console.log('Server is running on http://localhost:4000/graphql');

        try {
            await sequelize.authenticate();
            console.log('Database connected successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
};

startServer();
