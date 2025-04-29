// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const doctorRoutes = require('./routes/doctorRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/doctors', doctorRoutes);

// // MongoDB Connection
// const MONGO_URI = "mongodb+srv://aftabshaikh45000:t3iWcQN5fJumME6G@cluster0.m2ugfno.mongodb.net/rural_health?retryWrites=true&w=majority&appName=Cluster0";

// async function connectDB() {
//     try {
//         await mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('✅ MongoDB connected');
//     } catch (err) {
//         console.error('❌ MongoDB connection error:', err);
//         process.exit(1); // Exit server if MongoDB fails
//     }
// }

// connectDB();

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// // Catch uncaught exceptions
// process.on('uncaughtException', (err) => {
//     console.error('Uncaught Exception:', err);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', doctorRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    }
}

connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
