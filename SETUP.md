# MentorConnect Setup Guide

This guide will help you set up and run the MentorConnect application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
2. **MongoDB** - Either:
   - Local MongoDB installation - [Download MongoDB](https://www.mongodb.com/try/download/community)
   - MongoDB Atlas account (cloud database)
3. **npm** (comes with Node.js) or **yarn** package manager
4. **Git** (optional, for version control) - [Download Git](https://git-scm.com/)

## Project Structure

The project is organized as a full-stack application:
```
mentorconnect/
├── client/     # React frontend
├── server/     # Node.js backend
└── ...         # Configuration and documentation files
```

## Installation Steps

### 1. Clone or Download the Repository

If using Git:
```bash
git clone <repository-url>
cd mentorconnect
```

If downloaded as ZIP, extract and navigate to the project directory.

### 2. Install Backend Dependencies

Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

Navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

#### Backend Configuration

In the `server` directory, create a `.env` file with the following content:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mentorconnect
JWT_SECRET=your_super_secret_jwt_key_here
```

**MongoDB Configuration Options:**

1. **Local MongoDB:**
   ```
   MONGODB_URI=mongodb://localhost:27017/mentorconnect
   ```

2. **MongoDB Atlas (Cloud):**
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mentorconnect?retryWrites=true&w=majority
   ```

**JWT Secret:**
Replace `your_super_secret_jwt_key_here` with a strong secret key for JWT token generation.

#### Frontend Configuration

The frontend is already configured to proxy API requests to the backend server during development.

### 5. Start MongoDB (if using local installation)

If you're using a local MongoDB installation, start the MongoDB service:

**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### 6. Run the Application

You have two options to run the application:

#### Option 1: Run Backend and Frontend Separately

**Start the backend server:**
```bash
cd server
npm run server
```

**Start the frontend development server:**
```bash
cd client
npm start
```

#### Option 2: Run Both Servers with One Command

From the root directory:
```bash
npm run dev
```

This will start both the backend and frontend servers simultaneously.

### 7. Access the Application

Once both servers are running:

- **Frontend:** Open your browser and navigate to `http://localhost:3000`
- **Backend API:** Accessible at `http://localhost:5000`

## Development Workflow

### Backend Development

The backend server will automatically restart when you make changes to the code thanks to nodemon.

### Frontend Development

The frontend development server includes hot reloading, so changes will be reflected immediately in your browser.

## Testing the Application

### User Registration and Login

1. Navigate to `http://localhost:3000/register`
2. Create a new account (student or alumni)
3. Log in with your credentials
4. Explore the dashboard and profile features

### Mentorship Features

1. As a student, browse mentors on the "Find Mentors" page
2. Request mentorship from a mentor
3. As a mentor, view and respond to mentorship requests
4. Once connected, set goals and exchange messages

## Common Issues and Solutions

### Port Conflicts

If you encounter port conflicts:

1. **Backend port (5000):** Change the PORT variable in `server/.env`
2. **Frontend port (3000):** The development server will prompt you to use another port

### MongoDB Connection Issues

1. Ensure MongoDB is running
2. Check your MongoDB URI in the `.env` file
3. Verify your MongoDB Atlas connection string if using cloud database
4. Check firewall settings if connecting to a remote database

### Dependency Installation Issues

1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` folders and `package-lock.json` files
3. Reinstall dependencies: `npm install`

## Building for Production

### Backend

The backend is ready to run in production as-is.

### Frontend

To create a production build of the frontend:
```bash
cd client
npm run build
```

This creates an optimized build in the `build` directory.

## Deployment

### Backend Deployment Options

1. **Heroku:**
   - Add MongoDB add-on or use MongoDB Atlas
   - Set environment variables in Heroku dashboard

2. **DigitalOcean App Platform:**
   - Connect your GitHub repository
   - Configure environment variables

3. **AWS EC2:**
   - Deploy using PM2 process manager
   - Configure nginx as a reverse proxy

### Frontend Deployment Options

1. **Netlify:**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

2. **Vercel:**
   - Connect your GitHub repository
   - Framework preset: Create React App

3. **GitHub Pages:**
   - Install `gh-pages` package
   - Add deployment scripts to `package.json`

## API Documentation

The backend API is documented through the route files in `server/routes/`. Each route file contains the available endpoints and their expected parameters.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a new Pull Request

## Support

For any issues or questions:

1. Check the existing issues in the repository
2. Create a new issue with a detailed description of the problem
3. Include error messages, steps to reproduce, and your environment details