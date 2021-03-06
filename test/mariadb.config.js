module.exports.default = {
  dialect: 'mysql', // http://docs.sequelizejs.com/manual/installation/usage.html#dialects
  host: 'linuxserver-mariadb',
  user: 'POSTI',
  password: 'POSTI',
  database: 'POSTI',
  tablePrefix: '',
  dialectOptions: {}, // http://docs.sequelizejs.com/manual/installation/usage.html#options

  process: {
    chunkSize: 1000, // In how big chunks do we want to insert the data into database.
    concurrency: 5, // Number of concurrent inserts.
    deleteOnComplete: true, // Should the temporary data directory be removed after all steps.
  },

  tables: {
    addresses: {
      name: 'addresses',
      useTempTable: true,
    },
    postalcodes: {
      name: 'postalcodes',
      useTempTable: true,
    },
    postalcode_changes: {
      name: 'postalcode_changes',
      useTempTable: false,
    },
  },

  server: {
    port: 3005,
    tracing: false,
    cacheControl: true,
    cors: {
      origin: '*',
    },
    rateLimiter: {
      windowMs: 24 * 60 * 60 * 1000,
      max: 50,
    },
    speedLimiter: {
      windowMs: 60 * 60 * 1000,
      delayAfter: 10,
      delayMs: 5 * 1000,
    },
    playground: {
      endpoint: '/graphql',
      settings: {
        'editor.theme': 'light',
      },
    },
    query: {
      defaultLimit: 100,
      maxLimit: 10000,
    },
  },
};
