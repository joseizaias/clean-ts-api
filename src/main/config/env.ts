export default {
  // mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongodb:27017/clean-node-api',
  // mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongodb:27017/clean-node-api',
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'jial9011977'
}
