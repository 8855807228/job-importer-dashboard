# Architecture Decisions

## Why BullMQ?

BullMQ provides robust job queueing, concurrency, retries, and error tracking.
It scales well and integrates with Redis for distributed processing.

## XML Parsing

Jobs are fetched from XML feeds, parsed to JSON using `fast-xml-parser`, and
deduplicated before storing in MongoDB.

## Error Handling

All fetch, parse, and DB operations are wrapped in try/catch. Failures are
logged with reasons in `import_logs`.

## Modularity & Scaling

Services are split by responsibility (fetching, parsing, deduplication,
logging). The system can be split into microservices later by separating queue
workers and API.

## Future Improvements

- Add Socket.IO for real-time updates
- Dockerize for easy deployment
- Use cloud DBs and queues
