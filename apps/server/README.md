# Server Application

This is the backend foundation for our social media platform, built using Express and Mongoose.

## Local Environment Configuration

Before booting up the server, you must configure your local environment variables.

1. Inside the `apps/server/` directory, duplicate the `.env.example` file and rename the copy to `.env`.
2. Open your new `.env` file and ensure it includes the Docker database credentials specified in the root README:

```env
PORT=5000
MONGO_URI=mongodb://admin:password@localhost:27017/social_media?authSource=admin
JWT_SECRET=your_temporary_local_secret_string
CLIENT_URL=http://localhost:3000