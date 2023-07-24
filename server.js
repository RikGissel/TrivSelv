require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*', method: "GET,HEAD,PUT,PATCH,POST,DELETE" }));

const PORT = 8080;
const mongoURI = process.env.MONGO_URI;
const dbName = 'TrivSelvDB';

const jwtSecret = 'your_secret_key_here'; // Replace with a strong secret for production

let db;

async function startServer() {
  try {
    const client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    db = client.db(dbName);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.userId = decodedToken.userId; // Attach the userId to the request for later use
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

// Protected route, accessible only to authenticated users
app.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    // Retrieve user data using req.userId and return the dashboard data
    const user = await db.collection('trivUsers').findOne({ _id: ObjectId(req.userId) });

    // Return user dashboard data
    res.json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Could not fetch user data' });
  }
});

app.post('/trivUsers/register', async (req, res) => {
  const { name, email, number, password } = req.body;

  try {
    // Check if email already exists in the database
    const existingUser = await db.collection('usersVFF').findOne({ email });
    if (existingUser) {
      // Email already exists
      res.status(400).json({ message: 'Email already exists' });
    } else {
      // Email does not exist, proceed with user registration

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user object with the wallet attribute
      const newUser = {
        name,
        email,
        number,
        password: hashedPassword,
      };

      // Save user information in the database
      await db.collection('trivUsers').insertOne(newUser);
      res.status(200).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Could not register user' });
  }
});

app.get('/trivUsers', async (req, res) => {
  try {
    // Get all users from the database
    const users = await db.collection('trivUsers').find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ message: 'Could not get users' });
  }
});

app.post('/trivUsers/login', async (req, res) => {
  try {
    // Find the user with the specified email in the database
    const { email, password } = req.body;
    const user = await db.collection('trivUsers').findOne({ email });

    if (user) {
      // Compare the provided password with the hashed password in the database
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        // Passwords match, login successful
        // Generate a JWT
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
      } else {
        // Passwords do not match
        res.status(401).json({ message: 'Invalid login credentials' });
      }
    } else {
      // User not found
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Could not fetch user' });
  }
});

app.use(express.static(__dirname));

startServer();
