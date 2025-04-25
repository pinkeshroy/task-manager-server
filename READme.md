# 📌 Task Manager Server

A task management backend API built with **Node.js**, **TypeScript**, **Express**, **MongoDB**, and **Redis**. This project provides secure, scalable, and modular server-side functionalities for managing tasks, users, and authentication workflows.

---

## 🌐 Live API

**[https://task-manager-server-mnt4.onrender.com](https://task-manager-server-mnt4.onrender.com)**

---

## 📂 Repository

**[GitHub Repo](https://github.com/pinkeshroy/task-manager-server.git)**

---

## 📁 Project Folder Structure

```bash
task-manager-server/
🗁🔍 node_modules/
🗁🔍 src/
│   🗁 config/
│   🗁 controllers/
│   🗁 middleware/
│   │   ├── auth.middleware.ts
│   │   ├── cache.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── logger.middleware.ts
│   │   ├── role.middleware.ts
│   │   └── validate.middleware.ts
│   🗁 models/
│   │   ├── task.model.ts
│   │   └── user.model.ts
│   🗁 routes/
│   │   ├── auth.routes.ts
│   │   ├── task.routes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   🗁 tests/
│       └── auth.auth.ts
│
├── .dockerignore
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

## 📦 Tech Stack

- **Node.js**
- **TypeScript**
- **Express**
- **MongoDB**
- **Redis**
- **Jest** for testing
- **Docker** & **Docker Compose**

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js v18+**
- **npm**
- **Docker** & **Docker Compose**
- **MongoDB** and **Redis** (or use Docker setup)

---

### 🔧 Local Development Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/pinkeshroy/task-manager-server.git
cd task-manager-server
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Set up environment variables**

Create a `.env` file in the root directory with:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret
REDIS_PASSWORD=your_redis_password
REDIS_URI=URI
```

4️⃣ **Run in development mode**

```bash
npm run dev
```

---

### 📦 Build for production

```bash
npm run build
```

### ▶️ Start production server

```bash
npm start
```

---

## 🐳 Docker Setup

1️⃣ **Ensure Docker and Docker Compose are installed**

2️⃣ **Create a `.env` file** in root with:

```env
PORT=4000
MONGO_URI=mongodb://task-db:27017/task-manager
JWT_SECRET=your_jwt_secret
REDIS_PASSWORD=your_redis_password
```

3️⃣ **Run containers**

```bash
docker-compose up --build
```

- API will be available at `http://localhost:4000`
- MongoDB at `mongodb://localhost:27017`
- Redis at `localhost:6379` (with password)

4️⃣ **Stop containers**

```bash
docker-compose down
```

---

## 🔪 Running Tests

```bash
npm test
```

---

## 📖 API Overview

- **Auth Routes:** `/api/auth`
- **Task Routes:** `/api/tasks`

## 📢 Sample cURL Commands

### ✅ Endpoint (Live)

```
curl --location 'https://job-tracker-server-jpfy.onrender.com/'
```

### 🔑 Register User

```
curl -X POST https://task-manager-server-mnt4.onrender.com/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"email":"testuser@example.com", "password":"Password123"}'
```

### 🔐 Login User

```
curl -X POST https://task-manager-server-mnt4.onrender.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"testuser@example.com", "password":"Password123"}'
```

### 📅 Create Task

```
curl -X POST https://task-manager-server-mnt4.onrender.com/api/tasks \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -d '{"title":"New Task","description":"This is a new task."}'
```

---

## ✨ Features

- TypeScript-based Express server
- Modular routing and middleware
- JWT Authentication
- Role-based access control
- Caching via Redis
- Centralized error handling
- Request validation
- Dockerized development & production setup
- Unit & integration testing with Jest & Supertest

---

## 👨‍💻 Author

**Pinkesh Roy**

- [GitHub](https://github.com/pinkeshroy)

---