# Social-Media

Simple chatting website!

## Brief Architecture Note

This project is built using a client-server architecture:

- **Client/Frontend:** Built with React to handle the user interface.
- **Server/Backend:** A Node.js server that manages business logic and handles real-time events via **WebSockets(Socket.io)**.
- **Database:** A local database instance managed via **Docker** to store all platform data.

## Prerequisites

Before starting, make sure you have the following installed on your computer:

- **Node.js** (v18 or higher recommended)
- **Docker** & **Docker Desktop**

### Step 1: Clone & Install Dependencies

Run these commands in your terminal to download the repository and install its tools:

```bash
git clone https://github.com/uni-social-media/Social-Media.git
cd Social-Media
```

## Database Setup

To start database locally using Docker:

```bash
docker compose up -d
```

To stop it:

```bash
docker compose down
```

---

### Step 3: Connecting Your Server

To connect your server application to this database, you will use a connection string. In your server's environment configuration (e.g., a `.env` file), you should set:

```env
MONGO_URI=mongodb://admin:password@localhost:27017/social_media?authSource=admin
```

```

```

```

```

### Step 4: Run the Application

Now that your database container is running and your configuration is set, launch the development servers with:

```bash
npm run dev
```
