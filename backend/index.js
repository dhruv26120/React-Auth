const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const eventRoutes=require('./routes/events')
const dotenv = require('dotenv');
const database = require("./config/database");
const cors = require('cors');

dotenv.config(); 

app.use(cors({
  origin: true,         
  credentials: true     
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

// app.use(bodyParser.json());
app.use(express.json());
app.use(authRoutes);
app.use('/events', eventRoutes);

// Connecting to database
database.connect();

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
