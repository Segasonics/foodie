import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()
const app = express();


const PORT=process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
//user routes
import userRoute from './routes/user.route.js';
//recipe routes
import recipeRoute from './routes/recipe.route.js'

app.use('/api/v1/users',userRoute);
app.use('/api/v1/recipes',recipeRoute);

// Catch-all for unmatched API routes (must be after the routes above)
app.all('/api/{*splat}', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});
// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
}

app.get(/^\/(?!api\/).*/, (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'frontend', 'dist', 'index.html'));
  });

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server connected to port : ${PORT}`);
})