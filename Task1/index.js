

const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto'); // For generating reset tokens
const twilio = require('twilio');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library'); // Google auth library



const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1099178@jR',
  database: 'signup'
});

//  Google OAuth2 client
// const client1 = new OAuth2Client('1039540380949-2etj9m5hqso114rp0st0aulu02gtmtop.apps.googleusercontent.com');

// // Secret key for JWT
// const JWT_SECRET_KEY = 'sangee';

// // Google Sign-in Route
// app.post('/google-login', async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await client1.verifyIdToken({
//       idToken: token,
//       audience: '1039540380949-2etj9m5hqso114rp0st0aulu02gtmtop.apps.googleusercontent.com',  // Specify your client ID
//     });

//     const payload = ticket.getPayload();
//     const { sub: googleId, name, email } = payload;

//     // Check if the user exists in the database
//     const [rows] = await pool.query('SELECT * FROM users WHERE googleId = ?', [googleId]);

//     if (rows.length === 0) {
//       // Register new user if not found
//       await pool.query('INSERT INTO users (googleId, username, email) VALUES (?, ?, ?)', [googleId, name, email]);
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ googleId, email }, JWT_SECRET_KEY, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

app.use(cors());
app.use(bodyParser.json());








app.post('/google-login', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: 'Token is missing' });
    }

    // Verify Google token (use Google OAuth2 client library)
    const client = new OAuth2Client('1039540380949-2etj9m5hqso114rp0st0aulu02gtmtop.apps.googleusercontent.com');
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:'1039540380949-2etj9m5hqso114rp0st0aulu02gtmtop.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    const userId = payload['sub']; // Get user info

    // Example: Respond with a JWT token after successful authentication
    const jwtToken = generateJWT(userId);
    res.status(200).json({ message: 'Login successful', token: jwtToken });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





// app.use(cors());
// app.use(bodyParser.json());
// add demo ooo oo
 //





const accountSid = 'AC45b3e13210432ee9ae595307d60bbebc'; // Replace with your Account SID
const authToken = 'ece92f1cbfa95b4c284236a23cf491fa';   // Replace with your Auth Token
const serviceId = 'VA181e8ad9cb3d3e52d9b95130e007b122';  // Replace with your Service SID

const client = twilio(accountSid, authToken);




app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
    
  // 1. Validate username
  if (!username || username.length < 3 || username.length > 30) {
    return res.status(400).json({ message: 'Username must be between 3 and 30 characters.' });
  }
// 3. Validate password length
if (!password || password.length < 6) {
  return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
}

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return res.status(200).json({ message: 'Login successful', user: { username: user.username } });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Forgot password
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    await pool.query('UPDATE users SET resetToken = ?, tokenExpiry = ? WHERE email = ?', [resetToken, tokenExpiry, email]);

    // Simulate sending an email
    console.log(`Password reset token for ${email}: ${resetToken}`);

    res.status(200).json({ message: 'Password reset token sent to email' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset password
app.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE resetToken = ?', [token]);

    if (rows.length === 0 || new Date() > new Date(rows[0].tokenExpiry)) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password = ?, resetToken = NULL, tokenExpiry = NULL WHERE resetToken = ?', [hashedPassword, token]);

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to send OTP
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  try {
      const verification = await client.verify.v2.services(serviceId)
          .verifications.create({ to: phoneNumber, channel: 'sms' });
      res.status(200).send({ message: 'OTP sent successfully!', verification });
  } catch (error) {
      res.status(500).send({ error: 'Failed to send OTP', details: error.message });
  }
});
//verify end point
app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;
  try {
      const verificationCheck = await client.verify.v2.services(serviceId)
          .verificationChecks.create({ to: phoneNumber, code: otp });

      if (verificationCheck.status === 'approved') {
          res.status(200).send({ message: 'Verification successful!', verificationCheck });
      } else {
          res.status(400).send({ message: 'Invalid OTP', verificationCheck });
      }
  } catch (error) {
      res.status(500).send({ error: 'Verification failed', details: error.message });
  }
});


app.get('/', (req, res) => {
  res.send("Hello from Node API Server");
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});