
/*
// Generate Token with no expiring date (long-lived or non-expiring token)
require("dotenv").config(); // Load environment variables
const jwt = require("jsonwebtoken");

// Replace with a real user ID if needed
const userPayload = {
    id: 1,
    username: "testuser",
    role: "admin"  // Optional: Add roles if needed
};

// Generate a token WITHOUT expiration
const token = jwt.sign(userPayload, process.env.JWT_SECRET);

console.log("Generated Non-Expiring Test Token:", token);
*/

// Generate Token with expiring date
require("dotenv").config(); // Load environment variables
const jwt = require("jsonwebtoken");

// Replace with a real user ID if needed
const userPayload = {
    id: 1,
    username: "testuser",
    role: "admin"  // Optional: Add roles if needed
};

const token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: "87600h" });

console.log("Generated Test Token:", token);