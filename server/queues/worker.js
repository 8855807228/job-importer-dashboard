// BullMQ worker for job import processing
require('dotenv').config();
const { Worker } = require('bullmq');
const JobFetcherService = require('../services/JobFetcherService');
const Job = require('../models/Job');
const ImportLog = require('../models/ImportLog');

const importWorker = new Worker(
  'job-import',
  async (job) => {
    const feedSources = [
      'https://jobicy.com/?feed=job_feed',
      'https://jobicy.com/?feed=job_feed&job_categories=copywriting',
      'https://jobicy.com/?feed=job_feed&job_categories=data-science',
      'https://jobicy.com/?feed=job_feed&job_categories=business',
      'https://jobicy.com/?feed=job_feed&job_categories=management',
      'https://www.higheredjobs.com/rss/articleFeed.cfm',
    ];

    for (const feedSource of feedSources) {
      let totalFetched = 0,
        newJobs = 0,
        updatedJobs = 0,
        failedJobs = 0,
        failedReasons = [];
      try {
        const data = await JobFetcherService.fetchAndParse(feedSource);
        // TODO: Parse jobs from data and insert/update in MongoDB
        // For each job, check hash for deduplication
        // ...existing code...
        totalFetched = Array.isArray(data.jobs) ? data.jobs.length : 0;
      } catch (err) {
        failedJobs++;
        failedReasons.push(err.message);
      }
      await ImportLog.create({
        feedSource,
        timestamp: new Date(),
        totalFetched,
        newJobs,
        updatedJobs,
        failedJobs,
        failedReasons,
      });
    }
  },
  {
    connection: {
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT || 6379,
    },
    concurrency: process.env.CONCURRENCY || 5,
  },
);

importWorker.on('completed', (job) => {
  console.log(`Import job ${job.id} completed.`);
});

importWorker.on('failed', (job, err) => {
  console.error(`Import job ${job.id} failed:`, err);
});
