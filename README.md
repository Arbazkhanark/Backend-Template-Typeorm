ConnectSphere Backend
A social gaming and communication platform backend built with Node.js, TypeORM, MongoDB, and Redis.
Setup

Install Dependencies:
npm install


Setup Environment:

Copy .env.example to .env and update variables.


Run MongoDB and Redis:
docker-compose up -d


Start Server:
npm run dev


Run Tests:
npm test



Folder Structure

src/api/v1/: Versioned API routes and controllers.
src/config/: Configuration files (DB, Redis, env).
src/entities/: TypeORM entities for MongoDB.
src/middleware/: Custom middleware (auth, error).
src/repositories/: TypeORM repositories for DB queries.
src/services/: Business logic.
src/utils/: Utility functions.
src/types/: TypeScript interfaces/types.
tests/: Unit and integration tests.

