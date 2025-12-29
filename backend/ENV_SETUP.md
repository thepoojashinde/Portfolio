# Environment Variables Setup

To make the backend work, you need to create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=4000

# MongoDB Configuration (REQUIRED)
# Get your connection string from MongoDB Atlas or your local MongoDB instance
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority

# Email Configuration (OPTIONAL - for email notifications)
# If you don't set these, the server will still work but won't send emails
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here
```

## Quick Setup Steps:

1. **Create `.env` file** in the `backend` folder
2. **Add at minimum**: `MONGODB_URL` (required for database)
3. **For email functionality**: Add all MAIL_* variables
4. **For Gmail**: You'll need to generate an App Password (not your regular password)

## Testing:

Once you have the `.env` file set up:
```bash
cd backend
npm start
```

The server should start on port 4000 (or whatever PORT you set).

