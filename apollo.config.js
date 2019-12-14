module.exports = {
    client: {
      includes: [__dirname + '/graphql/**/*'],
      addTypename: false,
      service: {
        name: 'rateengine',
        url: 'http://localhost:8100/graphql',
      },
    },
  };
  