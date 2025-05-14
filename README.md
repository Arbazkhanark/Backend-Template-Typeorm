# Node.js TypeORM Template

A reusable, scalable, and modular backend template built with Node.js, TypeORM, MongoDB, Redis, and TypeScript. Designed for rapid development of REST APIs, this template is ideal for projects like social platforms, gaming apps, or any application needing user management, authentication, and real-time features.

Originally created for ConnectSphere (a social gaming and communication platform), this template is general enough to be adapted for any project.

## 🚀 Features

- **REST API**: Built with Express and TypeScript for type-safe, scalable APIs
- **Database**: MongoDB with TypeORM for easy schema management and querying
- **Caching**: Redis for storing sessions or frequently accessed data
- **Authentication**: JWT-based authentication for secure user access
- **Testing**: Pre-configured with Jest for unit and integration tests
- **Docker**: Local MongoDB and Redis setup with Docker Compose
- **Code Quality**: ESLint and Prettier for consistent, clean code
- **API Versioning**: Supports versioned APIs (v1) for future compatibility
- **Modular Structure**: Clear separation of concerns (controllers, services, repositories)

## 🛠 Prerequisites

- Node.js (v18 or higher)
- Docker (for MongoDB and Redis)
- npm (v8 or higher)
- Git (to clone the repository)

## ⚙️ Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/connect-sphere-backend.git
cd connect-sphere-backend


### 1. Clone the Repository
📦 Install Dependencies
```bash
npm install



3. Setup Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env

- Update the .env file with your configuration:

```bash
cp PORT=3000
MONGO_URI=mongodb://localhost:27017/connect-sphere
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_here


4. Run MongoDB and Redis
Start Docker services:

bash
docker-compose up -d
This sets up MongoDB (port 27017) and Redis (port 6379).

5. Start the Server
Run in development mode:

bash
npm run dev
The server will start at http://localhost:3000.

6. Run Tests
Execute unit and integration tests:

bash
npm test
7. Build for Production
Compile TypeScript to JavaScript:

bash
npm run build
Start the production server:

bash
npm start



##### Folder structure:- 

connect-sphere-backend/
├── src/                     # Main source code
│   ├── api/                # API routes and logic
│   │   ├── v1/            # Versioned APIs (v1)
│   │   │   ├── auth/      # Authentication routes
│   │   │   ├── user/      # User routes
│   │   │   ├── chat/      # Chat routes
│   │   │   ├── room/      # Room routes
│   │   │   ├── friend/    # Friend routes
│   ├── config/            # Configuration files
│   ├── entities/          # TypeORM entities
│   ├── middleware/        # Custom middleware
│   ├── repositories/      # Database queries
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript types
│   ├── app.ts             # Express app
│   ├── server.ts          # Server entry
├── tests/                 # Test cases
├── docker/               # Docker config
├── .env                  # Environment
├── .eslintrc.js          # ESLint
├── .prettierrc           # Prettier
├── tsconfig.json         # TypeScript
├── package.json          # Dependencies
├── README.md             # Docs










🧑‍💻 Usage
Adding New Features
Create folder under src/api/v1/

Add routes/controller/service files

Define entities/repositories if needed

Extending Authentication
Modify auth.middleware.ts

Update auth endpoints

Database Operations
Define schemas in entities/

Create custom queries in repositories/

Caching
Use Redis client from config/redis.ts

Testing
Unit tests in tests/unit/

Integration tests in tests/integration/

🌐 Example APIs
Signup
bash
POST /api/v1/auth/signup
{
  "username": "test",
  "email": "test@example.com",
  "password": "password123"
}
Login
bash
POST /api/v1/auth/login
{
  "email": "test@example.com",
  "password": "password123"
}
Get Profile
bash
GET /api/v1/user/profile
Headers: Authorization: Bearer <token>
🤝 Contributing
Fork the repo

Create feature branch

Commit changes

Push to branch

Open PR

📜 License
MIT License

📬 Contact
Create issue or email your-email@example.com


This version:
1. Maintains consistent markdown formatting throughout
2. Has proper code block syntax with language identifiers
3. Uses uniform heading levels ( for main sections,  for subsections)
4. Keeps all content properly organized with clear section separation
5. Preserves all the original information in a more compact format
6. Is ready to copy/paste directly into a README.md file

The markdown will render correctly on GitHub and other platforms that support CommonMark or GitHub Flavored Markdown.