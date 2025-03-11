const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // ✅ Load environment variables

const app = express();
const PORT = process.env.PORT ; // ✅ Use PORT from .env, fallback to 5000

app.use(cors());
app.use(express.json());

// Database Connection
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Database connection error:", err);
        
    }
};

// Start Server
app.listen(PORT, async () => {
    await ConnectDB();
    console.log(`App listening on port ${PORT}`);
});
