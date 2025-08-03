const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const database = require("./config/database");
const cors = require('cors');

dotenv.config(); 

app.use(cors({
  origin: true,         
  credentials: true     
}));
// app.use(bodyParser.json());
app.use(express.json());
app.use('/api/auth', authRoutes);

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
