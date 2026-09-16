import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import client from 'prom-client'

// Create a Registry
const register = new client.Registry()

// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'portfolio'
})

// Enable the collection of default metrics
client.collectDefaultMetrics({ register })

// Custom middleware plugin to expose metrics
const metricsMiddleware = () => ({
    name: 'prometheus-metrics',
    configureServer(server) {
        server.middlewares.use('/metrics', async (req, res, next) => {
            try {
                res.setHeader('Content-Type', register.contentType)
                res.end(await register.metrics())
            } catch (ex) {
                res.statusCode = 500
                res.end(ex)
            }
        })
    }
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(), metricsMiddleware()],
    server: {
        host: '0.0.0.0',
        port: 3000,
        watch: {
            usePolling: true
        }
    }
})
