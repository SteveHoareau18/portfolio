import express from 'express';
import { register, collectDefaultMetrics, Counter, Histogram } from 'prom-client';
import compression from 'compression';
import helmet from 'helmet';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable default metrics collection (CPU, memory, etc.)
collectDefaultMetrics({ prefix: 'portfolio_' });

// Custom metrics
const httpRequestDuration = new Histogram({
    name: 'portfolio_http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5]
});

const httpRequestTotal = new Counter({
    name: 'portfolio_http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
});

const pageViewCounter = new Counter({
    name: 'portfolio_page_views_total',
    help: 'Total number of page views',
    labelNames: ['page']
});

const userInteractionCounter = new Counter({
    name: 'portfolio_user_interactions_total',
    help: 'Total number of user interactions',
    labelNames: ['interaction_type']
});

// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disable for Vite dev mode
}));
app.use(compression());
app.use(express.json());

// Request tracking middleware
app.use((req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;
        const route = req.route ? req.route.path : req.path;

        httpRequestDuration.labels(req.method, route, res.statusCode).observe(duration);
        httpRequestTotal.labels(req.method, route, res.statusCode).inc();
    });

    next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API endpoint for tracking page views
app.post('/api/track/pageview', (req, res) => {
    const { page } = req.body;
    if (page) {
        pageViewCounter.labels(page).inc();
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Page parameter required' });
    }
});

// API endpoint for tracking user interactions
app.post('/api/track/interaction', (req, res) => {
    const { type } = req.body;
    if (type) {
        userInteractionCounter.labels(type).inc();
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Type parameter required' });
    }
});

// Serve static files from dist directory in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'dist')));

    // Serve index.html for all other routes (SPA support)
    app.get('{*splat}', (req, res) => {
        res.sendFile(join(__dirname, 'dist', 'index.html'));
    });
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on port ${PORT}`);
    console.log(`Metrics available at http://localhost:${PORT}/metrics`);
    console.log(`Health check at http://localhost:${PORT}/health`);
});
