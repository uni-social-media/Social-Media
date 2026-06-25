# Social-Media

Simple chatting website!

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
