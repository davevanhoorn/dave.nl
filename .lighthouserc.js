module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'started server on',
      url: [
        'http://localhost:3000/en',
        'http://localhost:3000/en/portfolio',
        'http://localhost:3000/en/blog',
        'http://localhost:3000/en/about',
        'http://localhost:3000/en/contact',
      ],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
      // target: "lhci",
    },
  },
};
