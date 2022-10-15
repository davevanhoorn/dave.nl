module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'yarn start',
      url: ['http://localhost:3000/', 'http://localhost:3000/about'],
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
