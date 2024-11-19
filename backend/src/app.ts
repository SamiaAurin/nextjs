import express from 'express';
import hotelRoutes from './routes/hotelRoutes';
import path from 'path';
import cors from 'cors';

const app = express();


app.use(express.json()); // Middleware to parse JSON bodies

// Use CORS middleware
//app.use(cors({ origin: 'http://localhost:3000' }));  // Allow requests from the frontend
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
//const port = process.env.PORT || 3002;

// Use hotel routes
app.use('/api', hotelRoutes);


// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV !== 'test') {
  const port = 3002;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}



export default app;