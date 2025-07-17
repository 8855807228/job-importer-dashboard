<<<<<<< HEAD
# job-importer-dashboard
=======
# Job Importer System (MERN + BullMQ)

## Overview

A scalable job import system using React.js (Admin UI), Node.js + Express (API),
MongoDB (Mongoose), Redis (BullMQ). Imports jobs from XML feeds, tracks import
history, and provides a dashboard.

## Folder Structure

```
/client           -> React.js app for import tracking UI
/server           -> Node.js Express API
/server/queues    -> BullMQ setup, workers
/server/services  -> JobFetcherService (XML to JSON, fetch from feed)
/server/models    -> Mongoose schemas for jobs and import logs
/server/routes    -> All Express routes (job import trigger, history fetch)
/docs             -> architecture.md and visuals
```

## Setup

1. Copy `.env.example` to `.env` and fill in your values
2. Install dependencies in `/server` and `/client`
3. Start MongoDB and Redis locally or with Docker
4. Run backend and frontend

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `REDIS_URL`: Redis connection string
- `CONCURRENCY`: BullMQ worker concurrency
- `BATCH_SIZE`: Number of jobs per batch

## Architecture

See `/docs/architecture.md` for design decisions, error handling, and scaling
notes.

## Assumptions

- Feeds are reachable and return valid XML
- MongoDB and Redis are running
- No Next.js used

## Bonus Features

- Real-time status via Socket.IO
- Docker setup
- Cloud deployment
>>>>>>> 556b801 (started working with ass)
