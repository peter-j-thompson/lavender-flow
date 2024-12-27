const resolvers = {
  Query: {
      getZones: () => {
          return [
              { id: 1, name: 'Zone A', coordinates: 'POINT(30 10)' },
              { id: 2, name: 'Zone B', coordinates: 'POINT(40 20)' },
          ];
      },
  },
};

module.exports = resolvers;
