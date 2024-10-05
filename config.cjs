// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUc2K21rY3VJVzBja21qMmNzOUVqc0k2em5CNGhrcG1ybHMrTGtIOVdIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG9NQThqYzF0QXZuQXdqTE1KZVZNRkQwSFNKc2dUcDR5a3U5V1g1aE9DVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQWI4N0FaL0liWlBJcHk0dmFPUy8xenEvVlFldS81UTR1UVJ2bWlSaGxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS042dzFlTWo4R1VZck1wV2JaSkJwZ0xYcE1Za0tQS3VPNzBxV3JkYmk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Mcm9TUlhHQytwQnhrL2daZnJTTmZuNG9lZ2w0L3NxcnYyNVd4Q0VyVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBNExMVStNUHdwaGxTNVBiZ0NKMlNoRkRqMHFSaVBydDZZWm1HNzVIaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05TOHZUMkUyZW1HMk85bUhsbXlBYWxZZWs0NlErN0g4NUYxZmhpTXdHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2p5aVg5WVlJRHNMRHNDQmZCYVRBRzRqTUdGTlpQVGxhUS9ZMWZiUWoxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIaXRSVVgxSTNnOHFRRGViOWZNRW1yY2pFQzZvcUlRcVlHaStUZ1dqQk1UVFFVbTRKaytFeVZNYlN4dXVOa29ENXprUmpCZFBSeWdUNGlQSFNkVGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJiSUxUVHZ5WVQ3NzlXQnNldzE2OEFJam1lYVFBRmtQUW92TmxsaGp6UUdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWaHNUaGdLVlJseXladEQ1UHd2N0lRIiwicGhvbmVJZCI6IjI4YWZkNjgyLTk4YTMtNDZlNC1hN2M5LTE1Y2NiYWFkNDhkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdERHMys1Z2t4QzI0aEZ1Um5JKzJkakR4SW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkRwYWJQeGVBQkxZMnVnYzJFdS9EanVZcVpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlMWlhNVDFMIiwibWUiOnsiaWQiOiIyNTQ3ODE1Njk4OTk6MTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2OW1xa0ZFTGZ5ZzdnR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgxSGNWT2taN1A5cFZUSmNaRVBqVDdYVGNiK1NkNkJtR3BCbURNdGk3eXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImUxTk90Uno3N3l2eGc4cjhIM281a3JLakJINEJxVXo5ZHM4YW9idDNiVy9sVlRKOE02VVAwTmFMUE9wNzQzcWk2dHlKMnJycWY5U2dmWlhzUllIdkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYdUtmeXZyblc3aG5uRm5zNytndGVxNVUrbmdLaXNsU1JKSm1pZFBqNTViWUJNc2RwcGk1TlA4RUlIdDVVWXMxb01ablVwdW5ieXpZanY2Y3YzZXRpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MTU2OTg5OToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZZFIzRlRwR2V6L2FWVXlYR1JENDArMTAzRy9rbmVnWmhxUVpnekxZdThyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MTE3MDYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUF0VCJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©Baraka Bega",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255762190568",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
