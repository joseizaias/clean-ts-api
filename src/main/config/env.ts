export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27027/clean-node-api',
  port: process.env.port ?? 5050
}
