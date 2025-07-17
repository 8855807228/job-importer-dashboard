// BullMQ queue setup for job imports
const { Queue } = require('bullmq');

const importQueue = new Queue('job-import', {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  },
});

module.exports = importQueue;
