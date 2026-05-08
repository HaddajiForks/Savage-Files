const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const rateLimit = require('express-rate-limit');
require('dotenv').config();

//

const connect = require('./db_connect');
const fileRoutes = require('./routes/file');
const { GridFSBucket } = require('mongodb');

const app = express();
const allowedOrigins = [
    'http://localhost:3000',
    'https://savage-files.vercel.app',
];

// Allow Vercel preview deployments too (e.g. savage-files-git-foo-user.vercel.app)
const isAllowedOrigin = (origin) => {
    if (!origin) return true;
    if (allowedOrigins.includes(origin)) return true;
    if (/^https:\/\/savage-files-[a-z0-9-]+\.vercel\.app$/.test(origin)) return true;
    return false;
};

const corsOptions = {
    // Never throw — return false so the middleware just omits ACAO
    // (instead of producing a 500 without CORS headers that the browser may cache).
    origin: (origin, callback) => callback(null, isAllowedOrigin(origin)),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    maxAge: 600, // cache preflight for 10 minutes
};

app.use(cors(corsOptions));
// Make sure every OPTIONS preflight short-circuits with proper CORS headers,
// before hitting any rate limiter or other middleware.
app.options('*', cors(corsOptions));

app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prevent intermediaries (and the browser) from caching API responses
// that could otherwise be served cross-origin without CORS headers.
app.use((req, res, next) => {
    res.set('Vary', 'Origin');
    res.set('Cache-Control', 'no-store');
    next();
});

const limiterBase = {
    standardHeaders: true,
    legacyHeaders: false,
    // Don't count preflights against the limit — and don't let a 429
    // be the first response a fresh browser sees for a preflight.
    skip: (req) => req.method === 'OPTIONS',
};

const authLimiter = rateLimit({
    ...limiterBase,
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20,
    message: { error: 'Too many requests, please try again later.' },
});

const generalLimiter = rateLimit({
    ...limiterBase,
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { error: 'Too many requests, please try again later.' },
});

// idk

//#region Connect to mongoDB
const url = process.env.URI;
const connect_2 = async () => {
    try {
        const result = await mongoose.connect(url, {
            dbName: 'myFiles'
        });
        
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}
//#endregion

connect_2();
const router = require('./routes/user')
app.use('/user/login', authLimiter);
app.use('/user/register', authLimiter);
app.use('/user/send', authLimiter);
app.use('/user/reset-password', authLimiter);
app.use('/user', generalLimiter, router);

(async () => {
    try {
        const db = await connect();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads'
        });
        
        app.use('/files', generalLimiter, fileRoutes(db, bucket));
        

        app.get("/", (req, res) => res.send("Working"));

        app.listen(process.env.PORT, () => {
            console.log(`server running on ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to db:', error);
    }
})();
