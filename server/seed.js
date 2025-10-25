require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Post = require('./models/Post');

connectDB(process.env.MONGO_URI);

const samplePosts = [
  { title: 'Welcome to My Blog', content: 'This is the first post in your MERN stack blog app!', author: 'Admin' },
  { title: 'MERN Stack Rocks', content: 'MongoDB, Express, React, and Node.js make a powerful team!', author: 'Yusuph' }
];

const importData = async () => {
  try {
    await Post.deleteMany();
    await Post.insertMany(samplePosts);
    console.log('✅ Sample posts added!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    process.exit(1);
  }
};

importData();
