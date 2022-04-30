export const whitelist = [
  'http://localhost:8000',
  'http://localhost:3000',
  'http://localhost:3007',
  undefined,
];

export const corsConfig = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      console.log('allowed cors for:', origin);
      callback(null, true);
    } else {
      console.log('blocked cors for:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  allowedHeaders:
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  methods: 'GET,PATCH,POST,DELETE,UPDATE,OPTIONS',
  credentials: true,
};

export const jwtConstants = {
  secret: 'secretKey123',
};
