# Portfolio Backend API

This is the backend server for the portfolio website contact form.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=4000

# MongoDB Configuration
MONGODB_URL=your_mongodb_connection_string_here

# Email Configuration (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here
```

### 3. Running the Server

**Development mode (with nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/v1/health`
- Returns server status

### Create User (Contact Form)
- **POST** `/api/v1/createUser`
- Body: `{ name, email, phone?, message? }`
- Creates a user record and sends confirmation emails

## Notes

- Make sure MongoDB is running and accessible
- For Gmail, you'll need to use an App Password instead of your regular password
- The server will automatically send emails when a user is created (if email is configured)

